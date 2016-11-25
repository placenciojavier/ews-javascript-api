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
var GetNonIndexableItemDetailsRequest = (function (_super) {
    __extends(GetNonIndexableItemDetailsRequest, _super);
    function GetNonIndexableItemDetailsRequest() {
        _super.apply(this, arguments);
    }
    GetNonIndexableItemDetailsRequest.prototype.Execute = function () { throw new Error("GetNonIndexableItemDetailsRequest.ts - Execute : Not implemented."); };
    GetNonIndexableItemDetailsRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("GetNonIndexableItemDetailsRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    GetNonIndexableItemDetailsRequest.prototype.GetResponseXmlElementName = function () { throw new Error("GetNonIndexableItemDetailsRequest.ts - GetResponseXmlElementName : Not implemented."); };
    GetNonIndexableItemDetailsRequest.prototype.GetXmlElementName = function () { throw new Error("GetNonIndexableItemDetailsRequest.ts - GetXmlElementName : Not implemented."); };
    GetNonIndexableItemDetailsRequest.prototype.ParseResponse = function (reader) { throw new Error("GetNonIndexableItemDetailsRequest.ts - ParseResponse : Not implemented."); };
    GetNonIndexableItemDetailsRequest.prototype.Validate = function () { throw new Error("GetNonIndexableItemDetailsRequest.ts - Validate : Not implemented."); };
    GetNonIndexableItemDetailsRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("GetNonIndexableItemDetailsRequest.ts - WriteElementsToXml : Not implemented."); };
    return GetNonIndexableItemDetailsRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetNonIndexableItemDetailsRequest = GetNonIndexableItemDetailsRequest;
