const CACHE="car-vision-v2";
const CORE=["./","./index.html","./sw.js"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(u.origin===location.origin){
    e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{
      const copy=x.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)); return x;
    }).catch(()=>caches.match("./index.html"))));
  }
});