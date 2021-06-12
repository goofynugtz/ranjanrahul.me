import { sanityClient, urlFor, PortableText } from "../../lib/sanity";

const postQuery = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    author,
    body
}`;

//@ts-ignore
export default function OneBlog({ data }) {
    const { post } = data;
    console.log(post);

    return <div>lol</div>
}

export async function getStaticPaths() {
    const paths = await sanityClient.fetch(
        `*[_type == "post" && defined(slug.current)]{
            "params": {
                "slug": slug.current
            }
        }`
    )
    return { paths , fallback: true}
}

//@ts-ignore
export async function getStaticProps({ params }) {
    const { slug } = params;
    const post = await sanityClient.fetch(postQuery, {slug})

    return { props: { data: { post } } };
}