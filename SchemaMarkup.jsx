
import React from 'react';
import { Helmet } from 'react-helmet';

const SchemaMarkup = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Odoo Development Agency",
    "description": "Expert Odoo development services at 1/4th the market price. Serving UAE and India with custom ERP solutions.",
    "url": "https://www.example.com",
    "logo": "https://www.example.com/logo.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+971-XX-XXX-XXXX",
        "contactType": "Customer Service",
        "areaServed": "AE",
        "availableLanguage": ["English", "Arabic"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-XXX-XXX-XXXX",
        "contactType": "Customer Service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Malayalam"]
      }
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Kerala",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "addressCountry": "AE"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/example",
      "https://twitter.com/example"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Odoo Development Agency",
    "image": "https://www.example.com/office.jpg",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kerala",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.8505",
      "longitude": "76.2711"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
