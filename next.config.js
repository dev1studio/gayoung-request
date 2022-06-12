/** @type {import('next').NextConfig} */
const withImages = require('next-images')
const PWA = require('./pwa.config')
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  }
}

module.exports = withImages({ nextConfig, PWA })
