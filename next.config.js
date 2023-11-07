/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === 'production';
const withPWA = require ('next-pwa') ({
  dest: 'public',
  register: true,
  disable: prod ? false : true,
  skipWaiting: true,
});

module.exports = withPWA (
  {
    // next.js config
  }
);

const nextConfig = {
  images: {
    domains: [
      'i.imgur.com',
      'res.cloudinary.com',
      'vue.hibootstrap.com',
      'example.com',
      'i.pravatar.cc',
    ], // Add the image domains you want to allow here
  },
};

module.exports = nextConfig;
