import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: '**/blog/*.md'
    }),
    services: defineCollection({
      type: 'page',
      source: '**/services/*.md'
    })
  }
})