import Footer from './Footer/Footer';
import Header from './Header/Header';
import Skills from './Skills/Skills';
import BlogPreview from './BlogPreview/BlogPreview';



export default function Home ({ pageProps }: AppProps) {
    return(
        <>
        <Header />
        <Skills />
        <BlogPreview {...pageProps}/>
        </>
    )
}
