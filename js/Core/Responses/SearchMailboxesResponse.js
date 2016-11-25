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
var SearchMailboxesResponse = (function (_super) {
    __extends(SearchMailboxesResponse, _super);
    function SearchMailboxesResponse() {
        _super.apply(this, arguments);
    }
    SearchMailboxesResponse.prototype.ReadElementsFromJson = function (responseObject, service) { throw new Error("SearchMailboxesResponse.ts - ReadElementsFromJson : Not implemented."); };
    SearchMailboxesResponse.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("SearchMailboxesResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); };
    return SearchMailboxesResponse;
}(ServiceResponse_1.ServiceResponse));
exports.SearchMailboxesResponse = SearchMailboxesResponse;
