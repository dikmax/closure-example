goog.provide('Figure');

/**
 * @constructor
 */
Figure = function () {
};

/**
 * @param {CanvasRenderingContext2D} context
 */
Figure.prototype.draw = function (context) {
    context.strokeStyle = '#00000';
    context.stroke();
};