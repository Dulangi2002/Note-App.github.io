if(!self.define){let e,n={};const c=(c,s)=>(c=new URL(c+".js",s).href,n[c]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=n,document.head.appendChild(e)}else e=c,importScripts(c),n()})).then((()=>{let e=n[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let a={};const o=e=>c(e,r),l={module:{uri:r},exports:a,require:o};n[r]=Promise.all(s.map((e=>l[e]||o(e)))).then((e=>(i(...e),a)))}}define(["./workbox-668f6090"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"4c61880ce6c60cc05bbf1bea713648de"},{url:"android-chrome-512x512.png",revision:"4f891abb32262d8ca48bed5c13e30e36"},{url:"apple-touch-icon-144x144.png",revision:"a54f00791f53d542afb92ca245401b06"},{url:"apple-touch-icon.png",revision:"ad30b6ed82b1d68ab4cd0a3609047ee7"},{url:"assets/header1-86b4b4c1.png",revision:null},{url:"assets/header3-1cf28398.jpg",revision:null},{url:"assets/index-35205962.js",revision:null},{url:"assets/index-ad8d2652.css",revision:null},{url:"assets/profilebackground-c34a8edd.jpg",revision:null},{url:"assets/signup-1fca4ea6.jpg",revision:null},{url:"assets/splash3-019a02f9.jpg",revision:null},{url:"favicon-16x16.png",revision:"2ccb9bae4b7ef98e42bd489c33c75c63"},{url:"favicon-32x32.png",revision:"fb5ce09459c5b16bf8cb9046edba5a7b"},{url:"index.html",revision:"c5c00c3ce55925014167e0d69db83768"},{url:"mstile-150x150.png",revision:"86cd3b0566ecf2bc90d9c223988475ce"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"safari-pinned-tab.svg",revision:"6aa42a578af7543994ccd7df01caa19f"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"favicon-16x16.png",revision:"2ccb9bae4b7ef98e42bd489c33c75c63"},{url:"favicon-32x32.png",revision:"fb5ce09459c5b16bf8cb9046edba5a7b"},{url:"apple-touch-icon-144x144.png",revision:"a54f00791f53d542afb92ca245401b06"},{url:"android-chrome-192x192.png",revision:"4c61880ce6c60cc05bbf1bea713648de"},{url:"android-chrome-512x512.png",revision:"4f891abb32262d8ca48bed5c13e30e36"},{url:"manifest.webmanifest",revision:"859b88ac1d2b43c57048c66c96563494"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts.googleapis.com\//,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts.gstatic.com\//,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/cdn.jsdelivr.net\//,new e.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/unpkg.com\//,new e.StaleWhileRevalidate({cacheName:"unpkg-cdn",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/cdn.jsdelivr.net\//,new e.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/cdnjs.cloudflare.com\//,new e.StaleWhileRevalidate({cacheName:"cloudflare-cdn",plugins:[]}),"GET")}));
