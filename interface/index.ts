import { Key } from 'react';

export interface Posts {
  posts: [{
    slug: Key,
    frontmatter: {
      title: string,
      date: string,
      description: string,
      thumbnail: string,
      tags: Key[]
    },
    content: string
  }]
}

export interface tab {
  title: string,
  uri: string,
}

export interface project {
  title: string,
  description: string,
  github: string,
  thumbnail: {
    dark: string,
    light: string,
  },
  deployment: string,
  class?: string,
}
