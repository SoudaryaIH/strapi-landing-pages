/**
 * `landing-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  metadata: {
    populate: {
      metaimage: {
        populate: true,
        fields: ["name","alternativeText","url"]
      },
  },
},
  blocks: {
    populate: {
      link: {
        populate: true,
      },
      image: {
        fields: ["name","alternativeText","url"],
      },
      card: {
        populate: {
          image: {
            fields: ["name","alternativeText","url"],
          },
        },
      },
      plan:{
        populate: ["services", "link"],
      },
      form: {
        populate: ["input", "button"],
      },
    },
  },
};


export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In landing-page-populate middleware.');
    ctx.query = {
        populate,
      ...ctx.query,
    }

    await next();
  };
};
