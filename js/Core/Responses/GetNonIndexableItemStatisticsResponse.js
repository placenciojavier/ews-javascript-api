"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * ## *Not Implemented*
 */
var GetNonIndexableItemStatisticsResponse = (function (_super) {
    __extends(GetNonIndexableItemStatisticsResponse, _super);
    function GetNonIndexableItemStatisticsResponse() {
        _super.apply(this, arguments);
    }
    GetNonIndexableItemStatisticsResponse.prototype.ReadElementsFromJson = function (responseObject, service) { throw new Error("GetNonIndexableItemStatisticsResponse.ts - ReadElementsFromJson : Not implemented."); };
    GetNonIndexableItemStatisticsResponse.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("GetNonIndexableItemStatisticsResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); };
    return GetNonIndexableItemStatisticsResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetNonIndexableItemStatisticsResponse = GetNonIndexableItemStatisticsResponse;
