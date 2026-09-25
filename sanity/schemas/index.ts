import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "tagline", type: "string" }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "liquorLicence", type: "string" }),
    defineField({
      name: "hours",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", type: "string" },
            { name: "sessions", type: "array", of: [{ type: "string" }] },
          ],
        },
      ],
    }),
    defineField({ name: "openingNotice", type: "text" }),
  ],
});

export const wine = defineType({
  name: "wine",
  title: "Wine",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "variety", type: "string" }),
    defineField({ name: "vintage", type: "string" }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "tastingNotes", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "region", type: "string" }),
    defineField({ name: "style", type: "string" }),
    defineField({ name: "price", type: "number" }),
    defineField({ name: "ecwidProductId", type: "string" }),
    defineField({ name: "foodPairings", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "availability",
      type: "string",
      options: { list: ["in-stock", "limited", "sold-out"] },
    }),
    defineField({
      name: "category",
      type: "string",
      options: { list: ["current", "previous"] },
    }),
    defineField({
      name: "colour",
      type: "string",
      options: { list: ["white", "rose", "red", "sparkling"] },
    }),
    defineField({ name: "image", type: "image" }),
  ],
});

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "date", type: "date" }),
    defineField({ name: "time", type: "string" }),
    defineField({ name: "description", type: "text" }),
    defineField({
      name: "category",
      type: "string",
      options: { list: ["live-music", "seasonal", "special"] },
    }),
    defineField({ name: "image", type: "image" }),
  ],
});

export const award = defineType({
  name: "award",
  title: "Award",
  type: "document",
  fields: [
    defineField({ name: "year", type: "string" }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "organisation", type: "string" }),
    defineField({ name: "category", type: "string" }),
  ],
});

export const journalPost = defineType({
  name: "journalPost",
  title: "Journal Post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "excerpt", type: "text" }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: ["Vineyard", "Winemaking", "Food", "People", "Events", "Season", "Region"],
      },
    }),
    defineField({ name: "publishedAt", type: "date" }),
    defineField({ name: "body", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "image", type: "image" }),
  ],
});

export const menuCategory = defineType({
  name: "menuCategory",
  title: "Menu Category",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({
      name: "items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string" },
            { name: "description", type: "text" },
            { name: "price", type: "string" },
          ],
        },
      ],
    }),
  ],
});

export const supplier = defineType({
  name: "supplier",
  title: "Supplier",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "location", type: "string" }),
  ],
});

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "question", type: "string" }),
    defineField({ name: "answer", type: "text" }),
  ],
});

export const schemaTypes = [
  siteSettings,
  wine,
  event,
  award,
  journalPost,
  menuCategory,
  supplier,
  faq,
];
