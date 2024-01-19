import Head from 'next/head'
import { siteMeta } from 'lib/constants'
import {useRouter} from 'next/router'
import Siteimg from 'images/ogp.jpg'
    
   
const{ siteTitle, siteDesc, siteUrl,siteLocale, siteType,siteIcon} = siteMeta   
export default function Meta({ pageTitle,pageDesc,pageImg,pageimgW,pageimgH }) {
    const title = pageTitle ? '${pageTitle}|${siteTitle}' : siteTitle
    const desc = pageDesc ?? siteDesc

    const img = pageimg || Siteimg.src
    const imgW = pageImgW || Siteimg.width
    const imgH = pageImgH || Siteimg.height
    const imgUrl = img.startwWith('https') ? img: '${siteUrl}${img}'

    const router = useRouter()
    const url = '${siteUrl}${router.asPath}'

    return (
        <Head>
            <title>{pageTitle}|{siteTitle}</title>
            <meta property="og:title" content={'${pageTitle}|${siteTitle} '} />

            <meta name="descripition" content={desc} />
            <meta property="og:description" content={desc} />

            <link rel="icon" href={siteIcon} />
            <link rel="canonical" href={url} />

            <meta property="og:site_name" content={siteTite} />
            <meta property="og:type" content={siteType} />
            <meta property="og:locale" content={siteLocale} />
            <meta property="og:image" content={imaUrl} />
            <meta property="og:image:height" content={imgH} />
            <meta name="twitter:card" content="summary_lrage_image" />

        </Head>
    )
}