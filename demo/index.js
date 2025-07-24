import mapwhitgl from '../lib/mapwhit-gl-js.js';

mapwhitgl.config.WORKER_URL = 'build/worker.js'; // Set the worker URL

new mapwhitgl.Map({
  container: 'map', // container id
  style: 'https://tiles.openfreemap.org/styles/liberty', // style URL
  center: [0, 0], // starting position [lng, lat]
  zoom: 1 // starting zoom
});
