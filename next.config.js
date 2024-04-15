/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "fudhzfmmqaii3mga.public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;
