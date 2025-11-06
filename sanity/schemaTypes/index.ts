import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { productType } from './collections/product'
import { collectionType } from './collections/collection'
import settings from './singletons/settings'
import { homeType } from './singletons/home'
import navigation from './singletons/navigation'
import { pageType } from './multiples/page'

export const schema: { types: SchemaTypeDefinition[] } = {
  types:
    [
      blockContentType,
      postType,
      productType,
      collectionType,
      settings,
      homeType,
      navigation,
      pageType
    ],
}
