import { createClient, createImageUrlBuilder, createPortableTextComponent } from "next-sanity";

const config = {
    projectId: "k9m4i982",
    dataset: "production",
    apiVersion: "1",
    useCdn: true
}

export const sanityClient = createClient(config)

export const urlFor = (source: any) => {
    console.log(source);
    return createImageUrlBuilder(config).image(source);
};

export const PortableText = createPortableTextComponent({
    ...config,
    serializers: {}
})