if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const t=e=>n(e,c),l={module:{uri:c},exports:o,require:t};i[c]=Promise.all(r.map((e=>l[e]||t(e)))).then((e=>(s(...e),o)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-92ba552b.css",revision:null},{url:"assets/index-c26b5c8e.js",revision:null},{url:"index.html",revision:"1406241749661d50b8993fe3245f8b3e"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon-16x16.png",revision:"2ccb9bae4b7ef98e42bd489c33c75c63"},{url:"favicon-32x32.png",revision:"fb5ce09459c5b16bf8cb9046edba5a7b"},{url:"apple-touch-icon-144x144.png",revision:"a54f00791f53d542afb92ca245401b06"},{url:"android-chrome-192x192.png",revision:"4c61880ce6c60cc05bbf1bea713648de"},{url:"android-chrome-512x512.png",revision:"4f891abb32262d8ca48bed5c13e30e36"},{url:"manifest.webmanifest",revision:"859b88ac1d2b43c57048c66c96563494"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
