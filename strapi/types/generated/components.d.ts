import type { Schema, Struct } from '@strapi/strapi';

export interface ServiceFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_service_feature_items';
  info: {
    description: 'Individual feature for a service';
    displayName: 'Feature Item';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'service.feature-item': ServiceFeatureItem;
    }
  }
}
