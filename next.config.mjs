/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/executive", destination: "/", permanent: true },
      { source: "/portfolio", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
