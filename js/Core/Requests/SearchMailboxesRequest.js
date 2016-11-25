"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/**
 * ## @internal *Not Implemented*
 */
var SearchMailboxesRequest = (function (_super) {
    __extends(SearchMailboxesRequest, _super);
    function SearchMailboxesRequest() {
        _super.apply(this, arguments);
    }
    SearchMailboxesRequest.prototype.CreateServiceResponse = function (service, responseIndex) { throw new Error("SearchMailboxesRequest.ts - CreateServiceResponse : Not implemented."); };
    SearchMailboxesRequest.prototype.GetExpectedResponseMessageCount = function () { throw new Error("SearchMailboxesRequest.ts - GetExpectedResponseMessageCount : Not implemented."); };
    SearchMailboxesRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("SearchMailboxesRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    SearchMailboxesRequest.prototype.GetResponseMessageXmlElementName = function () { throw new Error("SearchMailboxesRequest.ts - GetResponseMessageXmlElementName : Not implemented."); };
    SearchMailboxesRequest.prototype.GetResponseXmlElementName = function () { throw new Error("SearchMailboxesRequest.ts - GetResponseXmlElementName : Not implemented."); };
    SearchMailboxesRequest.prototype.GetXmlElementName = function () { throw new Error("SearchMailboxesRequest.ts - GetXmlElementName : Not implemented."); };
    SearchMailboxesRequest.prototype.ParseResponse = function (reader) { throw new Error("SearchMailboxesRequest.ts - ParseResponse : Not implemented."); };
    //ParseResponse(jsonBody: JsonObject): any { throw new Error("SearchMailboxesRequest.ts - ParseResponse : Not implemented."); }
    SearchMailboxesRequest.prototype.Validate = function () { throw new Error("SearchMailboxesRequest.ts - Validate : Not implemented."); };
    SearchMailboxesRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("SearchMailboxesRequest.ts - WriteElementsToXml : Not implemented."); };
    return SearchMailboxesRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.SearchMailboxesRequest = SearchMailboxesRequest;
