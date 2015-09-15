/**
 * @module core/providers/twitter-client
 */
var Montage = require("montage/core/core").Montage,
    request = require('montage/core/request'),
    OAuth = require('oauth-1.0a'),
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
            console.log(OAuth);
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
    
    get: {
        value: function(path) {
            return this._request('GET', path);
        }
    },

    post: {
        value: function(path, data) {
            return this._request('POST', path, data);
        }
    },

    _request: {
        value: function(method, path, data) {
            console.log(arguments);
            
            var requestData = {
                method: method,
                url: this._serviceUrl + path,
                data: data
            };
            
            var token = {
                public: configuration.twitter.tokenPublic,
                secret: configuration.twitter.tokenSecret
            };
            
            console.log(requestData);
            
            return request({
                method:  requestData.method,
                path:    requestData.url,
                data:    requestData.data,
                headers: this._oauth.toHeader(this._oauth.authorize(requestData, token))
            });
        }
    }
});
