/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverMinification: false,
  },

  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  images: {
    remotePatterns: [
      {
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        hostname: "cyyslmrwxjypirywjmqt.supabase.co",
        pathname: "/**",
      },
      {
        hostname: "efqbixdttdrdsnemjtme.supabase.co",
        pathname: "/**",
      },
      {
        hostname: "mob.com",
        pathname: "/**",
      },
      {
        hostname: "app.mob.com",
        pathname: "/**",
      },
      {
        hostname: "www.familyhandyman.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;