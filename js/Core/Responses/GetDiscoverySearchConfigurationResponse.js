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
var GetDiscoverySearchConfigurationResponse = (function (_super) {
    __extends(GetDiscoverySearchConfigurationResponse, _super);
    function GetDiscoverySearchConfigurationResponse() {
        _super.apply(this, arguments);
    }
    GetDiscoverySearchConfigurationResponse.prototype.ReadElementsFromJson = function (responseObject, service) { throw new Error("GetDiscoverySearchConfigurationResponse.ts - ReadElementsFromJson : Not implemented."); };
    GetDiscoverySearchConfigurationResponse.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("GetDiscoverySearchConfigurationResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); };
    return GetDiscoverySearchConfigurationResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetDiscoverySearchConfigurationResponse = GetDiscoverySearchConfigurationResponse;
