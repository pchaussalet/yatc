/**
 * @module ui/card.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Card
 * @extends Component
 */
exports.Card = Component.specialize(/** @lends Card# */ {
    tweet: {
        value: null
    },
    
    date: {
        get: function() {
            return new Date(this.tweet.created_at);
        }
    }
});
