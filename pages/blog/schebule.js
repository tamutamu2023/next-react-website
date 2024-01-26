import { getPostBySlug } from 'lib/api'
import { extractText } from '/lib/extract-text'
import Meta from 'components/meta'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import PostBody from 'components/post-body'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from '/components/two-column'
import ConvertBody from 'components/convert-body'
import PostCategories from 'components/post-categories'
import Image from 'next/image'

export async function getStaticProps() {
    const slug = 'micro'
    
    const post = await getPostBySlug(slug)

    const description = extractText(post.content)
}

escription: description,
  (
    <PostBody>
      <ConvertBody contentHTML={content} />
    </PostBody>
  );

    
export default function Schebule({
    title,
        publish,
        content,
        eyecatch,
    categories,
    description,
}) {
    return (
        <container>
            <Meta
                pagetaitle={title}
                pageDesc={description}
                pageImg={eyecatch.url}
                pageImgW={eyecatch.width}
                pageImgH={eyecatch.height}
            />
            
            



            <article>
                <PostHeader title={title} subtitle="Blog Article" publish={publish} />

                <figure>
                    <image
                        src={eyecatch.url}
                        alt=""
                        layout="responsive"
                        width={eyecatch.width}
                        height={eyecatch.height}
                        sizes="(min-width: 1152px) 1152px, 100vw"
                        priority
                    />
                </figure>
                <TwoColumn>
                    <TwoColumnMain>
                        <PostBody>{content}</PostBody>
                    </TwoColumnMain>
                    <TwoColumnSidebar>
                        <PostCategories categories={categories} />
                </TwoColumnSidebar>
                </TwoColumn>
            
        </article>
        </container>
    )
}