import { Helmet } from 'react-helmet-async'

type SEOProps = {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogTwitterImage?: string
  ogSquareImage?: string
}

export function SEO({
  title = 'Steven Pereira - Music Producer & Sound Engineer from Goa',
  description = 'Music producer and sound engineer from Goa crafting emotion-first music. Arrangement, production, mixing, and mastering with clarity, depth, and intention.',
  keywords,
  canonical = 'https://stevenaudio.in/',
  ogTitle = 'Steven Pereira | Emotion-First Music Production & Sound Engineering',
  ogDescription = 'Emotion-driven music production, mixing, and mastering by Steven Pereira. Clean, intentional sound shaped to tell your story.',
  ogImage = 'https://stevenaudio.in/image.jpg',
  ogTwitterImage = 'https://stevenaudio.in/twitter.jpg',
  ogSquareImage = 'https://stevenaudio.in/square.jpg',
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>

      {description && <meta name="description" content={description} />}

      {keywords && <meta name="keywords" content={keywords} />}

      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      {<meta property="og:title" content={ogTitle || title} />}

      {<meta property="og:description" content={ogDescription || description} />}

      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogTwitterImage} />

      <meta name="twitter:image:alt" content="Steven Pereira — Music Producer & Sound Engineer" />

      <meta property="og:image" content={ogSquareImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="1200" />
      <meta property="og:image:type" content="image/jpeg" />
    </Helmet>
  )
}
