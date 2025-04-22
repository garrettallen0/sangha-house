import { type SchemaTypeDefinition } from 'sanity'
import event from './event'
import page from './page'
import homepageImage from './homepageImage'

export const schemaTypes = [event, page, homepageImage]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}
