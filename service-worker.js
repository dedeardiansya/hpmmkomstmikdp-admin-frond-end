/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/hpmmdp/precache-manifest.230f05c69bdbf1271cdedb0d2ecdb1c3.js"
);

workbox.core.setCacheNameDetails({prefix: "hpmmkomstmikdp"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/https:\/\/fonts./, new workbox.strategies.CacheFirst({ "cacheName":"fonts", plugins: [] }), 'GET');
workbox.routing.registerRoute(/\/img\/icons\/|favicon|.(png|gif|jpg|jpeg|svg)/, new workbox.strategies.CacheFirst({ "cacheName":"icons", plugins: [] }), 'GET');
workbox.routing.registerRoute(/https:\/\/my-json-server./, new workbox.strategies.NetworkFirst({ "cacheName":"api-cache", plugins: [] }), 'GET');
