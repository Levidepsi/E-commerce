import { ALL_FIELDS_GROUP, defineField, defineType } from "sanity";
import { DotIcon } from "@sanity/icons";

export default defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  icon: DotIcon,
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "logo",
      title: "Logo",
    },
    {
      name: "links",
      title: "Links",
    },
    {
      ...ALL_FIELDS_GROUP,
      hidden: true
    }
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      initialValue: "settings",

    }),

    defineField({
      name: "header_logo",
      title: "Header Logo",
      type: "image",
      group: "logo"

    }),
    defineField({
      name: "header_logo2",
      title: "Header Logo 2",
      type: "image",
      group: "logo"

    }),

    defineField({
      name: "footer_logo",
      title: "Footer Logo",
      type: "image",
      group: "logo"

    }),

  ],
});
