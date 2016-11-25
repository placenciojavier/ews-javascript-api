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
var GetHoldOnMailboxesResponse = (function (_super) {
    __extends(GetHoldOnMailboxesResponse, _super);
    function GetHoldOnMailboxesResponse() {
        _super.apply(this, arguments);
    }
    GetHoldOnMailboxesResponse.prototype.ReadElementsFromJson = function (responseObject, service) { throw new Error("GetHoldOnMailboxesResponse.ts - ReadElementsFromJson : Not implemented."); };
    GetHoldOnMailboxesResponse.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("GetHoldOnMailboxesResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); };
    return GetHoldOnMailboxesResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetHoldOnMailboxesResponse = GetHoldOnMailboxesResponse;
