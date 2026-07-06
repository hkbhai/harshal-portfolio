import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/config/site';
import { profile } from '@/data/profile';

export function SEO({
  title = siteConfig.title,
  description = siteConfig.description,
  pathname = '',
  ogImage = siteConfig.ogImage,
  noindex = false,
}) {
  const canonicalUrl = `${siteConfig.url}${pathname}`;
  const fullTitle = title === siteConfig.title ? title : `${title} | ${siteConfig.name}`;

  // JSON-LD Person structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    description: profile.summary,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Surat',
      addressRegion: 'Gujarat',
      addressCountry: 'India',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Veer Narmad South Gujarat University',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Quebix Technology',
    },
    sameAs: [siteConfig.linkedin],
    knowsAbout: [
      'Laravel',
      'PHP',
      'React',
      'JavaScript',
      'MySQL',
      'Elasticsearch',
      'REST API',
      'Tailwind CSS',
      'Enterprise Software',
      'SaaS',
    ],
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={siteConfig.keywords.join(', ')} />
      <meta name="author" content={siteConfig.name} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${siteConfig.url}${ogImage}`} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteConfig.url}${ogImage}`} />

      {/* Theme color will be handled dynamically */}

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
