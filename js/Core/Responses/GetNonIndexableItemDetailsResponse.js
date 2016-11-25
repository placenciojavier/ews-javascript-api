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
var GetNonIndexableItemDetailsResponse = (function (_super) {
    __extends(GetNonIndexableItemDetailsResponse, _super);
    function GetNonIndexableItemDetailsResponse() {
        _super.apply(this, arguments);
    }
    GetNonIndexableItemDetailsResponse.prototype.ReadElementsFromJson = function (responseObject, service) { throw new Error("GetNonIndexableItemDetailsResponse.ts - ReadElementsFromJson : Not implemented."); };
    GetNonIndexableItemDetailsResponse.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("GetNonIndexableItemDetailsResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); };
    return GetNonIndexableItemDetailsResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetNonIndexableItemDetailsResponse = GetNonIndexableItemDetailsResponse;
