if(!self.define){let e,i={};const s=(s,t)=>(s=new URL(s+".js",t).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let r={};const d=e=>s(e,o),f={module:{uri:o},exports:r,require:d};i[o]=Promise.all(t.map((e=>f[e]||d(e)))).then((e=>(n(...e),r)))}}define(["./workbox-a523fd56"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/site.webmanifest",revision:"25a5de956ba6324131dfe9a337b143b9"},{url:"cace535d.js",revision:"9552f51868c4d3349111f1e693bf592a"},{url:"index.html",revision:"f8dc516e79e2acd9292839bdbf9f4c3a"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map
