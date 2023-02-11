/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
}

rewrites: async () => [
	{
    source: "/public/sort.html",
    destination: "/pages/api/sort.js",
  },
],

module.exports = nextConfig
