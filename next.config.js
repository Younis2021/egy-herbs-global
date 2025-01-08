/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
<<<<<<< HEAD
  images: { 
    unoptimized: true,
    domains: ['ik.imagekit.io'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
=======
  images: { unoptimized: true },
};

module.exports = nextConfig;
>>>>>>> 4c8206021add99218f12f24650223a5e2ac4ef10
