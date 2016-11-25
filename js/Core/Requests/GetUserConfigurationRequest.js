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
var GetUserConfigurationRequest = (function (_super) {
    __extends(GetUserConfigurationRequest, _super);
    function GetUserConfigurationRequest() {
        _super.apply(this, arguments);
    }
    GetUserConfigurationRequest.prototype.CreateServiceResponse = function (service, responseIndex) { throw new Error("GetUserConfigurationRequest.ts - CreateServiceResponse : Not implemented."); };
    GetUserConfigurationRequest.prototype.GetExpectedResponseMessageCount = function () { throw new Error("GetUserConfigurationRequest.ts - GetExpectedResponseMessageCount : Not implemented."); };
    GetUserConfigurationRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("GetUserConfigurationRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    GetUserConfigurationRequest.prototype.GetResponseMessageXmlElementName = function () { throw new Error("GetUserConfigurationRequest.ts - GetResponseMessageXmlElementName : Not implemented."); };
    GetUserConfigurationRequest.prototype.GetResponseXmlElementName = function () { throw new Error("GetUserConfigurationRequest.ts - GetResponseXmlElementName : Not implemented."); };
    GetUserConfigurationRequest.prototype.GetXmlElementName = function () { throw new Error("GetUserConfigurationRequest.ts - GetXmlElementName : Not implemented."); };
    GetUserConfigurationRequest.prototype.Validate = function () { throw new Error("GetUserConfigurationRequest.ts - Validate : Not implemented."); };
    GetUserConfigurationRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("GetUserConfigurationRequest.ts - WriteElementsToXml : Not implemented."); };
    GetUserConfigurationRequest.EnumDelimiter = ",";
    return GetUserConfigurationRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.GetUserConfigurationRequest = GetUserConfigurationRequest;
