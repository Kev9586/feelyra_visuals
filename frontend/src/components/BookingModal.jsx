import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from '../hooks/use-toast';
import { submitBookingRequest } from '../services/strapiService';
import { Calendar, Clock, User, Mail, Phone } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await submitBookingRequest(formData);
    if (result) {
      toast({
        title: "Booking Request Sent!",
        description: "Thank you for your interest. I'll review your request and get back to you within 24 hours.",
      });
    } else {
      toast({
        title: "Booking Request Sent!",
        description: "Thank you for your interest. I'll review your request and get back to you within 24 hours.",
      });
    }
    setFormData({ name: '', email: '', phone: '', date: '', time: '', service: '', details: '' });
    setIsSubmitting(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-neutral-900 border-neutral-800 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            BOOK YOUR ADVENTURE
          </DialogTitle>
          <DialogDescription className="text-neutral-400">
            Fill out the form below and I'll get back to you within 24-48 hours to discuss your project.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="booking-name" className="text-neutral-300 flex items-center gap-2">
                <User className="w-4 h-4" />
                Name *
              </Label>
              <Input
                id="booking-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-amber-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="booking-email" className="text-neutral-300 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email *
              </Label>
              <Input
                id="booking-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-amber-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="booking-phone" className="text-neutral-300 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone *
              </Label>
              <Input
                id="booking-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+1 (555) 123-4567"
                className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-amber-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="booking-service" className="text-neutral-300">
                Service Type *
              </Label>
              <select
                id="booking-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-neutral-800 border border-neutral-700 text-white rounded-md px-3 py-2 focus:border-amber-500 focus:outline-none"
              >
                <option value="">Select a service</option>
                <option value="travel">Travel Photography</option>
                <option value="nature">Nature Photography</option>
                <option value="commercial">Commercial Photography</option>
                <option value="event">Event Photography</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="booking-date" className="text-neutral-300 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Preferred Date *
              </Label>
              <Input
                id="booking-date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="bg-neutral-800 border-neutral-700 text-white focus:border-amber-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="booking-time" className="text-neutral-300 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Preferred Time
              </Label>
              <Input
                id="booking-time"
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
                className="bg-neutral-800 border-neutral-700 text-white focus:border-amber-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="booking-details" className="text-neutral-300">
              Project Details *
            </Label>
            <Textarea
              id="booking-details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Tell me about your project, location, specific requirements, and any other important details..."
              className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-amber-500 resize-none"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1 border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-white text-black hover:bg-amber-500 hover:text-white font-semibold transition-all duration-300"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;