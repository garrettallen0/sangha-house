import { type SchemaTypeDefinition } from 'sanity'
import event from './event'
import page from './page'

export const schemaTypes = [event, page]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}
