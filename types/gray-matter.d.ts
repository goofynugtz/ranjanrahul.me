declare module 'gray-matter' {
  interface GrayMatterFile<I extends GrayMatterOption['parser']> {
    data: { [key: string]: any };
    content: string;
    excerpt?: string;
    orig: Buffer | string;
    language: string;
    matter: string;
    stringify(lang: string): string;
  }

  interface GrayMatterOption {
    parser?: any;
    eval?: boolean;
    excerpt?: boolean | ((file: GrayMatterFile<any>, options: GrayMatterOption) => string);
    excerpt_separator?: string;
    engines?: { [index: string]: any };
    language?: string;
    delimiters?: string | [string, string];
  }

  function matter(input: string | Buffer, options?: GrayMatterOption): GrayMatterFile<GrayMatterOption['parser']>;
  export = matter;
}