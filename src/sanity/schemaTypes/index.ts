import { type SchemaTypeDefinition } from 'sanity'
import event from './event'
import page from './page'
import homepageImage from './homepageImage'
import images from './images'
import bannerImage from './bannerImage'

export const schemaTypes = [event, page, homepageImage, images, bannerImage]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}
