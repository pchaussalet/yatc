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
    provider: {
        value: null
    },
    
    tweets: {
        value: null
    },
    
    constructor: {
        value: function Column() {
            var self = this;
            this.tweets = [];
        }
    },
    
    enterDocument: {
        value: function(firstTime) {
            this._loadTweets();
        }
    },
    
    _loadTweets: {
        value: function() {
            var self = this;
            this.provider.get()
            .then(function(data) {
                self.tweets = JSON.parse(data);
            });
        }
    },
    
    handleRefreshClick: {
        value: function(event) {
            console.log(event);
        }
    }
});
