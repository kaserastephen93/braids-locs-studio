import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  schema?: object;
}

const SEO = ({ title, description, url, image, schema }: SEOProps) => {
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Lovet's Locs and Braids",
    "image": image || "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/hero-image-2241c04e-1776026558761.webp",
    "@id": "https://lovetslocsandbraids.com",
    "url": "https://lovetslocsandbraids.com",
    "telephone": "+18572375946",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "223 Grove St",
      "addressLocality": "West Roxbury",
      "addressRegion": "MA",
      "postalCode": "02132",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.274127,
      "longitude": -71.144884
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://facebook.com/vollen.lovet.3",
      "https://instagram.com/lovet_s_locs_and_braids",
      "https://tiktok.com/@lovetslocsandbraids",
      "https://www.yelp.com/biz/lovets-locs-and-braids-west-roxbury"
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="author" content="Lovet's Locs and Braids" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
      {schema && (
        <script type="application/ld+json">{JSON.stringify(defaultSchema)}</script>
      )}

      {/* Tawk.to Live Chat */}
      <script type="text/javascript">
        {`
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/64d1f2a3cc4637503e7c093a/1h7a7801a';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
        `}
      </script>
    </Helmet>
  );
};

export default SEO;