"use strict";

/**
 * `page-populate-middleware` middleware
 */

const populate = {
  contentSections: {
    populate: {
      picture: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      buttons: {
        populate: true,
      },
      feature: {
        populate: {
          fields: ["title", "description", "showLink", "newTab", "url", "text"],
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      testimonials: {
        populate: {
          picture: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      plans: {
        populate: ["product_features"],
      },
      submitButton: {
        populate: true,
      },
      button: {
        populate: true,
      },
      AboutRow: {
        populate: true,
      },
      AboutBtn: {
        populate: true,
      },
      aboutimg: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      Product: {
        populate: {
          picture: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
          AboutBtn: {
            populate: true,
          },
        },
      },
      ProductGalleryRow: {
        populate: {
          ProductImage: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      BestSellerProduct: {
        populate: {
          picture: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
          BestSellerLink: {
            populate: true,
          },
        },
      },
      FeaturedColumn: {
        populate: {
          Icon: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      TeaBenefitPoints: {
        populate: {
          populate: true,
        },
      },
    },
  },
  seo: {
    fields: ["metaTitle", "metaDescription"],
    populate: { shareImage: true },
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      populate,
      filters: { slug: ctx.query.filters.slug },
      locale: ctx.query.locale,
    };

    console.log("page-populate-middleware.js: ctx.query = ", ctx.query);

    await next();
  };
};
