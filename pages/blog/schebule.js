import { getPostBySlug } from 'lib/api'
import Container from 'components/container'

export default function Schebule({
    title,
        publish,
        content,
        eyecatch,
        categories,
}) {
    return (
        <container>
            <h1>{title}</h1>
        </container>
    )
}

export async function getStaticProps() {
    const slug = 'schebule'
    const post = await getPostBySlug(slug)
    
    return {
        props: {
        title: post.title,
        publish: post.publishDate,
        content: post.content,
        eyechtch: post.eyecatch,
        categories: post.categories,
        },
    }
}