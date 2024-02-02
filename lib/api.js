import { compareAsc } from 'date-fns'
import { createClient } from 'microcms-js-sdk'

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.api_KEY,
})

export async function getPostBySlug(slug) {
    try {
        const post = await client.get({
            endpoint: 'blogs',
            queries: { fileters: 'slug[equals]${slug}' },
        })
        return post.contents[0]
    } catch (err) {
        console.log('~~ getPostBySlug ~~')
        console.log(err)
    }
}

    export async function getallslugs(limit = 100) {
        try {
            const slugs = await client.get({
                endpoint: 'blogs',
                queries: { fields: 'title,slug', orders: '-publishDate', limit: limit },
            })
            return slugs.contents
        } catch (err) {
            console.log('~~ getallslugs ~~')
            console.log(err)
        }
    }
