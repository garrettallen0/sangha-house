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

export async function getHomepageImages() {
  const query = `*[_type == "homepageImage"] | order(order asc) {
    _id,
    title,
    image,
    alt,
    order
  }`
  
  const images = await client.fetch(query)
  
  // Transform images to include imageUrl
  return images.map((img: any) => ({
    ...img,
    imageUrl: img.image ? builder.image(img.image).url() : null
  }))
}

export async function getImages(category?: string) {
  let query = `*[_type == "images"]`
  
  if (category) {
    query += `[category == $category]`
  }
  
  query += ` | order(order asc) {
    _id,
    title,
    image,
    alt,
    description,
    category,
    order
  }`
  
  const images = await client.fetch(query, category ? { category } : {})
  
  // Transform images to include imageUrl
  return images.map((img: any) => ({
    ...img,
    imageUrl: img.image ? builder.image(img.image).url() : null
  }))
} 