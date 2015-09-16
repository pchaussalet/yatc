/**
 * @module ui/progress.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Progress
 * @extends Component
 */
exports.Progress = Component.specialize(/** @lends Progress# */ {
    constructor: {
        value: function Progress() {
            this.super();
        }
    }
});
