"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../../../Core/XmlElementNames");
var Recurrence_IntervalPattern_1 = require("./Recurrence.IntervalPattern");
/**
 * Represents a regeneration pattern, as used with recurring tasks, where each occurrence happens a specified number of months after the previous one is completed.
 */
var MonthlyRegenerationPattern = (function (_super) {
    __extends(MonthlyRegenerationPattern, _super);
    function MonthlyRegenerationPattern(startDate, interval) {
        if (arguments.length === 0) {
            _super.call(this);
            return;
        }
        _super.call(this, startDate, interval);
    }
    Object.defineProperty(MonthlyRegenerationPattern.prototype, "XmlElementName", {
        /**
         * @internal Gets the name of the XML element.
         *
         * @value   The name of the XML element.
         */
        get: function () {
            return XmlElementNames_1.XmlElementNames.MonthlyRegeneration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonthlyRegenerationPattern.prototype, "IsRegenerationPattern", {
        /**
         * Gets a value indicating whether this instance is a regeneration pattern.
         *
         * @value   *true* if this instance is a regeneration pattern; otherwise, *false*.</value>
         */
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return MonthlyRegenerationPattern;
}(Recurrence_IntervalPattern_1.IntervalPattern));
exports.MonthlyRegenerationPattern = MonthlyRegenerationPattern;
