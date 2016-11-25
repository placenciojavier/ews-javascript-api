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
var GetUserConfigurationResponse = (function (_super) {
    __extends(GetUserConfigurationResponse, _super);
    function GetUserConfigurationResponse() {
        _super.apply(this, arguments);
    }
    GetUserConfigurationResponse.prototype.ReadElementsFromJson = function (responseObject, service) { throw new Error("GetUserConfigurationResponse.ts - ReadElementsFromJson : Not implemented."); };
    GetUserConfigurationResponse.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("GetUserConfigurationResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); };
    return GetUserConfigurationResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetUserConfigurationResponse = GetUserConfigurationResponse;
