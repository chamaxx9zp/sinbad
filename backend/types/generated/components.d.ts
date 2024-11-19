import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedVideoEmbed extends Schema.Component {
  collectionName: 'components_sections_video_embeds';
  info: {
    displayName: 'Video Embed';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text & Attribute.Required;
    author: Attribute.String;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
    description: '';
  };
  attributes: {
    file: Attribute.Media<'images'>;
  };
}

export interface SectionsTestimonialsGroup extends Schema.Component {
  collectionName: 'components_slices_testimonials_groups';
  info: {
    name: 'TestimonialsGroup';
    displayName: 'Testimonials group';
    icon: 'user-friends';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    testimonials: Attribute.Component<'elements.testimonial', true>;
  };
}

export interface SectionsTeaBenifit extends Schema.Component {
  collectionName: 'components_sections_tea_benifits';
  info: {
    displayName: 'TeaBenifit';
  };
  attributes: {
    TeaBenifit: Attribute.String;
  };
}

export interface SectionsRichText extends Schema.Component {
  collectionName: 'components_sections_rich_texts';
  info: {
    name: 'RichText';
    displayName: 'Rich text';
    icon: 'text-height';
  };
  attributes: {
    content: Attribute.RichText;
  };
}

export interface SectionsProductGallery extends Schema.Component {
  collectionName: 'components_sections_product_galleries';
  info: {
    displayName: 'ProductGallery';
    description: '';
  };
  attributes: {
    ProductGallery: Attribute.String;
    picture: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ProductGalleryRow: Attribute.Component<
      'elements.product-gallery-row',
      true
    >;
  };
}

export interface SectionsPricing extends Schema.Component {
  collectionName: 'components_sections_pricings';
  info: {
    name: 'Pricing';
    displayName: 'Pricing';
    icon: 'dollar-sign';
  };
  attributes: {
    title: Attribute.String;
    plans: Attribute.Component<'elements.plan', true>;
  };
}

export interface SectionsOurProducts extends Schema.Component {
  collectionName: 'components_sections_our_products';
  info: {
    displayName: 'OurProducts';
    description: '';
  };
  attributes: {
    SubTitle: Attribute.String;
    MainTitle: Attribute.String;
    Product: Attribute.Component<'elements.product', true>;
  };
}

export interface SectionsLeadForm extends Schema.Component {
  collectionName: 'components_sections_lead_forms';
  info: {
    name: 'Lead form';
    displayName: 'Lead form';
    icon: 'at';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    emailPlaceholder: Attribute.String;
    submitButton: Attribute.Component<'links.button'>;
    location: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SectionsLargeVideo extends Schema.Component {
  collectionName: 'components_slices_large_videos';
  info: {
    name: 'LargeVideo';
    displayName: 'Large video';
    icon: 'play-circle';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    video: Attribute.Media<'videos'> & Attribute.Required;
    poster: Attribute.Media<'images'>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_slices_heroes';
  info: {
    name: 'Hero';
    displayName: 'Hero';
    icon: 'heading';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    picture: Attribute.Media<'images'> & Attribute.Required;
    buttons: Attribute.Component<'links.button-link', true>;
  };
}

export interface SectionsHeading extends Schema.Component {
  collectionName: 'components_sections_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    description: Attribute.String;
  };
}

export interface SectionsFeatures extends Schema.Component {
  collectionName: 'components_layout_features';
  info: {
    displayName: 'Features';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    feature: Attribute.Component<'elements.feature', true>;
  };
}

export interface SectionsFeaturedSection extends Schema.Component {
  collectionName: 'components_sections_featured_sections';
  info: {
    displayName: 'FeaturedSection';
  };
  attributes: {
    FeaturedSection: Attribute.String;
  };
}

export interface SectionsFeatureRowsGroup extends Schema.Component {
  collectionName: 'components_slices_feature_rows_groups';
  info: {
    name: 'FeatureRowsGroup';
    displayName: 'Feaures row group';
    icon: 'bars';
  };
  attributes: {
    features: Attribute.Component<'elements.feature-row', true>;
  };
}

export interface SectionsFeatureColumnsGroup extends Schema.Component {
  collectionName: 'components_slices_feature_columns_groups';
  info: {
    name: 'FeatureColumnsGroup';
    displayName: 'Feature columns group';
    icon: 'star-of-life';
  };
  attributes: {
    features: Attribute.Component<'elements.feature-column', true>;
  };
}

export interface SectionsBottomActions extends Schema.Component {
  collectionName: 'components_slices_bottom_actions';
  info: {
    name: 'BottomActions';
    displayName: 'Bottom actions';
    icon: 'angle-double-right';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    buttons: Attribute.Component<'links.button-link', true>;
    description: Attribute.Text;
  };
}

export interface SectionsBestSeller extends Schema.Component {
  collectionName: 'components_sections_best_sellers';
  info: {
    displayName: 'BestSeller';
    description: '';
  };
  attributes: {
    BestSeller: Attribute.String;
    Headline: Attribute.String;
    Description: Attribute.Text;
    BestSellerProduct: Attribute.Component<
      'elements.best-seller-product',
      true
    >;
  };
}

export interface SectionsAboutUs extends Schema.Component {
  collectionName: 'components_sections_about_uses';
  info: {
    displayName: 'AboutUs';
    description: '';
  };
  attributes: {
    SubTitle: Attribute.String;
    MainTitle: Attribute.String;
    Description1: Attribute.Text;
    Description2: Attribute.Text;
    AboutRow: Attribute.Component<'elements.about-row', true>;
    AboutBtn: Attribute.Component<'links.button-link'>;
    picture: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MetaMetadata extends Schema.Component {
  collectionName: 'components_meta_metadata';
  info: {
    name: 'Metadata';
    displayName: 'Metadata';
    icon: 'robot';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
  };
}

export interface LinksSocialLink extends Schema.Component {
  collectionName: 'components_links_social_links';
  info: {
    displayName: 'Social Link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
    social: Attribute.Enumeration<['YOUTUBE', 'TWITTER', 'DISCORD', 'WEBSITE']>;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    name: 'Link';
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
  };
}

export interface LinksButton extends Schema.Component {
  collectionName: 'components_links_simple_buttons';
  info: {
    name: 'Button';
    displayName: 'Button';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksButtonLink extends Schema.Component {
  collectionName: 'components_links_buttons';
  info: {
    name: 'Button-link';
    displayName: 'Button link';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    name: 'Navbar';
    displayName: 'Navbar';
    icon: 'map-signs';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'links.link', true>;
    button: Attribute.Component<'links.button-link'>;
    navbarLogo: Attribute.Component<'layout.logo'>;
  };
}

export interface LayoutLogo extends Schema.Component {
  collectionName: 'components_layout_logos';
  info: {
    displayName: 'Logo';
    description: '';
  };
  attributes: {
    logoImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    logoText: Attribute.String;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    footerLogo: Attribute.Component<'layout.logo'>;
    menuLinks: Attribute.Component<'links.link', true>;
    legalLinks: Attribute.Component<'links.link', true>;
    socialLinks: Attribute.Component<'links.social-link', true>;
    categories: Attribute.Relation<
      'layout.footer',
      'oneToMany',
      'api::category.category'
    >;
  };
}

export interface ElementsTestimonial extends Schema.Component {
  collectionName: 'components_slices_testimonials';
  info: {
    name: 'Testimonial';
    displayName: 'Testimonial';
    icon: 'user-check';
    description: '';
  };
  attributes: {
    picture: Attribute.Media<'images'> & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    authorName: Attribute.String & Attribute.Required;
  };
}

export interface ElementsProduct extends Schema.Component {
  collectionName: 'components_elements_products';
  info: {
    displayName: 'Product';
  };
  attributes: {
    ProductName: Attribute.String;
    picture: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    AboutBtn: Attribute.Component<'links.button-link'>;
  };
}

export interface ElementsProductGalleryRow extends Schema.Component {
  collectionName: 'components_elements_product_gallery_rows';
  info: {
    displayName: 'ProductGalleryRow';
  };
  attributes: {
    ProductTitle: Attribute.String;
    ProductDesc: Attribute.Text;
    ProductImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ElementsPlan extends Schema.Component {
  collectionName: 'components_elements_plans';
  info: {
    name: 'plan';
    displayName: 'Pricing plan';
    icon: 'search-dollar';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    isRecommended: Attribute.Boolean;
    price: Attribute.Decimal;
    pricePeriod: Attribute.String;
    product_features: Attribute.Relation<
      'elements.plan',
      'oneToMany',
      'api::product-feature.product-feature'
    >;
  };
}

export interface ElementsOurProduct extends Schema.Component {
  collectionName: 'components_elements_our_products';
  info: {
    displayName: 'OurProduct';
    description: '';
  };
  attributes: {
    ProductName: Attribute.String;
    ProductBtn: Attribute.Component<'links.button-link'>;
    picture: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ElementsNotificationBanner extends Schema.Component {
  collectionName: 'components_elements_notification_banners';
  info: {
    name: 'NotificationBanner';
    displayName: 'Notification banner';
    icon: 'exclamation';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['alert', 'info', 'warning']> &
      Attribute.Required;
    heading: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    show: Attribute.Boolean & Attribute.DefaultTo<false>;
    link: Attribute.Component<'links.link'>;
  };
}

export interface ElementsLogos extends Schema.Component {
  collectionName: 'components_elements_logos';
  info: {
    name: 'logos';
    displayName: 'Logos';
    icon: 'apple-alt';
  };
  attributes: {
    title: Attribute.String;
    logo: Attribute.Media<'images'>;
  };
}

export interface ElementsFooterSection extends Schema.Component {
  collectionName: 'components_links_footer_sections';
  info: {
    name: 'FooterSection';
    displayName: 'Footer section';
    icon: 'chevron-circle-down';
  };
  attributes: {
    title: Attribute.String;
    links: Attribute.Component<'links.link', true>;
  };
}

export interface ElementsFeature extends Schema.Component {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    showLink: Attribute.Boolean & Attribute.DefaultTo<false>;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    url: Attribute.String;
    text: Attribute.String;
  };
}

export interface ElementsFeatureRow extends Schema.Component {
  collectionName: 'components_slices_feature_rows';
  info: {
    name: 'FeatureRow';
    displayName: 'Feature row';
    icon: 'arrows-alt-h';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    media: Attribute.Media<'images' | 'videos'> & Attribute.Required;
    link: Attribute.Component<'links.link'>;
  };
}

export interface ElementsFeatureColumn extends Schema.Component {
  collectionName: 'components_slices_feature_columns';
  info: {
    name: 'FeatureColumn';
    displayName: 'Feature column';
    icon: 'align-center';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    icon: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ElementsBestSellerProduct extends Schema.Component {
  collectionName: 'components_elements_best_seller_products';
  info: {
    displayName: 'BestSellerProduct';
  };
  attributes: {
    picture: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    BestSellerProductName: Attribute.String;
    BestSellerProductNameTag: Attribute.String;
    BestSellerLink: Attribute.Component<'links.button-link'>;
  };
}

export interface ElementsAboutRow extends Schema.Component {
  collectionName: 'components_elements_about_rows';
  info: {
    displayName: 'AboutRow';
  };
  attributes: {
    AboutRowTitle: Attribute.String;
    AboutRowDescription: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.video-embed': SharedVideoEmbed;
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'sections.testimonials-group': SectionsTestimonialsGroup;
      'sections.tea-benifit': SectionsTeaBenifit;
      'sections.rich-text': SectionsRichText;
      'sections.product-gallery': SectionsProductGallery;
      'sections.pricing': SectionsPricing;
      'sections.our-products': SectionsOurProducts;
      'sections.lead-form': SectionsLeadForm;
      'sections.large-video': SectionsLargeVideo;
      'sections.hero': SectionsHero;
      'sections.heading': SectionsHeading;
      'sections.features': SectionsFeatures;
      'sections.featured-section': SectionsFeaturedSection;
      'sections.feature-rows-group': SectionsFeatureRowsGroup;
      'sections.feature-columns-group': SectionsFeatureColumnsGroup;
      'sections.bottom-actions': SectionsBottomActions;
      'sections.best-seller': SectionsBestSeller;
      'sections.about-us': SectionsAboutUs;
      'meta.metadata': MetaMetadata;
      'links.social-link': LinksSocialLink;
      'links.link': LinksLink;
      'links.button': LinksButton;
      'links.button-link': LinksButtonLink;
      'layout.navbar': LayoutNavbar;
      'layout.logo': LayoutLogo;
      'layout.footer': LayoutFooter;
      'elements.testimonial': ElementsTestimonial;
      'elements.product': ElementsProduct;
      'elements.product-gallery-row': ElementsProductGalleryRow;
      'elements.plan': ElementsPlan;
      'elements.our-product': ElementsOurProduct;
      'elements.notification-banner': ElementsNotificationBanner;
      'elements.logos': ElementsLogos;
      'elements.footer-section': ElementsFooterSection;
      'elements.feature': ElementsFeature;
      'elements.feature-row': ElementsFeatureRow;
      'elements.feature-column': ElementsFeatureColumn;
      'elements.best-seller-product': ElementsBestSellerProduct;
      'elements.about-row': ElementsAboutRow;
    }
  }
}
