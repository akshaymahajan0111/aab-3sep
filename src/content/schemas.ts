import { z } from 'zod';
export const schemas = {
  site: z.object({
    "brandName": z.string(),
    "tagline": z.string(),
    "navigation": z.array(z.object({
      "label": z.string(),
      "href": z.string(),
      "id": z.string()
    })),
    "footerLinks": z.array(z.object({
      "label": z.string(),
      "href": z.string(),
      "id": z.string()
    }))
  }),
  pages: {
    home: z.object({
      "seo": z.object({
        "title": z.string(),
        "description": z.string()
      }),
      "hero": z.object({
        "eyebrow": z.string(),
        "title": z.string(),
        "body": z.string(),
        "recipientLabel": z.string(),
        "recipientPlaceholder": z.string(),
        "messageLabel": z.string(),
        "messagePlaceholder": z.string(),
        "sendLabel": z.string(),
        "templates": z.array(z.object({
          "text": z.string(),
          "id": z.string()
        }))
      }),
      "steps": z.object({
        "title": z.string(),
        "items": z.array(z.object({
          "number": z.string(),
          "title": z.string(),
          "body": z.string(),
          "id": z.string()
        }))
      }),
      "notes": z.object({
        "eyebrow": z.string(),
        "title": z.string(),
        "items": z.array(z.object({
          "label": z.string(),
          "message": z.string(),
          "color": z.string(),
          "id": z.string()
        }))
      }),
      "cta": z.object({
        "title": z.string(),
        "body": z.string(),
        "button": z.string()
      })
    })
  }
};
export type Schemas = typeof schemas;