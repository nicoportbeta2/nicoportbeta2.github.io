if(!self.define){let e,i={};const s=(s,t)=>(s=new URL(s+".js",t).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let r={};const d=e=>s(e,o),l={module:{uri:o},exports:r,require:d};i[o]=Promise.all(t.map((e=>l[e]||d(e)))).then((e=>(n(...e),r)))}}define(["./workbox-a523fd56"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"6b81f5c5.js",revision:"f88a8d0ea7de024f7492c695b7dbdd19"},{url:"assets/site.webmanifest",revision:"25a5de956ba6324131dfe9a337b143b9"},{url:"index.html",revision:"c79b68677b153d24d173ba7e8c332a0f"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map
