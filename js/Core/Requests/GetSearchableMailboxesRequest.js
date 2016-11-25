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
var GetSearchableMailboxesRequest = (function (_super) {
    __extends(GetSearchableMailboxesRequest, _super);
    function GetSearchableMailboxesRequest() {
        _super.apply(this, arguments);
    }
    GetSearchableMailboxesRequest.prototype.Execute = function () { throw new Error("GetSearchableMailboxesRequest.ts - Execute : Not implemented."); };
    GetSearchableMailboxesRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("GetSearchableMailboxesRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    GetSearchableMailboxesRequest.prototype.GetResponseXmlElementName = function () { throw new Error("GetSearchableMailboxesRequest.ts - GetResponseXmlElementName : Not implemented."); };
    GetSearchableMailboxesRequest.prototype.GetXmlElementName = function () { throw new Error("GetSearchableMailboxesRequest.ts - GetXmlElementName : Not implemented."); };
    GetSearchableMailboxesRequest.prototype.ParseResponse = function (reader) { throw new Error("GetSearchableMailboxesRequest.ts - ParseResponse : Not implemented."); };
    GetSearchableMailboxesRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("GetSearchableMailboxesRequest.ts - WriteElementsToXml : Not implemented."); };
    return GetSearchableMailboxesRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetSearchableMailboxesRequest = GetSearchableMailboxesRequest;
