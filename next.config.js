/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
      domains: ['cdn.jsdelivr.net'],
  },
  redirects: async () => {
    return [
      {
        source: '/writers-nbk',
        destination: 'https://writers-notebook.vercel.app/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
