import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa"




const manifestForPlugin = {
  name: "Note",
  short_name: "Note", 
  start_url: "/Note-App/", 
  scope: './',
  display: "standalone", 
  background_color: "#fff", 
  theme_color: "#fff", 
  orientation: "portrait", 
  description: "Note",
  
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
      "src" : "android-chrome-192x192.png",
      "sizes" : "192x192",
      "type" : "image/png",
      "purpose": "maskable"
  },

  {
      "src" : "android-chrome-512x512.png",
      "sizes" : "512x512",
      "type" : "image/png"
  }
  ],
}







// https://vitejs.dev/config/
export default defineConfig({
  //plugins: [react()],
  base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)]
})
