"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","d23eb530fb195808404d6528c9c61711"],["/static/css/main.f5eac359.css","a25f0131f185bfc258436721b783e39a"],["/static/js/main.083b1512.js","d6ee59e86ade7d5ad82c97b306586da9"],["/static/media/CAMBRIC1st.4682d10a.jpg","4682d10a722704b623bd892513e5e214"],["/static/media/CAMBRIC2nd.5df88027.jpg","5df880273701a381a3c9845f153f7f95"],["/static/media/cpp1st.b65f04e4.jpg","b65f04e4f33bfe7fb385c282a6eb1ea9"],["/static/media/cpp2nd.34fe807d.jpg","34fe807d4f2b5471411de92cd5572a93"],["/static/media/cpp3rd.ddef29cb.jpg","ddef29cb3b7670a4ee065bec2a8ceb56"],["/static/media/felice.19d59ed7.PNG","19d59ed701f89c344f040cfa282b1acf"],["/static/media/header_item.637bed9b.png","637bed9b01b99e4f63653522273f4d1b"],["/static/media/homebutton-inner.e1d1cfed.png","e1d1cfed644d8a00a00ea57dc7a3c112"],["/static/media/homebutton-middlering.1b757b67.png","1b757b6770d081d864f32b698fa4ab0d"],["/static/media/homebutton-outerring.a4dd84da.png","a4dd84da788213c809d3e78d5434daec"],["/static/media/megurinomori.959ff05a.PNG","959ff05a0054468c1ee03b3857697f5c"],["/static/media/silva.6b49e41a.PNG","6b49e41a46c148bf78abe8b67670bba9"],["/static/media/siteCapture.b2bb6d70.PNG","b2bb6d70e5439a0fb55eb2a2d20747be"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});