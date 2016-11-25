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
var GetSearchableMailboxesResponse = (function (_super) {
    __extends(GetSearchableMailboxesResponse, _super);
    function GetSearchableMailboxesResponse() {
        _super.apply(this, arguments);
    }
    GetSearchableMailboxesResponse.prototype.ReadElementsFromJson = function (responseObject, service) { throw new Error("GetSearchableMailboxesResponse.ts - ReadElementsFromJson : Not implemented."); };
    GetSearchableMailboxesResponse.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("GetSearchableMailboxesResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); };
    return GetSearchableMailboxesResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetSearchableMailboxesResponse = GetSearchableMailboxesResponse;
