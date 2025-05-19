/** @type {import('next').NextConfig} */
export default {
  images: {
    domains: [
      'res.cloudinary.com',
      'www.gstatic.com',          // google auth SVG
      'lh3.googleusercontent.com' // profile photos
    ],
  },

  // Allow build even with ESLint warnings
  eslint: {
    ignoreDuringBuilds: true,
  },

  // …any other Next.js options
};
