import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
    <Html lang="es">
      <Head>
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-L9WLRNH9TC"></Script>
          <Script id="google-analytics" strategy="afterInteractive">
              {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments);}
                  gtag('js', new Date());
        
                  gtag('config', 'G-L9WLRNH9TC');
              `}
          </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
