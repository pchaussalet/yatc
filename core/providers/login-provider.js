/**
 * @module core/providers/login-provider
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class LoginProvider
 * @extends Montage
 */
exports.LoginProvider = Montage.specialize(/** @lends LoginProvider# */ {
    constructor: {
        value: function LoginProvider() {
            this.super();
        }
    }
});
