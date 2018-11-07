const cacheName = 'portfolio-v8';
const images = '.png';
const imagesNames = ['frogger_clone', 'jasmine', 'memory_game', 'story_game', 'universe_game', 'myreads', 'restaurant_reviews', 'neighborhood_map', 'football_app'];
const staticCachables = [
        '/',
        '/js/main.js',
        '/css/style.css',
        '/css/responsive.css',
        '/index.html',
];

for (let i = 1; i < imagesNames.length; i++) {
  staticCachables.push('img/' + imagesNames[i] + '.jpg');
}

/*
* Inserts data into cache in the install phase of the servive worker
*/
self.addEventListener('install', event => {
	event.waitUntil(
    caches.open(cacheName).then( cache => {
      return cache.addAll(staticCachables);
    })
  );
});

/*
* deletes older cache, if the cache name is eventually updated.
*/
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then( allNames => {
      return Promise.all(
        allNames.filter( name => {
          if (name != cacheName && name.startsWith('portfolio-') === true) {
            return name;
          }
        }).map( nameDelete => {
          return caches.delete(nameDelete);
        })
      )
    })
  )
});

/*
* Intercepts fetches.
*/
self.addEventListener('fetch', event => {
    /*
    * responds from the cache if the request is available there,
    * if not, then fetches the request as usual.
    */
  	event.respondWith(
      	caches.match(event.request).then( response => {

          if (response !== undefined) {
        		return response;
          } else {
            return fetch(event.request);
          }
      })
    );
});

/*
* Listenes for the skipWaiting message
*/
self.addEventListener('message', event => {
  //console.log(event.data);
	  if (event.data.action === 'skipWaiting') {
	     self.skipWaiting();
	  }
});