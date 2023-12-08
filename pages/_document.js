import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="sitelang">
      <head>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
        rel="stylesheet"
/>
      </head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
