// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { createClient } from 'next-sanity';
import { client } from './client'

// Create a client with live preview enabled
export const liveClient = createClient({
  ...client.config(),
  apiVersion: 'vX', // Use the latest API version
  stega: {
    enabled: true,
    studioUrl: '/studio'
  }
});

// Export the client for use in components
export { liveClient as sanityFetch };
