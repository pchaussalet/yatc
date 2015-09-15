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
            var self = this;
            this._tweets = [];
            for (var i = 0; i < 10; i++) {
                request({
                    method: 'GET',
                    url: 'https://baconipsum.com/api/?type=all-meat&sentences=1'
                }).then(function(data) {
                    self._tweets.push({
                        author: 'Foo Bar', 
                        text: data.substr(0,140}
                    });
                });
            }
            console.log(this._tweets);
        }
    }
});
