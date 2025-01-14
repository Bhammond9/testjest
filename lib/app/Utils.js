"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
exports.toUpperCase = toUpperCase;
exports.getStringInfo = getStringInfo;
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    StringUtils.prototype.toUpperCase = function (arg) {
        //       if(!arg){
        //     throw new Error("Invalid argument!");            
        // }
        return toUpperCase(arg);
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;
function toUpperCase(arg) {
    return arg.toUpperCase();
}
function getStringInfo(arg) {
    return {
        lowerCase: arg.toLowerCase(),
        upperCase: arg.toUpperCase(),
        characters: Array.from(arg),
        length: arg.length,
        extraInfo: {}
    };
}
