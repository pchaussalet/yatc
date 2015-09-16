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
                var tweets = JSON.parse(data);
                self.tweets = self.tweets.concat(tweets);
                return tweets;
            });
        }
    },
    
    handleRefreshAction: {
        value: function(event) {
            console.log('refresh');
            var self = this;
            this.progress.classList.remove('hide');
            this._loadTweets()
            .then(function(tweets) {
                self.progress.classList.add('hide');
                console.log('loaded', tweets.length, 'tweets');
            });
        }
    }
});
