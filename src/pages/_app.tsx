import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import Script from "next/script";
import {useEffect} from "react";
import {useRouter} from "next/router";
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter()

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			gtag.pageview(url)
		}
		router.events.on('routeChangeComplete', handleRouteChange)
		router.events.on('hashChangeComplete', handleRouteChange)
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
			router.events.off('hashChangeComplete', handleRouteChange)
		}
	}, [router.events])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
