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
            return this.provider.get()
            .then(function(data) {
                self.tweets = JSON.parse(data);
            });
        }
    },
    
    handleRefreshAction: {
        value: function(event) {
            this._loadTweets();            
        }
    }
});
