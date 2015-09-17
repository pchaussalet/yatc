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
        value: function(sinceId) {
            var self = this;
            return this.provider.get(sinceId)
            .then(function(data) {
                var tweets = JSON.parse(data);
                for (var i = tweets.length-1; i >= 0; i--) {
                    self.tweets.unshift(tweets[i]);
                }
                return tweets;
            });
        }
    },
    
    handleRefreshAction: {
        value: function(event) {
            console.log('refresh');
            var self = this;
            this.progress.classList.remove('hide');
            var sinceId = this.tweets.length > 0 ? this.tweets[0].id : null;
            console.log(this.tweets[0]);
            this._loadTweets(sinceId)
            .then(function(tweets) {
                self.progress.classList.add('hide');
                console.log('loaded', tweets.length, 'tweets');
            });
        }
    }
});
