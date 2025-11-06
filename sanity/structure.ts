import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Next Sanity E-commerce')
    .items([
      S.documentTypeListItem('settings').title('Settings'),
      S.documentTypeListItem('navigation').title('Navigation'),
      S.documentTypeListItem('home').title('Home'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() &&
          !['settings',
            'navigation',
            'home', 
            'page',
            'product',
            'collection',
          ].includes(item.getId()!),
      ),
      S.documentTypeListItem('product').title('Product'),
      S.documentTypeListItem('collection').title('Collection'),

    ])
