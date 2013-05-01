/**
 * @constructor
 */
var Circle = function (x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
};

/**
 * @type {number}
 */
Circle.prototype.x = 0;
/**
 * @type {number}
 */
Circle.prototype.y = 0;
/**
 * @type {number}
 */
Circle.prototype.radius = 0;

/**
 * @param {CanvasRenderingContext2D} context
 */
Circle.prototype.draw = function (context) {
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.strokeStyle = '#00000';
    context.stroke();
};
