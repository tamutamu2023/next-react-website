import Container from 'components/container'
import Meta from 'components/meta'
import Hero from 'components/hero'

export default function Home() {
  return ( 
    <Container>
      <meta />
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
      <meta property="og:title" content="CUBE" />
      <meta name="description" content="アウトプットしていくサイト" />
      <meta property="og:description" content="アウトプットしていくサイト" />.
    </Container>
  
    )
}
function EachPost() {
  return (
    <article>
      <a href="post.html">
        <h3>記事のタイトル</h3>
      </a>
    </article>
  )
}

function Posts() {
  return (
    <section>
      <h2>おすすめの記事</h2>
      <EachPost title="スケジュール管理と猫の理論" url="/blog/schedule" />
      <EachPost title="音楽が呼び起こす美しいものの記憶" url="/blog/music" />
    </section>
  )
}

function Decoration(props) {
  return (
    <div style={{ color: 'red'}}>
      {props.children}
    </div>
  )
}