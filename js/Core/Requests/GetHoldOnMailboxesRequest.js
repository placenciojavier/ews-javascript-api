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
var GetHoldOnMailboxesRequest = (function (_super) {
    __extends(GetHoldOnMailboxesRequest, _super);
    function GetHoldOnMailboxesRequest() {
        _super.apply(this, arguments);
    }
    GetHoldOnMailboxesRequest.prototype.Execute = function () { throw new Error("GetHoldOnMailboxesRequest.ts - Execute : Not implemented."); };
    GetHoldOnMailboxesRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("GetHoldOnMailboxesRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    GetHoldOnMailboxesRequest.prototype.GetResponseXmlElementName = function () { throw new Error("GetHoldOnMailboxesRequest.ts - GetResponseXmlElementName : Not implemented."); };
    GetHoldOnMailboxesRequest.prototype.GetXmlElementName = function () { throw new Error("GetHoldOnMailboxesRequest.ts - GetXmlElementName : Not implemented."); };
    GetHoldOnMailboxesRequest.prototype.ParseResponse = function (reader) { throw new Error("GetHoldOnMailboxesRequest.ts - ParseResponse : Not implemented."); };
    GetHoldOnMailboxesRequest.prototype.Validate = function () { throw new Error("GetHoldOnMailboxesRequest.ts - Validate : Not implemented."); };
    GetHoldOnMailboxesRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("GetHoldOnMailboxesRequest.ts - WriteElementsToXml : Not implemented."); };
    return GetHoldOnMailboxesRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetHoldOnMailboxesRequest = GetHoldOnMailboxesRequest;
