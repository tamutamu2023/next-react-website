import 'styles/globals.css'
import Layout from 'components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <layout>
      <Component {...pageProps} />
    </layout>
  )
}

export default MyApp