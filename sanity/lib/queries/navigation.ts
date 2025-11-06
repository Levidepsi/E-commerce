import { defineQuery } from "next-sanity";

export const Header_Query = defineQuery(`
  *[_type == "navigation"][0]{
    title,
    "header_logo": header_logo.asset->url,
    "footer_logo": footer_logo.asset->url,
    header_menu[]{
      title,
      page{
        slug->{
          "slug": slug.current
          }
        },
      link,
    },
    header_position,
    menu_type,
    padding_top,
    padding_bottom,
    padding_right,
    padding_left
  }
`);
