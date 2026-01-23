self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("cozy-food-cache").then((cache) => {
      return cache.addAll([
        "/restaurantmenu/",
        "/restaurantmenu/index.html",
        "/restaurantmenu/kitchen.html",
        "/restaurantmenu/login.html",
        "/restaurantmenu/admin.html",
        "/restaurantmenu/status.html",
        "/restaurantmenu/bill.html"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
