export interface PageObject {
  slug: {
    slug: string;
  };
}

export interface HeaderSubMenuItem {
  title: string;
  page: PageObject;
  custom_links: string
}


export interface HeaderTypes {
  title: string;
  header_logo: string;
  footer_logo: string;
  menu_type: string
  header_position: string
  padding_top: number
  padding_bottom: number
  padding_right: number
  padding_left: number
  header_menu: HeaderMenuItem[];
}

export interface HeaderMenuItem {
  title: string;
  page: PageObject;
  subMenu : HeaderSubMenuItem[]
}
