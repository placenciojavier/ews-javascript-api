"use strict";
var ExchangeVersion_1 = require("../Enumerations/ExchangeVersion");
var UserConfiguration = (function () {
    function UserConfiguration() {
    }
    UserConfiguration.prototype.Bind = function (service, name, parentFolderId, properties) { throw new Error("UserConfiguration.ts - Bind : Not implemented."); };
    //Bind(service: ExchangeService, name: string, parentFolderName: WellKnownFolderName, properties: UserConfigurationProperties): UserConfiguration{ throw new Error("UserConfiguration.ts - Bind : Not implemented.");}
    UserConfiguration.prototype.Delete = function () { throw new Error("UserConfiguration.ts - Delete : Not implemented."); };
    UserConfiguration.prototype.GetBase64PropertyValue = function (bytes /*System.Byte[]*/) { throw new Error("UserConfiguration.ts - GetBase64PropertyValue : Not implemented."); };
    UserConfiguration.prototype.GetJsonUserConfigName = function (service) { throw new Error("UserConfiguration.ts - GetJsonUserConfigName : Not implemented."); };
    //GetJsonUserConfigName(service: ExchangeService, parentFolderId: FolderId, name: string): JsonObject{ throw new Error("UserConfiguration.ts - GetJsonUserConfigName : Not implemented.");}
    UserConfiguration.prototype.InitializeProperties = function (requestedProperties) { throw new Error("UserConfiguration.ts - InitializeProperties : Not implemented."); };
    UserConfiguration.prototype.IsPropertyUpdated = function (property) { throw new Error("UserConfiguration.ts - IsPropertyUpdated : Not implemented."); };
    UserConfiguration.prototype.Load = function (properties) { throw new Error("UserConfiguration.ts - Load : Not implemented."); };
    UserConfiguration.prototype.LoadFromJson = function (responseObject, service) { throw new Error("UserConfiguration.ts - LoadFromJson : Not implemented."); };
    UserConfiguration.prototype.LoadFromXml = function (reader) { throw new Error("UserConfiguration.ts - LoadFromXml : Not implemented."); };
    UserConfiguration.prototype.MarkPropertyForUpdate = function (property) { throw new Error("UserConfiguration.ts - MarkPropertyForUpdate : Not implemented."); };
    UserConfiguration.prototype.ResetIsDirty = function () { throw new Error("UserConfiguration.ts - ResetIsDirty : Not implemented."); };
    UserConfiguration.prototype.Save = function (name, parentFolderName) { throw new Error("UserConfiguration.ts - Save : Not implemented."); };
    //Save(name: string, parentFolderId: FolderId): any{ throw new Error("UserConfiguration.ts - Save : Not implemented.");}
    UserConfiguration.prototype.Update = function () { throw new Error("UserConfiguration.ts - Update : Not implemented."); };
    UserConfiguration.prototype.ValidatePropertyAccess = function (property) { throw new Error("UserConfiguration.ts - ValidatePropertyAccess : Not implemented."); };
    UserConfiguration.prototype.WriteBinaryDataToXml = function (writer) { throw new Error("UserConfiguration.ts - WriteBinaryDataToXml : Not implemented."); };
    UserConfiguration.prototype.WriteByteArrayToXml = function (writer, byteArray /*System.Byte[]*/, xmlElementName) { throw new Error("UserConfiguration.ts - WriteByteArrayToXml : Not implemented."); };
    UserConfiguration.prototype.WriteToXml = function (writer, xmlNamespace, xmlElementName) { throw new Error("UserConfiguration.ts - WriteToXml : Not implemented."); };
    UserConfiguration.prototype.WriteUserConfigurationNameToXml = function (writer, xmlNamespace, name, parentFolderId) { throw new Error("UserConfiguration.ts - WriteUserConfigurationNameToXml : Not implemented."); };
    UserConfiguration.prototype.WriteXmlDataToXml = function (writer) { throw new Error("UserConfiguration.ts - WriteXmlDataToXml : Not implemented."); };
    UserConfiguration.ObjectVersion = ExchangeVersion_1.ExchangeVersion.Exchange2010;
    UserConfiguration.PropertiesAvailableForNewObject = null; //UserConfigurationProperties.Dictionary, UserConfigurationProperties.XmlData, BinaryData;
    UserConfiguration.NoProperties = 0;
    return UserConfiguration;
}());
exports.UserConfiguration = UserConfiguration;
