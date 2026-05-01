import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "st-alma.com.au" }],
        destination: "https://www.almagroup.com.au/st-alma",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.st-alma.com.au" }],
        destination: "https://www.almagroup.com.au/st-alma",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "host", value: "almaavalon.com.au" }],
        destination: "https://www.almagroup.com.au/alma-avalon",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.almaavalon.com.au" }],
        destination: "https://www.almagroup.com.au/alma-avalon",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
