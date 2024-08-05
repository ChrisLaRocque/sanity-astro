import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
  ],
});
