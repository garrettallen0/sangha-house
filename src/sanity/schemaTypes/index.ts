import { type SchemaTypeDefinition } from 'sanity'
import event from './event'
import page from './page'
import homepageImage from './homepageImage'
import images from './images'

export const schemaTypes = [event, page, homepageImage, images]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}
