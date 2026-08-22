import { SITE_URL } from './pageMeta'

const ORGANIZATION_ID = `${SITE_URL}/#organization`

export const WEBSIDY_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': ORGANIZATION_ID,
      name: 'Websidy',
      description:
        'Websidy is a Sylvan Lake web design studio helping small and medium-sized businesses across Central Alberta build professional websites and consistent digital presence.',
      url: SITE_URL,
      logo: `${SITE_URL}/websidy-logo.png`,
      image: `${SITE_URL}/websidy-logo.png`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sylvan Lake',
        addressRegion: 'AB',
        addressCountry: 'CA',
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Sylvan Lake',
          containedInPlace: {
            '@type': 'AdministrativeArea',
            name: 'Alberta',
            containedInPlace: {
              '@type': 'Country',
              name: 'Canada',
            },
          },
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Central Alberta',
        },
      ],
      sameAs: [
        'https://www.google.com/maps/place/Websidy/@62.6573279,-95.989235,4z/data=!3m1!4b1!4m6!3m5!1s0x5375b37f55065ee1:0x5f7255b5133b5d91!8m2!3d62.6573279!4d-95.989235!16s%2Fg%2F11zf3y_ch9',
        'https://www.facebook.com/profile.php?id=61588217258258',
        'https://www.instagram.com/websidy/',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Websidy Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Website Design & Development',
              description:
                'Custom-coded, responsive websites built for speed and SEO. Packages from 3 pages with optional hosting and ongoing support.',
              provider: { '@id': ORGANIZATION_ID },
              areaServed: {
                '@type': 'AdministrativeArea',
                name: 'Central Alberta',
              },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Digital Presence & Brand Consistency',
              description:
                'Digital foundation packages, brand alignment across the web, and optional always-on social presence for Central Alberta businesses.',
              provider: { '@id': ORGANIZATION_ID },
              areaServed: {
                '@type': 'AdministrativeArea',
                name: 'Central Alberta',
              },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Hosting & Maintenance',
              description:
                'Managed hosting, performance checks, and ongoing support for static and custom website projects.',
              provider: { '@id': ORGANIZATION_ID },
              areaServed: {
                '@type': 'AdministrativeArea',
                name: 'Central Alberta',
              },
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Websidy',
      description:
        'Professional web design and digital presence services for Sylvan Lake and Central Alberta businesses.',
      publisher: { '@id': ORGANIZATION_ID },
      inLanguage: 'en-CA',
    },
  ],
}
