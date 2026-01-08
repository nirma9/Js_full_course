const CACHE_NAME = "basic-pwa-cache-v1";

//files to cache

const FILES_TO_CACHE = [
               
               "index.html"
];

//install event

self.addEventListener("install", event => {
               console.log("service worker installing..");

               event.waitUntil(
                              caches.open(CACHE_NAME)
                              .then(cache => {
                                             console.log("caching files");
                                             return cache.addAll(FILES_TO_CACHE);
                              })
               );
});

//fetch event

self.addEventListener("fetch",event => {

               event.respondWith(
                              caches.match(event.request)
                              .then(response => {
                                             return response ||fetch(event.request);
                              })
               );
});