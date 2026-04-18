/**
 * Navigation menu constants for the application
 */

export interface NavItem {
  label: string
  path: string
  external?: boolean
}

/**
 * Main navigation menu items
 * Used in Header and Footer components
 */
export const MAIN_NAVIGATION: NavItem[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Products',
    path: '/products',
  },
  {
    label: 'OEM & Custom',
    path: '/oem',
  },
  {
    label: 'About Us',
    path: '/about',
  },
  {
    label: 'Blog',
    path: '/blog',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
] as const

/**
 * Footer quick links
 * Currently same as main navigation, but can be customized
 */
export const FOOTER_QUICK_LINKS: NavItem[] = MAIN_NAVIGATION

/**
 * Footer company info links
 * Additional links for company information
 */
export const FOOTER_COMPANY_LINKS: NavItem[] = [
  {
    label: 'Privacy Policy',
    path: '/privacy',
  },
  {
    label: 'Terms of Service',
    path: '/terms',
  },
  {
    label: 'Careers',
    path: '/careers',
  },
] as const

/**
 * CTA Button configuration
 */
export const CTA_BUTTON = {
  label: 'Request Quote',
  path: '/contact',
} as const

/**
 * Navigation configuration object
 * Centralized configuration for all navigation-related settings
 */
export const NAVIGATION_CONFIG = {
  main: MAIN_NAVIGATION,
  footerQuickLinks: FOOTER_QUICK_LINKS,
  footerCompanyLinks: FOOTER_COMPANY_LINKS,
  cta: CTA_BUTTON,
} as const