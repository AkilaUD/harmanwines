/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.harmanwines.com.au",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "d2j6dbq0eux0bg.cloudfront.net",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
