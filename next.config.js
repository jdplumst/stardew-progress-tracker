/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  // eslint-disable-next-line @typescript-eslint/require-await
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Netlify-CDN-Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: "stardewvalleywiki.com",
      },
    ],
  },
};

export default config;
