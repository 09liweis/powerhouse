/**
 * SEO Configuration for Smartware
 */
import { COMPANY } from '@/constants/company'

// Site-wide SEO configuration
export const siteConfig = {
  title: COMPANY.FULL_NAME,
  description: 'Intelligent industrial solutions with smart technology integration, factory-direct pricing, and comprehensive support. Smart manufacturing and IoT solutions engineered in Shenzhen and managed from Toronto.',
  keywords: 'smart industrial solutions, industrial automation, IoT manufacturing, smartware, factory-direct pricing, North American support, Shenzhen manufacturing, Toronto office, intelligent industrial technology',
  url: COMPANY.WEBSITE,
  ogImage: '/og-image.png',
  twitterHandle: COMPANY.SOCIAL.TWITTER,
}

// Helper function to generate SEO meta tags
export const generateSeoMeta = (pageSeo: {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
}) => {
  const title = pageSeo.title ? `${pageSeo.title} | ${siteConfig.title}` : siteConfig.title
  const description = pageSeo.description || siteConfig.description
  const keywords = pageSeo.keywords || siteConfig.keywords
  const image = pageSeo.image || siteConfig.ogImage
  const url = pageSeo.url || siteConfig.url

  return {
    title,
    meta: [
      // Basic meta tags
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: siteConfig.title },

      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:site_name', content: siteConfig.title },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: url },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:creator', content: siteConfig.twitterHandle },

      // Additional SEO
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'language', content: 'English' },
      { name: 'revisit-after', content: '7 days' },
    ],
    link: [
      { rel: 'canonical', href: url },
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: siteConfig.title,
          description: siteConfig.description,
          url: siteConfig.url,
          logo: `${siteConfig.url}/logo.png`,
          sameAs: [
            'https://twitter.com/powerhouselighting',
            'https://linkedin.com/company/powerhouse-lighting',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-XXX-XXX-XXXX',
            contactType: 'sales',
            areaServed: 'US,CA',
            availableLanguage: 'English',
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Toronto',
            addressRegion: 'ON',
            addressCountry: 'CA',
          },
        }),
      },
    ],
  }
}

// Page-specific SEO configurations
export const seoConfigs = {
  home: {
    title: 'Intelligent Industrial Solutions',
    description: 'Smart industrial automation and IoT solutions with factory-direct pricing. Shenzhen smart manufacturing with Toronto-based North American support.',
    keywords: 'smart industrial solutions, industrial automation, IoT manufacturing, smart technology, factory direct, North American support',
  },
  products: {
    title: 'Smart Industrial Products',
    description: 'Explore our intelligent industrial solutions including automation systems, IoT devices, and smart manufacturing equipment. Technical specifications and features.',
    keywords: 'industrial automation systems, IoT devices, smart manufacturing equipment, technical specifications, industrial technology',
  },
  oem: {
    title: 'OEM & Custom Smart Solutions',
    description: 'Private label and custom intelligent industrial solutions for distributors and brands. Full OEM/ODM services with custom smart technology integration.',
    keywords: 'OEM smart solutions, private label industrial technology, custom automation systems, smart technology integration, custom specifications',
  },
  about: {
    title: 'About Smartware Industrial Solutions',
    description: 'Learn about our story - bridging Shenzhen smart manufacturing excellence with Toronto-based North American support for intelligent industrial solutions.',
    keywords: 'about smartware, company story, smart manufacturing facility, Toronto office, Shenzhen IoT development',
  },
  blog: {
    title: 'Smart Industrial Blog & Insights',
    description: 'Industry insights, technical guides, and innovation updates for smart industrial automation, IoT, and manufacturing applications.',
    keywords: 'smart industrial blog, automation insights, IoT guides, manufacturing case studies, industry 4.0 updates',
  },
  contact: {
    title: 'Contact Us for Smart Industrial Solutions',
    description: 'Get in touch with our Toronto and Shenzhen teams for intelligent industrial solution inquiries, quotes, and technical support.',
    keywords: 'contact smartware, get a quote, technical support, smart solution inquiry, customer service',
  },
}