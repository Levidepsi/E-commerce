import { defineType, defineField, defineArrayMember } from 'sanity'
import { PackageIcon, BasketIcon} from '@sanity/icons'

export const collectionType = defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  icon: BasketIcon,
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    
  ],
})
