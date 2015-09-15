/**
 * @module core/providers/login-provider
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class LoginProvider
 * @extends Montage
 */
exports.LoginProvider = Montage.specialize(/** @lends LoginProvider# */ {
    _twitterClient: {
        value: null
    },
    
    init: {
        value: function(twitterClient) {
            this._twitterClient = twitterClient;
        }
    },
    
    getAuthUrl: {
        value: function() {
            this._twitterClient.post('https://api.twitter.com/oauth/request_token?oauth_callback=oob')
            .then(function(response) {
                console.log('https://api.twitter.com/oauth/authorize?' + response.body);
            });;
        }
    },
    
    inputCode: {
        value: function(code) {
            this._twitterClient.post('https://api.twitter.com/oauth/access_token?oauth_verifier=' + code)
            .then(function(data) {
                console.log(data);
            });
        }
    }
});
