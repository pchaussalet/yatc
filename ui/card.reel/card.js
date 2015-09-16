/**
 * @module ui/card.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Card
 * @extends Component
 */
exports.Card = Component.specialize(/** @lends Card# */ {
    _tweet: {
        value: null
    },
    
    tweet: {
        get: function() {
            return this._tweet;
        },
        set: function(tweet) {
            this._tweet = tweet;
        }
    },
    
    date: {
        value: null
    }
});
