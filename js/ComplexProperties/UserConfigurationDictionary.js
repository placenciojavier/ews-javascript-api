"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComplexProperty_1 = require("./ComplexProperty");
var UserConfigurationDictionary = (function (_super) {
    __extends(UserConfigurationDictionary, _super);
    function UserConfigurationDictionary() {
        _super.apply(this, arguments);
    }
    UserConfigurationDictionary.prototype.Add = function (key, value) { throw new Error("UserConfigurationDictionary.ts - Add : Not implemented."); };
    UserConfigurationDictionary.prototype.Changed = function () { throw new Error("UserConfigurationDictionary.ts - Changed : Not implemented."); };
    UserConfigurationDictionary.prototype.Clear = function () { throw new Error("UserConfigurationDictionary.ts - Clear : Not implemented."); };
    UserConfigurationDictionary.prototype.ConstructObject = function (type, value /*System.Collections.Generic.List<string>*/, service) { throw new Error("UserConfigurationDictionary.ts - ConstructObject : Not implemented."); };
    UserConfigurationDictionary.prototype.ContainsKey = function (key) { throw new Error("UserConfigurationDictionary.ts - ContainsKey : Not implemented."); };
    UserConfigurationDictionary.prototype.CreateFromJsonCollection = function (jsonCollection, service) { throw new Error("UserConfigurationDictionary.ts - CreateFromJsonCollection : Not implemented."); };
    //GetDictionaryObject(jsonObject: JsonObject, service: ExchangeService): any { throw new Error("UserConfigurationDictionary.ts - GetDictionaryObject : Not implemented."); }
    UserConfigurationDictionary.prototype.GetDictionaryObject = function (reader) { throw new Error("UserConfigurationDictionary.ts - GetDictionaryObject : Not implemented."); };
    UserConfigurationDictionary.prototype.GetEnumerator = function () { throw new Error("UserConfigurationDictionary.ts - GetEnumerator : Not implemented."); };
    UserConfigurationDictionary.prototype.GetJsonObject = function (dictionaryObject, service) { throw new Error("UserConfigurationDictionary.ts - GetJsonObject : Not implemented."); };
    UserConfigurationDictionary.prototype.GetObjectType = function (reader) { throw new Error("UserConfigurationDictionary.ts - GetObjectType : Not implemented."); };
    //GetObjectType(type: string): UserConfigurationDictionaryObjectType { throw new Error("UserConfigurationDictionary.ts - GetObjectType : Not implemented."); }
    UserConfigurationDictionary.prototype.GetObjectValue = function (valueArray) { throw new Error("UserConfigurationDictionary.ts - GetObjectValue : Not implemented."); };
    //GetObjectValue(reader: EwsServiceXmlReader, type: UserConfigurationDictionaryObjectType): string[] /*System.Collections.Generic.List<string>*/ { throw new Error("UserConfigurationDictionary.ts - GetObjectValue : Not implemented."); }
    UserConfigurationDictionary.prototype.GetTypeCode = function (service, dictionaryObject, dictionaryObjectType, valueAsString) { throw new Error("UserConfigurationDictionary.ts - GetTypeCode : Not implemented."); };
    UserConfigurationDictionary.prototype.InternalToJson = function (service) { throw new Error("UserConfigurationDictionary.ts - InternalToJson : Not implemented."); };
    UserConfigurationDictionary.prototype.LoadEntry = function (reader) { throw new Error("UserConfigurationDictionary.ts - LoadEntry : Not implemented."); };
    UserConfigurationDictionary.prototype.LoadFromXmlJsObject = function (jsObject, service) { throw new Error("UserConfigurationDictionary.ts - LoadFromXmlJsObject : Not implemented."); };
    UserConfigurationDictionary.prototype.Remove = function (key) { throw new Error("UserConfigurationDictionary.ts - Remove : Not implemented."); };
    UserConfigurationDictionary.prototype.TryGetValue = function (key, value) { throw new Error("UserConfigurationDictionary.ts - TryGetValue : Not implemented."); };
    UserConfigurationDictionary.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("UserConfigurationDictionary.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    UserConfigurationDictionary.prototype.UpdateFromJsonCollection = function (jsonCollection, service) { throw new Error("UserConfigurationDictionary.ts - UpdateFromJsonCollection : Not implemented."); };
    UserConfigurationDictionary.prototype.ValidateArrayObject = function (dictionaryObjectAsArray /*System.Array*/) { throw new Error("UserConfigurationDictionary.ts - ValidateArrayObject : Not implemented."); };
    UserConfigurationDictionary.prototype.ValidateEntry = function (key, value) { throw new Error("UserConfigurationDictionary.ts - ValidateEntry : Not implemented."); };
    UserConfigurationDictionary.prototype.ValidateObject = function (dictionaryObject) { throw new Error("UserConfigurationDictionary.ts - ValidateObject : Not implemented."); };
    UserConfigurationDictionary.prototype.ValidateObjectType = function (type /*System.Type*/) { throw new Error("UserConfigurationDictionary.ts - ValidateObjectType : Not implemented."); };
    UserConfigurationDictionary.prototype.WriteElementsToXml = function (writer) { throw new Error("UserConfigurationDictionary.ts - WriteElementsToXml : Not implemented."); };
    UserConfigurationDictionary.prototype.WriteEntryTypeToXml = function (writer, dictionaryObjectType) { throw new Error("UserConfigurationDictionary.ts - WriteEntryTypeToXml : Not implemented."); };
    UserConfigurationDictionary.prototype.WriteEntryValueToXml = function (writer, value) { throw new Error("UserConfigurationDictionary.ts - WriteEntryValueToXml : Not implemented."); };
    UserConfigurationDictionary.prototype.WriteObjectToXml = function (writer, xmlElementName, dictionaryObject) { throw new Error("UserConfigurationDictionary.ts - WriteObjectToXml : Not implemented."); };
    UserConfigurationDictionary.prototype.WriteObjectValueToXml = function (writer, dictionaryObject) { throw new Error("UserConfigurationDictionary.ts - WriteObjectValueToXml : Not implemented."); };
    return UserConfigurationDictionary;
}(ComplexProperty_1.ComplexProperty));
exports.UserConfigurationDictionary = UserConfigurationDictionary;
//}
