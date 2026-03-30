import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from '../hooks/use-toast';
import { submitBookingRequest } from '../services/strapiService';
import { Calendar, Clock, User, Mail, Phone } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', date: '', time: '', service: '', details: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await submitBookingRequest(formData);
    toast({ title: "Booking Request Sent!", description: "I'll review your request and get back to you within 24 hours." });
    setFormData({ name: '', email: '', phone: '', date: '', time: '', service: '', details: '' });
    setIsSubmitting(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent data-testid="booking-modal" className="bg-neutral-950 border-white/10 text-white max-w-2xl max-h-[90vh] overflow-y-auto rounded-none">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold tracking-tight" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            BOOK YOUR ADVENTURE
          </DialogTitle>
          <DialogDescription className="text-neutral-500 text-sm font-light">
            Fill out the form below and I'll get back to you within 24-48 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-1">
              <Label className="text-neutral-400 text-xs uppercase tracking-wider flex items-center gap-2">
                <User className="w-3 h-3" /> Name *
              </Label>
              <Input name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name"
                data-testid="booking-name" className="bg-white/5 border-white/10 text-white placeholder:text-neutral-600 focus:border-white/40 rounded-none" />
            </div>
            <div className="space-y-1">
              <Label className="text-neutral-400 text-xs uppercase tracking-wider flex items-center gap-2">
                <Mail className="w-3 h-3" /> Email *
              </Label>
              <Input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="your.email@example.com"
                data-testid="booking-email" className="bg-white/5 border-white/10 text-white placeholder:text-neutral-600 focus:border-white/40 rounded-none" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-1">
              <Label className="text-neutral-400 text-xs uppercase tracking-wider flex items-center gap-2">
                <Phone className="w-3 h-3" /> Phone *
              </Label>
              <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="+1 (555) 123-4567"
                data-testid="booking-phone" className="bg-white/5 border-white/10 text-white placeholder:text-neutral-600 focus:border-white/40 rounded-none" />
            </div>
            <div className="space-y-1">
              <Label className="text-neutral-400 text-xs uppercase tracking-wider">Service Type *</Label>
              <select name="service" value={formData.service} onChange={handleChange} required
                data-testid="booking-service"
                className="w-full bg-white/5 border border-white/10 text-white px-3 py-2 focus:border-white/40 focus:outline-none text-sm">
                <option value="">Select a service</option>
                <option value="travel">Travel Photography</option>
                <option value="nature">Nature Photography</option>
                <option value="commercial">Commercial Photography</option>
                <option value="event">Event Photography</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-1">
              <Label className="text-neutral-400 text-xs uppercase tracking-wider flex items-center gap-2">
                <Calendar className="w-3 h-3" /> Preferred Date *
              </Label>
              <Input name="date" type="date" value={formData.date} onChange={handleChange} required
                data-testid="booking-date" className="bg-white/5 border-white/10 text-white focus:border-white/40 rounded-none" />
            </div>
            <div className="space-y-1">
              <Label className="text-neutral-400 text-xs uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-3 h-3" /> Preferred Time
              </Label>
              <Input name="time" type="time" value={formData.time} onChange={handleChange}
                data-testid="booking-time" className="bg-white/5 border-white/10 text-white focus:border-white/40 rounded-none" />
            </div>
          </div>

          <div className="space-y-1">
            <Label className="text-neutral-400 text-xs uppercase tracking-wider">Project Details *</Label>
            <Textarea name="details" value={formData.details} onChange={handleChange} required rows={3}
              placeholder="Tell me about your project..."
              data-testid="booking-details" className="bg-white/5 border-white/10 text-white placeholder:text-neutral-600 focus:border-white/40 rounded-none resize-none" />
          </div>

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} data-testid="booking-cancel-btn"
              className="flex-1 border border-white/10 text-neutral-400 font-bold uppercase tracking-wider py-3 text-sm hover:bg-white/5 transition-colors">
              Cancel
            </button>
            <button type="submit" disabled={isSubmitting} data-testid="booking-submit-btn"
              className="flex-1 bg-white text-black font-bold uppercase tracking-wider py-3 text-sm hover:bg-white/80 transition-colors disabled:opacity-50 rounded-full">
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
