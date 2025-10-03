const CACHE_NAME = 'baixa-material-cache-v1';
const URLS_TO_CACHE = [
  '/', // página inicial
  '/index.html', // HTML
  '/site.webmanifest', // manifest
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
];

// Instalação do service worker → cache inicial
self.addEventListener('install', (event) => {
  console.log('[SW] Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    }),
  );
});

// Ativação → limpa caches antigos
self.addEventListener('activate', (event) => {
  console.log('[SW] Ativado!');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[SW] Limpando cache antigo:', cache);
            return caches.delete(cache);
          }
        }),
      );
    }),
  );
});

// Intercepta requisições → tenta buscar, se falhar usa cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Se resposta é válida, guarda no cache
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // Se offline, tenta pegar do cache
        return caches.match(event.request).then((cached) => {
          return cached || caches.match('/index.html');
        });
      }),
  );
});
