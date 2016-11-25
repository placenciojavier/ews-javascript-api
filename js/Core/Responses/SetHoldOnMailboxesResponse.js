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
var SetHoldOnMailboxesResponse = (function (_super) {
    __extends(SetHoldOnMailboxesResponse, _super);
    function SetHoldOnMailboxesResponse() {
        _super.apply(this, arguments);
    }
    SetHoldOnMailboxesResponse.prototype.ReadElementsFromJson = function (responseObject, service) { throw new Error("SetHoldOnMailboxesResponse.ts - ReadElementsFromJson : Not implemented."); };
    SetHoldOnMailboxesResponse.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("SetHoldOnMailboxesResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); };
    return SetHoldOnMailboxesResponse;
}(ServiceResponse_1.ServiceResponse));
exports.SetHoldOnMailboxesResponse = SetHoldOnMailboxesResponse;
