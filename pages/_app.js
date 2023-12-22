import 'styles/globals.css'
import Layout from 'components/layout'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { Config } from '@fortawesome/fontawesome-svg-core'
config.autoaddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <layout>
      <Component {...pageProps} />
    </layout>
  )
}

export default MyApp