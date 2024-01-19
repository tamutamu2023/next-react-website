import Container from 'components/container'
import Meta from 'next/head'
import Hero from 'components/hero'
import Contact from 'componenets/contact'
import {TwoColumn,TwoColumnMain,TwoColumnSidebar} from'components/two-column'

export default function About() {
    return (
        <Container>
            <Meta pageTitle="アバウト" pageDesc="About development activities"
                pageimg={eyecatch.src}
                pageimgW={eyecatch.width}
                pageimgH={eyecatch.height} />
            <Meta pageTitle="アバウト" />
            <Hero title="About" subtitle="About development activities" />
            <meta property="og:title" content="アバウト|CUBE" />
            <meta name="description" content="アウトプットしていくサイト" />
            <meta property="og:descrition" content="about development activites"/>
            <figure>
                <image
                    src={eyecatch}
                    alt=""
                    layout="responsive"
                    size="(min-width: 1152px) 1152px, 100vw"
                    priority
                    placeholder='blur'
                />
            </figure>
        <TwoColumn>
          <TwoColumnMain>
        <About>
            <p>
                Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、さ
                まざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
            </p>
            <h2>モノづくりで目指しいること</h2>
            <p>
                モノづくりではデータの分析からクリエイティブまで幅広いことを担当しています。新しいことを取り入
                れながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供が数多くありますが、
                特にそこを磨く作業に力を入れています。
            </p>
            <p>
                単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしてい
                ます。毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで自分
                の中にあるモヤモヤを言葉にして「問い」への答えを出しています。
            </p>
            <h3>新しいことへのチャレンジ</h3>
            <p>
                今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなことでもいいから
                取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み出すようなモノづ
                くりは、これからも続けていきたいです。
              </p>
              
            </About>
            </TwoColumnMain>
            <TwoColumnSidebar>
            <contact />
            </TwoColumnSidebar>
            </TwoColumn>
        </Container>
    )
}
