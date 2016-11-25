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
var UpdateUserConfigurationRequest = (function (_super) {
    __extends(UpdateUserConfigurationRequest, _super);
    function UpdateUserConfigurationRequest() {
        _super.apply(this, arguments);
    }
    UpdateUserConfigurationRequest.prototype.CreateServiceResponse = function (service, responseIndex) { throw new Error("UpdateUserConfigurationRequest.ts - CreateServiceResponse : Not implemented."); };
    UpdateUserConfigurationRequest.prototype.GetExpectedResponseMessageCount = function () { throw new Error("UpdateUserConfigurationRequest.ts - GetExpectedResponseMessageCount : Not implemented."); };
    UpdateUserConfigurationRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("UpdateUserConfigurationRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    UpdateUserConfigurationRequest.prototype.GetResponseMessageXmlElementName = function () { throw new Error("UpdateUserConfigurationRequest.ts - GetResponseMessageXmlElementName : Not implemented."); };
    UpdateUserConfigurationRequest.prototype.GetResponseXmlElementName = function () { throw new Error("UpdateUserConfigurationRequest.ts - GetResponseXmlElementName : Not implemented."); };
    UpdateUserConfigurationRequest.prototype.GetXmlElementName = function () { throw new Error("UpdateUserConfigurationRequest.ts - GetXmlElementName : Not implemented."); };
    UpdateUserConfigurationRequest.prototype.Validate = function () { throw new Error("UpdateUserConfigurationRequest.ts - Validate : Not implemented."); };
    UpdateUserConfigurationRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("UpdateUserConfigurationRequest.ts - WriteElementsToXml : Not implemented."); };
    return UpdateUserConfigurationRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.UpdateUserConfigurationRequest = UpdateUserConfigurationRequest;
