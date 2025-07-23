import test from 'node:test';
import Map from '../../lib/map.js';
import {} from '../window.js';

test('Map', async () => {
  const map = new Map({
    container: document.createElement('div')
  });

  await test('Map must expose standard properties', t => {
    ['boxZoom', 'doubleClickZoom', 'dragPan', 'dragRotate', 'keyboard', 'scrollZoom', 'touchZoomRotate'].forEach(
      prop => {
        t.assert.ok(prop in map, `Map should export ${prop}`);
      }
    );
  });

  await test('Map must expose standard accessors', t => {
    ['repaint', 'showCollisionBoxes', 'showOverdrawInspector', 'showTileBoundaries'].forEach(prop => {
      t.assert.ok(prop in map, `Map should export ${prop}`);
      let accessor;
      let obj = map;
      do {
        accessor = Object.getOwnPropertyDescriptor(obj, prop);
        obj = Object.getPrototypeOf(obj);
      } while (!accessor && obj);
      t.assert.ok(accessor, `Map should export ${prop}`);
      t.assert.ok(Object.hasOwn(accessor, 'get'), `Map.${prop} should have a getter`);
      t.assert.ok(accessor.get instanceof Function, `Map.${prop} getter should be a function`);
      t.assert.ok(Object.hasOwn(accessor, 'set'), `Map.${prop} should have a setter`);
      t.assert.ok(accessor.set instanceof Function, `Map.${prop} setter should be a function`);
    });
  });

  await test('Map must expose standard methods', t => {
    [
      'addControl',
      'addImage',
      'addLayer',
      'addSource',
      'areTilesLoaded',
      'cameraForBounds',
      'easeTo',
      'fitBounds',
      'flyTo',
      'getBearing',
      'getBounds',
      'getCanvas',
      'getCanvasContainer',
      'getCenter',
      'getContainer',
      'getFeatureState',
      'getFilter',
      'getLayer',
      'getLayoutProperty',
      'getLight',
      'getMaxBounds',
      'getMaxZoom',
      'getMinZoom',
      'getPaintProperty',
      'getPitch',
      'getSource',
      'getStyle',
      'getZoom',
      'hasImage',
      'isMoving',
      'isRotating',
      'isSourceLoaded',
      'isStyleLoaded',
      'isZooming',
      'jumpTo',
      'listens',
      'listImages',
      'loaded',
      'loadImage',
      'moveLayer',
      'panBy',
      'panTo',
      'project',
      'queryRenderedFeatures',
      'querySourceFeatures',
      'remove',
      'removeControl',
      'removeImage',
      'removeLayer',
      'removeSource',
      'resetNorth',
      'resize',
      'rotateTo',
      'setBearing',
      'setCenter',
      'setEventedParent',
      'setFeatureState',
      'setFilter',
      'setLayerZoomRange',
      'setLayoutProperty',
      'setLight',
      'setMaxBounds',
      'setMaxZoom',
      'setMinZoom',
      'setPaintProperty',
      'setPitch',
      'setRenderWorldCopies',
      'setStyle',
      'setZoom',
      'snapToNorth',
      'stop',
      'unproject',
      'zoomIn',
      'zoomOut',
      'zoomTo'
    ].forEach(prop => {
      t.assert.ok(prop in map, `Map should export ${prop}`);
      t.assert.ok(map[prop] instanceof Function, `Map.${prop} should be a function`);
    });
  });
});
