import { Helmet } from 'react-helmet-async'

function PageMeta({ title, description, canonical }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  )
}

export default PageMeta
