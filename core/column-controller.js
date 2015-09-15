/**
 * @module core/column-controller
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class ColumnController
 * @extends Montage
 */
exports.ColumnController = Montage.specialize(/** @lends ColumnController# */ {
    _columnType: {
        value: null
    },
    
    constructor: {
        value: function ColumnController() {
        }
    },
    
    init: {
        value: function(columnType) {
            this._columnType = columnType;
        }
    }
});
