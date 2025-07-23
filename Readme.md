[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Dependency Status][deps-image]][deps-url]

# mapwhit-gl-js

mapwhit-gl-js exposes the same interface as maplibre-gl-js and mapbox-gl-js but in straightforward JavaScript.

## Install

```sh
$ npm install --save mapwhit-gl-js
```

## Usage

```html
<div id="map"></div>
<script>
  import mapwhitgl from '@mapwhit/mapwhit-gl-js';

  const map = new mapwhitgl.Map({
    container: 'map', // container id
    style: 'https://tiles.openfreemap.org/styles/liberty', // style URL
    center: [0, 0], // starting position [lng, lat]
    zoom: 1 // starting zoom
  });
</script>
```

## License

BSD-3-Clause © [Natalia Kowalczyk](https://melitele.me)

[npm-image]: https://img.shields.io/npm/v/mapwhit-gl-js
[npm-url]: https://npmjs.org/package/mapwhit-gl-js

[build-url]: https://github.com/mapwhit/mapwhit-gl-js/actions/workflows/check.yaml
[build-image]: https://img.shields.io/github/actions/workflow/status/mapwhit/mapwhit-gl-js/check.yaml?branch=main

[deps-image]: https://img.shields.io/librariesio/release/npm/mapwhit-gl-js
[deps-url]: https://libraries.io/npm/mapwhit-gl-js
