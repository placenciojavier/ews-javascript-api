"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Schemas_1 = require("./Schemas");
var ServiceObjectSchema_1 = require("./ServiceObjectSchema");
/**
 * Represents CalendarResponseObject schema definition.
 */
var CalendarResponseObjectSchema = (function (_super) {
    __extends(CalendarResponseObjectSchema, _super);
    function CalendarResponseObjectSchema() {
        _super.apply(this, arguments);
    }
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    CalendarResponseObjectSchema.prototype.RegisterProperties = function () {
        _super.prototype.RegisterProperties.call(this);
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas_1.Schemas.ItemSchema.ItemClass);
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas_1.Schemas.ItemSchema.Sensitivity);
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas_1.Schemas.ItemSchema.Body);
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas_1.Schemas.ItemSchema.Attachments);
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas_1.Schemas.ItemSchema.InternetMessageHeaders);
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas_1.Schemas.EmailMessageSchema.Sender);
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas_1.Schemas.EmailMessageSchema.ToRecipients);
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas_1.Schemas.EmailMessageSchema.CcRecipients);
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas_1.Schemas.EmailMessageSchema.BccRecipients);
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas_1.Schemas.EmailMessageSchema.IsReadReceiptRequested);
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas_1.Schemas.EmailMessageSchema.IsDeliveryReceiptRequested);
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas_1.Schemas.ResponseObjectSchema.ReferenceItemId);
    };
    /**
     * @internal Instance of **CalendarResponseObjectSchema**
     */
    CalendarResponseObjectSchema.Instance = new CalendarResponseObjectSchema();
    return CalendarResponseObjectSchema;
}(ServiceObjectSchema_1.ServiceObjectSchema));
exports.CalendarResponseObjectSchema = CalendarResponseObjectSchema;
