import type { DefaultSeoProps } from "next-seo";

const SEO: DefaultSeoProps = {
	defaultTitle: 'Patricia Viñas Ugarte 🕉',
  titleTemplate: '%s | Patricia Viñas Ugarte 🕉',
	description: "Lic. Patricia Viñas Ugarte - Psicoterapia, Astrología, Coaching. Cursos y Talleres de Co-Creación, Astrología Humanistica y Autoconocimiento Evolutivo.",
	additionalLinkTags: [{
    rel: 'icon',
    href: '/favicon-32x32.png',
		type: "image/png",
		sizes: "32x32"
  }, {
    rel: 'icon',
    href: '/favicon-16x16.png',
		type: "image/png",
		sizes: "16x16"
  }, {
    rel: 'apple-touch-icon',
    href: '/apple-touch-icon.png',
		sizes: '180x180'
	}, {
		rel: 'manifest',
		href: '/site.webmanifest'
	}]
};

export default SEO
