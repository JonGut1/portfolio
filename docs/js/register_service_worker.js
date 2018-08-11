/*
* Service worker function
*/
serviceWorker = () => {
  /* checks whether the browser supports service workers */
  if ('serviceWorker' in navigator) {

    /* registers a service worker */
    navigator.serviceWorker.register('/sw.js').then(response => {

      if (response.waiting) {
        updateWorker(response.waiting);
        return;
      }

      if (response.installing) {
        checkInstall(response.installing);
        return;
      }

      response.addEventListener('updatefound', () => {
        checkInstall(response.installing);
      });

    });
  }
}

/* check the install state of the service worker */
checkInstall = worker => {
  if (worker.status === 'installed') {
    updateWorker(worker);
  }
}

/* sends a skipWaiting message */
updateWorker = worker => {
  worker.postMessage({action: 'skipWaiting'});
}

//serviceWorker();