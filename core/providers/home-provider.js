/**
 * @module core/providers/home-provider
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class HomeProvider
 * @extends Montage
 */
exports.HomeProvider = Montage.specialize(/** @lends HomeProvider# */ {
    _endpointUrl: {
        value: '/statuses/home_timeline.json'
    },
    
    constructor: {
        value: function HomeProvider() {
        }
    },
    
    init: {
        value: function(twitterClient) {
            this._twitterClient = twitterClient;
            return this;
        }
    },
    
    get: {
        value: function(sinceId) {
            var params = { count: 200 };
            if (typeof sinceId === 'undefined' && sinceId) {
                params.since_id = sinceId;
            }
            return this._twitterClient.get(this._endpointUrl, params)
            .then(function(response) {
                return response.body;
            });
        }
    }
});
