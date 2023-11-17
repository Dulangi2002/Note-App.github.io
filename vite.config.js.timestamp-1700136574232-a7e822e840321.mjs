// vite.config.js
import { defineConfig } from "file:///D:/Note/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Note/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///D:/Note/node_modules/vite-plugin-pwa/dist/index.js";
var manifestForPlugin = {
  name: "Note-App",
  short_name: "Note-App",
  start_url: "/Note-App/",
  scope: "./",
  display: "standalone",
  background_color: "#fff",
  theme_color: "#fff",
  orientation: "portrait",
  description: "Note-App",
  icons: [
    {
      "src": "favicon-16x16.png",
      // Path to a 16x16 pixel icon
      "sizes": "16x16",
      "type": "image/png"
    },
    {
      "src": "favicon-32x32.png",
      // Path to a 32x32 pixel icon
      "sizes": "32x32",
      "type": "image/png"
    },
    {
      "src": "apple-touch-icon-144x144.png",
      // Path to a 16x16 pixel icon
      "sizes": "144x144",
      "type": "image/png",
      "prupose": "any"
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
  ]
};
var vite_config_default = defineConfig({
  base: "./",
  plugins: [
    react(),
    VitePWA({
      manifest: manifestForPlugin,
      workbox: {
        // workbox options for generateSW
        globPatterns: ["**/*.{js,css,html,png,jpg}"],
        globDirectory: "dist",
        swDest: "dist/sw.js",
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            urlPattern: new RegExp("^https://fonts.googleapis.com/"),
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "google-fonts-stylesheets"
            }
          },
          {
            urlPattern: new RegExp("^https://fonts.gstatic.com/"),
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-webfonts",
              cacheableResponse: {
                statuses: [0, 200]
              },
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 365
              }
            }
          }
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxOb3RlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxOb3RlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Ob3RlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tIFwidml0ZS1wbHVnaW4tcHdhXCJcblxuXG5jb25zdCBtYW5pZmVzdEZvclBsdWdpbiA9IHtcblxuICBuYW1lOiAnTm90ZS1BcHAnLFxuICBzaG9ydF9uYW1lOiAnTm90ZS1BcHAnLFxuICBzdGFydF91cmw6ICcvTm90ZS1BcHAvJyxcbiAgc2NvcGU6ICcuLycsXG4gIGRpc3BsYXk6ICdzdGFuZGFsb25lJyxcbiAgYmFja2dyb3VuZF9jb2xvcjogJyNmZmYnLFxuICB0aGVtZV9jb2xvcjogJyNmZmYnLFxuICBvcmllbnRhdGlvbjogJ3BvcnRyYWl0JyxcbiAgZGVzY3JpcHRpb246ICdOb3RlLUFwcCcsXG5cbiAgaWNvbnM6IFtcbiAgICB7XG4gICAgICBcInNyY1wiOiBcImZhdmljb24tMTZ4MTYucG5nXCIsIC8vIFBhdGggdG8gYSAxNngxNiBwaXhlbCBpY29uXG4gICAgICBcInNpemVzXCI6IFwiMTZ4MTZcIixcbiAgICAgIFwidHlwZVwiOiBcImltYWdlL3BuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgXCJzcmNcIjogXCJmYXZpY29uLTMyeDMyLnBuZ1wiLCAvLyBQYXRoIHRvIGEgMzJ4MzIgcGl4ZWwgaWNvblxuICAgICAgXCJzaXplc1wiOiBcIjMyeDMyXCIsXG4gICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIixcbiAgICB9LFxuXG4gICAge1xuICAgICAgXCJzcmNcIjogXCJhcHBsZS10b3VjaC1pY29uLTE0NHgxNDQucG5nXCIsIC8vIFBhdGggdG8gYSAxNngxNiBwaXhlbCBpY29uXG4gICAgICBcInNpemVzXCI6IFwiMTQ0eDE0NFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICBcInBydXBvc2VcIjogXCJhbnlcIixcbiAgICB9LFxuXG4gICAge1xuICAgICAgXCJzcmNcIjogXCJhbmRyb2lkLWNocm9tZS0xOTJ4MTkyLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjE5MngxOTJcIixcbiAgICAgIFwidHlwZVwiOiBcImltYWdlL3BuZ1wiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwibWFza2FibGVcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBcInNyY1wiOiBcImFuZHJvaWQtY2hyb21lLTUxMng1MTIucG5nXCIsXG4gICAgICBcInNpemVzXCI6IFwiNTEyeDUxMlwiLFxuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2UvcG5nXCJcbiAgICB9XG4gIF0sXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYmFzZTogJy4vJyxcbiAgcGx1Z2luczogW3JlYWN0KCksIFZpdGVQV0Eoe1xuICAgIG1hbmlmZXN0OiBtYW5pZmVzdEZvclBsdWdpbixcblxuICAgIHdvcmtib3g6IHtcbiAgICAgIC8vIHdvcmtib3ggb3B0aW9ucyBmb3IgZ2VuZXJhdGVTV1xuICAgICAgZ2xvYlBhdHRlcm5zOiBbJyoqLyoue2pzLGNzcyxodG1sLHBuZyxqcGd9J10sXG4gICAgICBnbG9iRGlyZWN0b3J5OiAnZGlzdCcsXG4gICAgICBzd0Rlc3Q6ICdkaXN0L3N3LmpzJyxcbiAgICAgIHNraXBXYWl0aW5nOiB0cnVlLFxuICAgICAgY2xpZW50c0NsYWltOiB0cnVlLFxuICAgICAgcnVudGltZUNhY2hpbmc6IFtcbiAgICAgICAge1xuICAgICAgICAgIHVybFBhdHRlcm46IG5ldyBSZWdFeHAoJ15odHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tLycpLFxuICAgICAgICAgIGhhbmRsZXI6ICdTdGFsZVdoaWxlUmV2YWxpZGF0ZScsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgY2FjaGVOYW1lOiAnZ29vZ2xlLWZvbnRzLXN0eWxlc2hlZXRzJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdXJsUGF0dGVybjogbmV3IFJlZ0V4cCgnXmh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vJyksXG4gICAgICAgICAgaGFuZGxlcjogJ0NhY2hlRmlyc3QnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGNhY2hlTmFtZTogJ2dvb2dsZS1mb250cy13ZWJmb250cycsXG4gICAgICAgICAgICBjYWNoZWFibGVSZXNwb25zZToge1xuICAgICAgICAgICAgICBzdGF0dXNlczogWzAsIDIwMF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICBtYXhFbnRyaWVzOiAxMDAsXG4gICAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNCAqIDM2NSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICBcbiAgICAgIFxuICAgICAgXG5cbiAgICAgIF0sXG4gICAgfSxcblxuICB9KSxcbiAgXSxcbn0pXG5cbi8qXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiAnLi8nLFxuICBwbHVnaW5zOiBbcmVhY3QoKSwgVml0ZVBXQSh7XG4gICAgbWFuaWZlc3Q6IHtcbiAgICAgIG5hbWU6ICdOb3RlLUFwcCcsXG4gICAgICBzaG9ydF9uYW1lOiAnTm90ZS1BcHAnLFxuICAgICAgc3RhcnRfdXJsOiAnL05vdGUtQXBwLycsXG4gICAgICBzY29wZTogJy4vJyxcbiAgICAgIGRpc3BsYXk6ICdzdGFuZGFsb25lJyxcbiAgICAgIGJhY2tncm91bmRfY29sb3I6ICcjZmZmJyxcbiAgICAgIHRoZW1lX2NvbG9yOiAnI2ZmZicsXG4gICAgICBvcmllbnRhdGlvbjogJ3BvcnRyYWl0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnTm90ZS1BcHAnLFxuXG4gICAgICBpY29uczogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJzcmNcIjogXCJmYXZpY29uLTE2eDE2LnBuZ1wiLCAvLyBQYXRoIHRvIGEgMTZ4MTYgcGl4ZWwgaWNvblxuICAgICAgICAgIFwic2l6ZXNcIjogXCIxNngxNlwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJzcmNcIjogXCJmYXZpY29uLTMyeDMyLnBuZ1wiLCAvLyBQYXRoIHRvIGEgMzJ4MzIgcGl4ZWwgaWNvblxuICAgICAgICAgIFwic2l6ZXNcIjogXCIzMngzMlwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInNyY1wiOiBcImFwcGxlLXRvdWNoLWljb24tMTQ0eDE0NC5wbmdcIiwgLy8gUGF0aCB0byBhIDE2eDE2IHBpeGVsIGljb25cbiAgICAgICAgICBcInNpemVzXCI6IFwiMTQ0eDE0NFwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgIFwicHJ1cG9zZVwiOiBcImFueVwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInNyY1wiOiBcImFuZHJvaWQtY2hyb21lLTE5MngxOTIucG5nXCIsXG4gICAgICAgICAgXCJzaXplc1wiOiBcIjE5MngxOTJcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICBcInB1cnBvc2VcIjogXCJtYXNrYWJsZVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIFwic3JjXCI6IFwiYW5kcm9pZC1jaHJvbWUtNTEyeDUxMi5wbmdcIixcbiAgICAgICAgICBcInNpemVzXCI6IFwiNTEyeDUxMlwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlL3BuZ1wiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgfSxcbiAgfSksXG4gIF0sXG5cbn0pOyovIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyTSxTQUFTLG9CQUFvQjtBQUN4TyxPQUFPLFdBQVc7QUFDbEIsU0FBUyxlQUFlO0FBR3hCLElBQU0sb0JBQW9CO0FBQUEsRUFFeEIsTUFBTTtBQUFBLEVBQ04sWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLEVBQ1AsU0FBUztBQUFBLEVBQ1Qsa0JBQWtCO0FBQUEsRUFDbEIsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBRWIsT0FBTztBQUFBLElBQ0w7QUFBQSxNQUNFLE9BQU87QUFBQTtBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxPQUFPO0FBQUE7QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxJQUNWO0FBQUEsSUFFQTtBQUFBLE1BQ0UsT0FBTztBQUFBO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsTUFDUixXQUFXO0FBQUEsSUFDYjtBQUFBLElBRUE7QUFBQSxNQUNFLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQSxJQUNiO0FBQUEsSUFFQTtBQUFBLE1BQ0UsT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBRUY7QUFFQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFBQyxNQUFNO0FBQUEsSUFBRyxRQUFRO0FBQUEsTUFDekIsVUFBVTtBQUFBLE1BRVYsU0FBUztBQUFBO0FBQUEsUUFFUCxjQUFjLENBQUMsNEJBQTRCO0FBQUEsUUFDM0MsZUFBZTtBQUFBLFFBQ2YsUUFBUTtBQUFBLFFBQ1IsYUFBYTtBQUFBLFFBQ2IsY0FBYztBQUFBLFFBQ2QsZ0JBQWdCO0FBQUEsVUFDZDtBQUFBLFlBQ0UsWUFBWSxJQUFJLE9BQU8sZ0NBQWdDO0FBQUEsWUFDdkQsU0FBUztBQUFBLFlBQ1QsU0FBUztBQUFBLGNBQ1AsV0FBVztBQUFBLFlBQ2I7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0UsWUFBWSxJQUFJLE9BQU8sNkJBQTZCO0FBQUEsWUFDcEQsU0FBUztBQUFBLFlBQ1QsU0FBUztBQUFBLGNBQ1AsV0FBVztBQUFBLGNBQ1gsbUJBQW1CO0FBQUEsZ0JBQ2pCLFVBQVUsQ0FBQyxHQUFHLEdBQUc7QUFBQSxjQUNuQjtBQUFBLGNBQ0EsWUFBWTtBQUFBLGdCQUNWLFlBQVk7QUFBQSxnQkFDWixlQUFlLEtBQUssS0FBSyxLQUFLO0FBQUEsY0FDaEM7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBS0Y7QUFBQSxNQUNGO0FBQUEsSUFFRixDQUFDO0FBQUEsRUFDRDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
