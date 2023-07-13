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
