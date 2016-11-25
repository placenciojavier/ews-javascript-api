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
var CreateUserConfigurationRequest = (function (_super) {
    __extends(CreateUserConfigurationRequest, _super);
    function CreateUserConfigurationRequest() {
        _super.apply(this, arguments);
    }
    CreateUserConfigurationRequest.prototype.CreateServiceResponse = function (service, responseIndex) { throw new Error("CreateUserConfigurationRequest.ts - CreateServiceResponse : Not implemented."); };
    CreateUserConfigurationRequest.prototype.GetExpectedResponseMessageCount = function () { throw new Error("CreateUserConfigurationRequest.ts - GetExpectedResponseMessageCount : Not implemented."); };
    CreateUserConfigurationRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("CreateUserConfigurationRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    CreateUserConfigurationRequest.prototype.GetResponseMessageXmlElementName = function () { throw new Error("CreateUserConfigurationRequest.ts - GetResponseMessageXmlElementName : Not implemented."); };
    CreateUserConfigurationRequest.prototype.GetResponseXmlElementName = function () { throw new Error("CreateUserConfigurationRequest.ts - GetResponseXmlElementName : Not implemented."); };
    CreateUserConfigurationRequest.prototype.GetXmlElementName = function () { throw new Error("CreateUserConfigurationRequest.ts - GetXmlElementName : Not implemented."); };
    CreateUserConfigurationRequest.prototype.Validate = function () { throw new Error("CreateUserConfigurationRequest.ts - Validate : Not implemented."); };
    CreateUserConfigurationRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("CreateUserConfigurationRequest.ts - WriteElementsToXml : Not implemented."); };
    return CreateUserConfigurationRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.CreateUserConfigurationRequest = CreateUserConfigurationRequest;
