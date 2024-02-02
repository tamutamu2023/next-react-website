import { getPostByslug, getallslugs } from "next/dist/server/get-page-files"

export async function getStaticPaths() {
    const allslugs = await getallslugs()

    return {
        paths: allslugs.map(({slug})=>'/blog/${slug}'),
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const slug = context.params.slug

    const post = await getPostByslug(slug)

    const description = extractText(post.content)

    const eyecatch = post.eyecatch ?? eyecatchlocal

    const { base64 } = await getPlaiceholder(eyecatch.url)

    const allSlugs = await getallslugs()
    const [prevPost,nextPost] = prevNextpost(allSlig,slug)

    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: eyecatch,
            categories: post.categories,
            description: description,
            prevPost: prevPost,
            nextpost: nextpost,
        },
    }
}