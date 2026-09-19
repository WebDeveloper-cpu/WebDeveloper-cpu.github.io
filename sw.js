// Minimal Service Worker required for Add to Home Screen functionality
self.addEventListener('install', (event) => {
    console.log('Service Worker installing...');
});

self.addEventListener('fetch', (event) => {
    // This can be empty but must exist to satisfy browser requirements
    event.respondWith(fetch(event.request));
});
