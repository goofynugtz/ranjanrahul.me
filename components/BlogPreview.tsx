import Link from 'next/link';
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
