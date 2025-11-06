import { defineType, defineField, defineArrayMember } from 'sanity'
import { PackageIcon } from '@sanity/icons'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: PackageIcon,
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'description', type: 'blockContent', title: 'Description' }),
    defineField({ name: 'price', type: 'number', title: 'Price' }),
    defineField({ name: 'compareAtPrice', type: 'number', title: 'Compare at Price' }),
    defineField({ name: 'sku', type: 'string', title: 'SKU' }),
    defineField({ name: 'barcode', type: 'string', title: 'Barcode' }),
    defineField({ name: 'inventory', type: 'number', title: 'Stock Quantity' }),
        defineField({ name: 'tags', type: 'array', of: [{ type: 'string' }], title: 'Tags', options: {layout: 'tags'} }),

    defineField({
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Variant Name' },
            { name: 'price', type: 'number', title: 'Price' },
            { name: 'sku', type: 'string', title: 'SKU' },
            { name: 'image', type: 'image', title: 'Variant Image' },
          ],
        }),
      ],
    }),

    defineField({
      name: 'collections',
      title: 'Collections',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'collection' }] }],
    }), 

    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'images',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    }),

    defineField({ name: 'vendor', type: 'string', title: 'Vendor' }),

    // SEO fields
    defineField({ name: 'seoTitle', type: 'string', title: 'SEO Title' }),
    defineField({ name: 'seoDescription', type: 'text', title: 'SEO Description' }),
  ],
})
