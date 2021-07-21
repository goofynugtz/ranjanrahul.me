import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel='preload'
            href='fonts/SFPro/sfpro-text-regular.ttf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='fonts/SFPro/sfpro-display-regular.ttf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='fonts/Overpass/overpass-regular.ttf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='fonts/SFPro/sfmono-regular.ttf'
            as='font'
            crossOrigin=''
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
