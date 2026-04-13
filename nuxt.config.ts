// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  
  // SEO Optimization
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Smartware Industrial Solutions',
      meta: [
        { name: 'description', content: 'Intelligent industrial solutions with smart technology integration, factory-direct pricing, and comprehensive support' },
        { name: 'keywords', content: 'smart industrial solutions, industrial automation, IoT manufacturing, smartware, factory-direct pricing' },
        { name: 'author', content: 'Smartware Industrial Solutions' },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' },
        { rel: 'canonical', href: 'https://smartware-solutions.com' },
      ],
    },
  },
  
  // Performance optimization
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/products', '/oem', '/about', '/blog', '/contact']
    }
  },
  
  // Route rules for SEO
  routeRules: {
    '/': { prerender: true },
    '/products': { prerender: true },
    '/oem': { prerender: true },
    '/about': { prerender: true },
    '/blog': { prerender: true },
    '/contact': { prerender: true },
  },
})