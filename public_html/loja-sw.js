'use strict'
importScripts('js/libs/sw-toolbox/sw-toolbox.js');

toolbox.options.debug = true;

toolbox.precache([
   'index.html',
   'view/principal.html',
   'view/produtos.html',
   'produtos.json',
   'js/loja.js'
]);
toolbox.router.get('index.html', toolbox.cacheFirst);
toolbox.router.get('js/libs/*', toolbox.cacheFirst);
toolbox.router.get('js/loja.js', toolbox.cacheFirst);
toolbox.router.get('views/*', toolbox.cacheFirst);
toolbox.router.get('icons/*', toolbox.cacheFirst);


toolbox.router.get('*', toolbox.networkFirst);