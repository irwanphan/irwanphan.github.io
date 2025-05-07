const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
})

module.exports = withPWA({
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/irwanphan.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/irwanphan.github.io/' : ''
})
