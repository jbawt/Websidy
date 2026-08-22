import { Helmet } from 'react-helmet-async'
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '../config/pageMeta'

function PageMeta({ title, description, canonical, image = DEFAULT_OG_IMAGE }) {
  const url = canonical || SITE_URL

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={`${SITE_NAME} — Web design and digital presence in Central Alberta`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} — Web design and digital presence in Central Alberta`} />
    </Helmet>
  )
}

export default PageMeta
