/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component,
    TwitterClient = require('core/providers/twitter-client').TwitterClient,
    HomeProvider = require('core/providers/home-provider').HomeProvider,
    LoginProvider = require('core/providers/login-provider').LoginProvider;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    _twitterClient: {
        value: null
    },
    
    loginProvider: {
        value: null
    },
    
    homeProvider: {
        value: null
    },
    
    constructor: {
        value: function Main() {
            this._twitterClient = new TwitterClient();
            this._twitterClient.post('https://api.twitter.com/oauth/request_token?oauth_callback=oob')
            .then(function(response) {
                console.log('https://api.twitter.com/oauth/authorize?' + response.body);
            });;
            this.homeProvider = new HomeProvider().init(this._twitterClient);
            this.loginProvider = new LoginProvider().init(this._twitterClient);
            
            this.loginProvider.inputCode(6718285);
        }
    }
});
