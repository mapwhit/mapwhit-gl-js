import test from 'node:test';
import mapwhitgl from '../../lib/mapwhit-gl-js.js';

test('mapwhit-gl must expose standard properties', t => {
  [
    'Map',
    'Style',
    'LngLat',
    'LngLatBounds',
    'Point',
    'Evented',
    'config',
    'MapWheelEvent',
    'MapTouchEvent',
    'MapMouseEvent',
    'setRTLTextPlugin'
  ].forEach(prop => {
    t.assert.ok(Object.hasOwn(mapwhitgl, prop), `mapwhit-gl-js should export ${prop}`);
  });
});
