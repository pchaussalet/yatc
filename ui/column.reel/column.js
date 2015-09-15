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
    tweets: {
        value: null
    },
    
    constructor: {
        value: function Column() {
            var self = this;
            this.tweets = [];
            this._loadTweets();
            setTimeout(function() {
                self._loadTweets();
            }, 2000);
        }
    },
    
    _loadTweets: {
        value: function() {
            for (var i = 0; i < 5; i++) {
                request({
                    method: 'GET',
                    url: 'https://baconipsum.com/api/?type=all-meat&sentences=1'
                }).then(function(data) {
                    var tweet = {
                        author: 'Foo Bar',
                        text: JSON.parse(data.body)[0].substr(0,140)
                    };
                    self.tweets.push(tweet);
                }, function(error) {
                    console.warn(error);
                });
            }
        }
    }
});
