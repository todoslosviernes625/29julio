const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",// BASICO
  "/css/style.css",
  "/js/app.js",
  "/images/bg/web-app_1.webp", 
  
  "/js/preload.js", // PRELOAD
  "/qr/img/icono-preloader.gif",
  "/1x1.html",// las nueves paginas web secundario
  "/2x2.html",
  "/3x3.html",
  "/4x4.html",
  "/5x5.html",
  "/6x6.html",
  "/7x7.html",
  "/8x8.html",
  "/9x9.html",
  "/js/app1.js",// los nueves javasscriot 
  "/js/app2.js",
  "/js/app3.js",
  "/js/app4.js",
  "/js/app5.js",
  "/js/app6.js",
  "/js/app7.js",
  "/js/app8.js",
  "/js/app9.js",
  "/images/sem/1x1.gif",// VENTISIENTE ANIMACIONES
  "/images/sem/1x2.gif",
  "/images/sem/1x3.gif",
  "/images/sem/1x4.gif",
  "/images/sem/1x5.gif",
  "/images/sem/1x6.gif",
  "/images/sem/tres1x7.gif",
  "/images/sem/tres1x8.gif",
  "/images/sem/tres1x9.gif",
  "/images/sem/2x1.gif",
  "/images/sem/2x2.gif",
  "/images/sem/2x3.gif",
  "/images/sem/2x4.gif",
  "/images/sem/2x5.gif",
  "/images/sem/2x6.gif",
  "/images/sem/2x7.gif",
  "/images/sem/2x8.gif",
  "/images/sem/2x9.gif",
  "/images/sem/3x1.gif",
  "/images/sem/3x2.gif",
  "/images/sem/3x3.gif",
  "/images/sem/3x4.gif",
  "/images/sem/3x5.gif",
  "/images/sem/3x6.gif",
  "/images/sem/3x7.gif",
  "/images/sem/3x8.gif",
  "/images/sem/3x9.gif",
  "/images/coffee111.gif",// IMAGENES PRINCIPAL
  "/images/coffee112.gif",
  "/images/coffee113.gif",
  "/images/coffee4.gif",
  "/images/coffee5.gif",
  "/images/coffee6.gif",
  "/images/coffee7.gif",
  "/images/coffee8.gif",
  "/images/coffee9.gif"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
