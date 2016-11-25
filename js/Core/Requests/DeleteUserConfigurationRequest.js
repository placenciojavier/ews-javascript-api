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
var DeleteUserConfigurationRequest = (function (_super) {
    __extends(DeleteUserConfigurationRequest, _super);
    function DeleteUserConfigurationRequest() {
        _super.apply(this, arguments);
    }
    DeleteUserConfigurationRequest.prototype.CreateServiceResponse = function (service, responseIndex) { throw new Error("DeleteUserConfigurationRequest.ts - CreateServiceResponse : Not implemented."); };
    DeleteUserConfigurationRequest.prototype.GetExpectedResponseMessageCount = function () { throw new Error("DeleteUserConfigurationRequest.ts - GetExpectedResponseMessageCount : Not implemented."); };
    DeleteUserConfigurationRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("DeleteUserConfigurationRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    DeleteUserConfigurationRequest.prototype.GetResponseMessageXmlElementName = function () { throw new Error("DeleteUserConfigurationRequest.ts - GetResponseMessageXmlElementName : Not implemented."); };
    DeleteUserConfigurationRequest.prototype.GetResponseXmlElementName = function () { throw new Error("DeleteUserConfigurationRequest.ts - GetResponseXmlElementName : Not implemented."); };
    DeleteUserConfigurationRequest.prototype.GetXmlElementName = function () { throw new Error("DeleteUserConfigurationRequest.ts - GetXmlElementName : Not implemented."); };
    DeleteUserConfigurationRequest.prototype.Validate = function () { throw new Error("DeleteUserConfigurationRequest.ts - Validate : Not implemented."); };
    DeleteUserConfigurationRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("DeleteUserConfigurationRequest.ts - WriteElementsToXml : Not implemented."); };
    return DeleteUserConfigurationRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.DeleteUserConfigurationRequest = DeleteUserConfigurationRequest;
