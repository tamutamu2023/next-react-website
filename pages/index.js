function Home(){
  return (
    <>
    <header>HEADER</header>
    <main>
    <div>
      
   <h1>CUBE</h1> <p>アウトプットしていくサイト</p>
   </div>
   </main>
   </>
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
  return(
    <section>
      <h2>おすすめ記事</h2>
      <EachPost/>
      <EachPost/>
    </section>
  )
}