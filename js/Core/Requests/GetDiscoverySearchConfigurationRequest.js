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
var GetDiscoverySearchConfigurationRequest = (function (_super) {
    __extends(GetDiscoverySearchConfigurationRequest, _super);
    function GetDiscoverySearchConfigurationRequest() {
        _super.apply(this, arguments);
    }
    GetDiscoverySearchConfigurationRequest.prototype.Execute = function () { throw new Error("GetDiscoverySearchConfigurationRequest.ts - Execute : Not implemented."); };
    GetDiscoverySearchConfigurationRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("GetDiscoverySearchConfigurationRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    GetDiscoverySearchConfigurationRequest.prototype.GetResponseXmlElementName = function () { throw new Error("GetDiscoverySearchConfigurationRequest.ts - GetResponseXmlElementName : Not implemented."); };
    GetDiscoverySearchConfigurationRequest.prototype.GetXmlElementName = function () { throw new Error("GetDiscoverySearchConfigurationRequest.ts - GetXmlElementName : Not implemented."); };
    GetDiscoverySearchConfigurationRequest.prototype.ParseResponse = function (reader) { throw new Error("GetDiscoverySearchConfigurationRequest.ts - ParseResponse : Not implemented."); };
    GetDiscoverySearchConfigurationRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("GetDiscoverySearchConfigurationRequest.ts - WriteElementsToXml : Not implemented."); };
    return GetDiscoverySearchConfigurationRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetDiscoverySearchConfigurationRequest = GetDiscoverySearchConfigurationRequest;
