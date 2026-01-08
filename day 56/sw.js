

const CACHE_NAME = "offline-cache-v1";
const FILES_TO_CACHE = [
               "./",
             "./index.html"
];


//install event

self.addEventListener('install',event => {
               event.waitUntil(
                              caches.open(CACHE_NAME).then(cache => {
                                             return cache.addAll(FILES_TO_CACHE);
                              })
               );
});

//fetch event

self.addEventListener("fetch",event => {
               event.respondWith(
                              caches.match(event.request).then(response => {
                                             return response || fetch (event.request);
                              })
               );
});