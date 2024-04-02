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

      {
        protocol: "https",
        hostname: "recipe1.ezmember.co.kr",
        port: "",
        pathname: "**",
      },

      {
        protocol: "https",
        hostname: "oasisproduct.cdn.ntruss.com",
        port: "",
        pathname: "**",
      },

      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
