import Header from '../components/header'
import Hero from '../components/hero'
import footer from '../componets/footer'
import Hero from 'componets/hero'
import Layout from 'components/layout'

export default function Home(){
  return (
  <Hero 
  title='CUBE'
  subtitle="アウトプットしていくサイト"
  image0n
  />
  )
}

export default function Home() {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}

function EachPost(){
  return(
    <article>
      <a href="post.html">
        <h3>記事のタイトル</h3>
      </a>
    </article>
  )
}

export default function Posts(){
  const props1 = { title: '記事のタイトル1', url: 'post1.html'}
  const props2 = { title: '記事のタイトル2', url: 'posu2.html'}
  return(
    <section>
      <h2>おすすめ記事</h2>
      <article>
      <a href= "/blog/schedule"><h3>スケジュール管理と猫の理論</h3></a>
      </article>
      <article>
      <a href= "/blog/misic"><h3>音楽が呼び起こすおいしいものの記憶</h3></a>
    </article>
    </section>
  )
}