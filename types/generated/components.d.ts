import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'Cta';
  };
  attributes: {
    description: Schema.Attribute.Text;
    form: Schema.Attribute.Component<'elements.form', false>;
    head: Schema.Attribute.String;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.Component<'elements.button-link', false>;
    text: Schema.Attribute.Text;
  };
}

export interface BlocksPricing extends Struct.ComponentSchema {
  collectionName: 'components_blocks_pricings';
  info: {
    displayName: ' pricing';
  };
  attributes: {
    description: Schema.Attribute.String;
    name: Schema.Attribute.String;
    plan: Schema.Attribute.Component<'elements.pricing-card', true>;
  };
}

export interface BlocksRow extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'Row';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface ElementsButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'button link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface ElementsForm extends Struct.ComponentSchema {
  collectionName: 'components_elements_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.button-link', false>;
    description: Schema.Attribute.Text;
    head: Schema.Attribute.String;
    input: Schema.Attribute.Component<'elements.input', true>;
  };
}

export interface ElementsInput extends Struct.ComponentSchema {
  collectionName: 'components_elements_inputs';
  info: {
    displayName: 'Input';
  };
  attributes: {
    inputType: Schema.Attribute.String;
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface ElementsPricingCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_pricing_cards';
  info: {
    displayName: 'pricing card';
  };
  attributes: {
    isFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.Component<'elements.button-link', false>;
    planprice: Schema.Attribute.String;
    plantype: Schema.Attribute.String;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
  };
}

export interface SeoMetaData extends Struct.ComponentSchema {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta data';
  };
  attributes: {
    metadescription: Schema.Attribute.Text;
    metaimage: Schema.Attribute.Media<'images' | 'files', true>;
    metatitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.cta': BlocksCta;
      'blocks.hero': BlocksHero;
      'blocks.pricing': BlocksPricing;
      'blocks.row': BlocksRow;
      'elements.button-link': ElementsButtonLink;
      'elements.card': ElementsCard;
      'elements.form': ElementsForm;
      'elements.input': ElementsInput;
      'elements.pricing-card': ElementsPricingCard;
      'seo.meta-data': SeoMetaData;
    }
  }
}
