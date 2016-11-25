"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * ## @internal *Not Implemented*
 */
var GetNonIndexableItemStatisticsRequest = (function (_super) {
    __extends(GetNonIndexableItemStatisticsRequest, _super);
    function GetNonIndexableItemStatisticsRequest() {
        _super.apply(this, arguments);
    }
    GetNonIndexableItemStatisticsRequest.prototype.Execute = function () { throw new Error("GetNonIndexableItemStatisticsRequest.ts - Execute : Not implemented."); };
    GetNonIndexableItemStatisticsRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("GetNonIndexableItemStatisticsRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    GetNonIndexableItemStatisticsRequest.prototype.GetResponseXmlElementName = function () { throw new Error("GetNonIndexableItemStatisticsRequest.ts - GetResponseXmlElementName : Not implemented."); };
    GetNonIndexableItemStatisticsRequest.prototype.GetXmlElementName = function () { throw new Error("GetNonIndexableItemStatisticsRequest.ts - GetXmlElementName : Not implemented."); };
    GetNonIndexableItemStatisticsRequest.prototype.ParseResponse = function (reader) { throw new Error("GetNonIndexableItemStatisticsRequest.ts - ParseResponse : Not implemented."); };
    GetNonIndexableItemStatisticsRequest.prototype.Validate = function () { throw new Error("GetNonIndexableItemStatisticsRequest.ts - Validate : Not implemented."); };
    GetNonIndexableItemStatisticsRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("GetNonIndexableItemStatisticsRequest.ts - WriteElementsToXml : Not implemented."); };
    return GetNonIndexableItemStatisticsRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetNonIndexableItemStatisticsRequest = GetNonIndexableItemStatisticsRequest;
