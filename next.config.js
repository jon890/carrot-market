/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qi-o.qoo10cdn.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
