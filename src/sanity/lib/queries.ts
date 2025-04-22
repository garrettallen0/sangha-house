import { client } from './client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export async function getHomepageImage() {
  const query = `*[_type == "homepageImage"][0] {
    title,
    image,
    alt
  }`
  
  const data = await client.fetch(query)
  if (data?.image) {
    data.imageUrl = builder.image(data.image).url()
  }
  return data
} 