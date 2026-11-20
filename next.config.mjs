/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // The guide is for subscribers only: keep it out of search engines.
        source: "/guide",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
