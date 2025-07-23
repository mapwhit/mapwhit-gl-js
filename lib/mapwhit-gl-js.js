import * as gestures from '@mapwhit/map-gestures';
import tilerenderer from '@mapwhit/tilerenderer';
import Map from './map.js';

const mapwhitgl = {
  ...gestures,
  ...tilerenderer,
  Map
};

export default mapwhitgl;
