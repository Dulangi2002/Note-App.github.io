import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa"


const manifestForPlugin = {

  name: 'Note-App',
  short_name: 'Note-App',
  start_url: '/Note-App/',
  scope: './',
  display: 'standalone',
  background_color: '#fff',
  theme_color: '#fff',
  orientation: 'portrait',
  description: 'Note-App',

  icons: [
    {
      "src": "favicon-16x16.png", // Path to a 16x16 pixel icon
      "sizes": "16x16",
      "type": "image/png",
    },
    {
      "src": "favicon-32x32.png", // Path to a 32x32 pixel icon
      "sizes": "32x32",
      "type": "image/png",
    },

    {
      "src": "apple-touch-icon-144x144.png", // Path to a 16x16 pixel icon
      "sizes": "144x144",
      "type": "image/png",
      "prupose": "any",
    },

    {
      "src": "android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },

    {
      "src": "android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],

}

export default defineConfig({
  base: './',
  plugins: [react(), VitePWA({
    manifest: manifestForPlugin,

    workbox: {
      // workbox options for generateSW
      globPatterns: ['**/*.{js,css,html,png,jpg}'],
      globDirectory: 'dist',
      swDest: 'dist/sw.js',
      skipWaiting: true,
      clientsClaim: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://fonts.googleapis.com/'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'google-fonts-stylesheets',
          },
        },
        {
          urlPattern: new RegExp('^https://fonts.gstatic.com/'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-webfonts',
            cacheableResponse: {
              statuses: [0, 200],
            },
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 60 * 60 * 24 * 365,
            },
          },
        },
       
      
      

      ],
    },

  }),
  ],
})

/*
export default defineConfig({
  base: './',
  plugins: [react(), VitePWA({
    manifest: {
      name: 'Note-App',
      short_name: 'Note-App',
      start_url: '/Note-App/',
      scope: './',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#fff',
      orientation: 'portrait',
      description: 'Note-App',

      icons: [
        {
          "src": "favicon-16x16.png", // Path to a 16x16 pixel icon
          "sizes": "16x16",
          "type": "image/png",
        },
        {
          "src": "favicon-32x32.png", // Path to a 32x32 pixel icon
          "sizes": "32x32",
          "type": "image/png",
        },

        {
          "src": "apple-touch-icon-144x144.png", // Path to a 16x16 pixel icon
          "sizes": "144x144",
          "type": "image/png",
          "prupose": "any",
        },

        {
          "src": "android-chrome-192x192.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "maskable"
        },

        {
          "src": "android-chrome-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ],
    },
  }),
  ],

});*/