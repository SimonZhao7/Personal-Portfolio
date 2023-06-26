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
      {
        source: '/cs',
        destination: 'https://docs.google.com/presentation/d/1VyDp7IQR_3HSluCD1XQ4riP1Yh_Wg_d4Jt2OEPTkj74/edit?usp=sharing',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
