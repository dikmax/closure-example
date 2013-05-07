goog.provide('Application');

goog.require('Circle');

/**
 * @constructor
 */
Application = function () {
    var c = new Circle(300,200,100);
    var el = /** @type {HTMLCanvasElement} */ document.getElementById('canvas');
    var context = el.getContext('2d');
    c.draw(context);
};