import { ALL_FIELDS_GROUP, defineField, defineType } from "sanity";
import { ListIcon } from "@sanity/icons";

export default defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  icon: ListIcon,

  groups: [
    { name: "content", title: "Content" },
    { name: "logo", title: "Logo" },
    { name: "links", title: "Links" },
    { name: "settings", title: "Settings" },
    { ...ALL_FIELDS_GROUP, hidden: true },
  ],

  fieldsets: [
    {
      name: "padding",
      title: "Padding Settings",
      options: { collapsible: true, collapsed: false },
    },

    {
      name: "menuStyling",
      title: "Menu Styling Settings",
      options: { collapsible: true, collapsed: false },
    },
    
  ],

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      initialValue: "Navigation",
      description: "Helps you identify this navigation configuration.",
    }),

    defineField({
      name: "header_logo",
      title: "Header Logo",
      type: "image",
      group: "logo",
      description: "Logo shown in the website header.",
    }),

    defineField({
      name: "footer_logo",
      title: "Footer Logo",
      type: "image",
      group: "logo",
      description: "Logo shown in the website footer.",
    }),

    defineField({
      name: "header_menu",
      title: "Header Menu",
      type: "array",
      group: "links",
      description: "Main navigation links for the header.",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "page",
              title: "Internal Page",
              type: "reference",
              to: [{ type: "page" }, { type: "home" }],
            }),
            defineField({
              name: "link",
              title: "External Link",
              type: "url",
              description: "Optional — use this instead of page for external URLs.",
            }),
          ],
          preview: { select: { title: "title", subtitle: "link" } },
        },
      ],
    }),

    defineField({
      name: "footer_menu",
      title: "Footer Menu",
      type: "array",
      group: "links",
      description: "Links displayed in the website footer.",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "link",
              title: "Link",
              type: "url",
              description: "External link for this footer item.",
            }),
          ],
          preview: { select: { title: "title", subtitle: "link" } },
        },
      ],
    }),

    defineField({
      title: "Menu Type",
      name: "menu_type",
      type: "string",
      fieldset: "menuStyling",
      group: "settings",
      description: "Select what type of navigation your site uses.",
      options: {
        list: [
          { title: "Mega Menu", value: "mega_menu" },
          { title: "Dropdown", value: "dropdown" },
        ],
        layout: "radio",
      },
      initialValue: "dropdown",
    }),

    defineField({
      title: "Header Position",
      name: "header_position",
      type: "string",
      fieldset: "menuStyling",
      group: "settings",
      description: "Select what type of navigation your site uses.",
      options: {
        list: [
          { title: "Fixed", value: "fixed" },
          { title: "Absolute", value: "absolute" },
        ],
        layout: "radio",
      },
      initialValue: "absolute",
    }),

    // ✅ Padding Fields (now visible again)
    defineField({
      title: "Padding Top",
      name: "padding_top",
      type: "number",
      group: "settings",
      fieldset: "padding",
      description: "Top spacing (in px). Example: 40",
    }),
    defineField({
      title: "Padding Bottom",
      name: "padding_bottom",
      type: "number",
      group: "settings",
      fieldset: "padding",
      description: "Bottom spacing (in px). Example: 40",
    }),
    defineField({
      title: "Padding Right",
      name: "padding_right",
      type: "number",
      group: "settings",
      fieldset: "padding",
      description: "Right spacing (in px). Example: 20",
    }),
    defineField({
      title: "Padding Left",
      name: "padding_left",
      type: "number",
      group: "settings",
      fieldset: "padding",
      description: "Left spacing (in px). Example: 20",
    }),
  ],

  preview: {
    select: { title: "title" },
  },
});
