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
        value: function(path, params) {
            return this._request('GET', path, null, params);
        }
    },

    post: {
        value: function(path, data) {
            return this._request('POST', path, data);
        }
    },

    _request: {
        value: function(method, path, data, params) {
            var url;
            if (path.substr(0, 1) === '/') {
                url = this._serviceUrl + path;
            } else {
                url = path;
            }
            
            params = params || {};
            var options = [];
            for (var i = 0; i < Object.keys(params); i++) {
                var name = Object.keys(params)[i],
                    value = params[name];
                options.push(name + '=' + value);
            }
            if (options.length > 0) {
                url += '?' + options.join('&');
            }
            
            var requestData = {
                method: method,
                url: url,
                data: data
            };
            
            var token = {
                public: configuration.twitter.tokenPublic,
                secret: configuration.twitter.tokenSecret
            };
            
            return request({
                method:  requestData.method,
                url:    requestData.url,
                data:    requestDa12ta.data,
                headers: this._oauth.toHeader(this._oauth.authorize(requestData, token))
            });
        }
    }
});
