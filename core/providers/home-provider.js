/**
 * @module core/providers/home-provider
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class HomeProvider
 * @extends Montage
 */
exports.HomeProvider = Montage.specialize(/** @lends HomeProvider# */ {
    _endpoint: {
        value: '/statuses/home_timeline.json'
    },
    
    constructor: {
        value: function HomeProvider() {
        }
    },
    
    init: {
        value: function(twitterClient) {
            this._twitterClient = twitterClient;
        }
    },
    
    get: {
        value: function() {
            return this._twitterClient.get(this._endpointUrl)
            .then(function(response) {
                return response.body;
            });
        }
    }
});
