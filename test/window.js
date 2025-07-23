import {} from 'canvas';
import gl from 'gl';
import jsdom from 'jsdom';

globalThis.window ??= create();

function create() {
  const { window } = new jsdom.JSDOM('', {
    url: 'https://example.org/',
    // Send jsdom console output to the node console object.
    virtualConsole: new jsdom.VirtualConsole().sendTo(console),
    // load images
    resources: 'usable'
  });

  // Add webgl context with the supplied GL
  const originalGetContext = window.HTMLCanvasElement.prototype.getContext;
  window.HTMLCanvasElement.prototype.getContext = function (type, attributes) {
    if (type === 'webgl') {
      if (!this._webGLContext) {
        this._webGLContext = gl(this.width, this.height, attributes);
      }
      return this._webGLContext;
    }
    // Fallback to existing HTMLCanvasElement getContext behaviour
    return originalGetContext.call(this, type, attributes);
  };

  window.WebGLFramebuffer ??= Object;

  globalThis.document ??= window.document;

  return window;
}
