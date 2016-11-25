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
var SetHoldOnMailboxesRequest = (function (_super) {
    __extends(SetHoldOnMailboxesRequest, _super);
    function SetHoldOnMailboxesRequest() {
        _super.apply(this, arguments);
    }
    SetHoldOnMailboxesRequest.prototype.Execute = function () { throw new Error("SetHoldOnMailboxesRequest.ts - Execute : Not implemented."); };
    SetHoldOnMailboxesRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("SetHoldOnMailboxesRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    SetHoldOnMailboxesRequest.prototype.GetResponseXmlElementName = function () { throw new Error("SetHoldOnMailboxesRequest.ts - GetResponseXmlElementName : Not implemented."); };
    SetHoldOnMailboxesRequest.prototype.GetXmlElementName = function () { throw new Error("SetHoldOnMailboxesRequest.ts - GetXmlElementName : Not implemented."); };
    SetHoldOnMailboxesRequest.prototype.ParseResponse = function (reader) { throw new Error("SetHoldOnMailboxesRequest.ts - ParseResponse : Not implemented."); };
    SetHoldOnMailboxesRequest.prototype.Validate = function () { throw new Error("SetHoldOnMailboxesRequest.ts - Validate : Not implemented."); };
    SetHoldOnMailboxesRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("SetHoldOnMailboxesRequest.ts - WriteElementsToXml : Not implemented."); };
    return SetHoldOnMailboxesRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.SetHoldOnMailboxesRequest = SetHoldOnMailboxesRequest;
