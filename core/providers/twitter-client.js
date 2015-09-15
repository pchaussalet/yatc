/**
 * @module core/providers/twitter-client
 */
var Montage = require("montage/core/core").Montage,
    request = require('montage/core/request'),
    OAuth = require('oauth-1.0a').OAuth,
    configuration = require('core/configuration');
/**
 * @class TwitterClient
 * @extends Montage
 */
exports.TwitterClient = Montage.specialize(/** @lends TwitterClient# */ {
    _serviceUrl: {
        value: null
    },
    
    _oauth: {
        value: null
    },
    
    constructor: {
        value: function TwitterClient() {
            this._serviceUrl = 'https://api.twitter.com/1.1';
            this._oauth = OAuth({
                consumer: {
                    public: configuration.twitter.apiKey,
                    secret: configuration.twitter.apiSecret
                },
                signature_method: 'HMAC-SHA1'
            });
        }
    },
    
    _request: {
        value: function(method, path, data) {
            var requestData = {
                method: method,
                url: this._serviceUrl + path,
                data: data
            };
            
            var token = {
                public: configuration.twitter.tokenPublic,
                secret: configuration.twitter.tokenSecret
            };
            
            return request({
                method: requestData.method,
                path:   requestData.url,
                
            });
        }
    }
});
