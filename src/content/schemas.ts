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
      "cta": z.object({
        "body": z.string(),
        "button": z.string(),
        "title": z.string()
      }),
      "hero": z.object({
        "body": z.string(),
        "eyebrow": z.string(),
        "messageLabel": z.string(),
        "messagePlaceholder": z.string(),
        "recipientLabel": z.string(),
        "recipientPlaceholder": z.string(),
        "sendLabel": z.string(),
        "templates": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        })),
        "title": z.string()
      }),
      "templateSection": z.object({
        "eyebrow": z.string(),
        "title": z.string(),
        "subtitle": z.string(),
        "categories": z.array(z.object({
          "id": z.string(),
          "label": z.string(),
          "emoji": z.string(),
          "templates": z.array(z.object({
            "id": z.string(),
            "text": z.string()
          }))
        }))
      }),
      "notes": z.object({
        "eyebrow": z.string(),
        "items": z.array(z.object({
          "color": z.string(),
          "id": z.string(),
          "label": z.string(),
          "message": z.string()
        })),
        "title": z.string()
      }),
      "seo": z.object({
        "description": z.string(),
        "title": z.string()
      }),
      "steps": z.object({
        "items": z.array(z.object({
          "body": z.string(),
          "id": z.string(),
          "number": z.string(),
          "title": z.string()
        })),
        "title": z.string()
      })
    }),
    auth: z.object({
      "login": z.object({
        "title": z.string(),
        "subtitle": z.string(),
        "submitButton": z.string(),
        "switchPrompt": z.string(),
        "switchLink": z.string()
      }),
      "signup": z.object({
        "title": z.string(),
        "subtitle": z.string(),
        "submitButton": z.string(),
        "switchPrompt": z.string(),
        "switchLink": z.string()
      }),
      "tagline": z.string()
    })
  }
};
export type Schemas = typeof schemas;