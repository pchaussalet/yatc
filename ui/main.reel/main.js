/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component,
    TwitterClient = require('core/providers/twitter-client').TwitterClient,
    HomeProvider = require('coe/providers/home-provider').HomeProvider;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    _twitterClient: {
        value: null
    },
    
    homeProvider: {
        value: null
    },
    
    constructor: {
        value: function Main() {
            this._twitterClient = new TwitterClient();
            this.homeProvider = new HomeProvider().init(this._twitterClient);
        }
    }
});
