/**
 * @module ui/column.reel
 */
var Component = require("montage/ui/component").Component,
    request = require('montage/core/request');

/**
 * @class Column
 * @extends Component
 */
exports.Column = Component.specialize(/** @lends Column# */ {
    _tweets: {
        value: null
    },
    
    constructor: {
        value: function Column() {
            console.log(request);
        }
    }
});
