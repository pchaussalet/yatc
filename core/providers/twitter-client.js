/**
 * @module core/providers/twitter-client
 */
var Montage = require("montage/core/core").Montage,
    OAuth = require('oauth-1.0a').OAuth,
    configuration = require('core/configuration');
/**
 * @class TwitterClient
 * @extends Montage
 */
exports.TwitterClient = Montage.specialize(/** @lends TwitterClient# */ {
    _oauth: {
        value: null
    },
    
    constructor: {
        value: function TwitterClient() {
            this._oauth = 
        }
    }
});
