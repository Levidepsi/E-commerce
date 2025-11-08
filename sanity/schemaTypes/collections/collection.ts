import { defineType, defineField, defineArrayMember } from 'sanity'
import { PackageIcon, BasketIcon} from '@sanity/icons'
import { ProductReferenceCount } from '../ProductCount'

export const collectionType = defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  icon: BasketIcon,
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({
      name: 'productCount',
      title: 'Product Count',
      type: 'string',
      components: { input: ProductReferenceCount },
      readOnly: true,
    }),
  ],
})
