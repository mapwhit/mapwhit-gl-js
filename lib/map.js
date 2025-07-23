import gestures from '@mapwhit/map-gestures';
import { mapStyle } from '@mapwhit/map-style';
import tilerenderer from '@mapwhit/tilerenderer';

export default class Map extends tilerenderer.Map {
  constructor(options = {}) {
    options = { ...options };
    const { style } = options;
    delete options.style;

    super(options);

    // Ensure that gestures module bubbles handler events to map
    options.bubbleEventsToMap ??= true;
    // Add gestures to the map instance
    const handlers = gestures(this, options);
    for (const prop in handlers) {
      if (!(prop in this)) {
        this[prop] = handlers[prop];
      }
    }

    if (style) {
      mapStyle(style).then(style => this.setStyle(style));
    }
  }
}
