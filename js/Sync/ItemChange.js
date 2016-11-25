"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ItemId_1 = require("../ComplexProperties/ItemId");
var Change_1 = require("./Change");
/**
 * Represents a change on an item as returned by a synchronization operation.
 *
 * @sealed
 */
var ItemChange = (function (_super) {
    __extends(ItemChange, _super);
    /**
     * @internal Initializes a new instance of **ItemChange** class.
     */
    function ItemChange() {
        _super.call(this);
        this.isRead = false;
    }
    Object.defineProperty(ItemChange.prototype, "Item", {
        /**
         * Gets the item the change applies to. Item is null when ChangeType is equal to either ChangeType.Delete or ChangeType.ReadFlagChange. In those cases, use the ItemId property to retrieve the Id of the item that was deleted or whose IsRead property changed.
         */
        get: function () {
            return this.ServiceObject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemChange.prototype, "IsRead", {
        /**
         * Gets the IsRead property for the item that the change applies to. IsRead is only valid when ChangeType is equal to ChangeType.ReadFlagChange.
         */
        get: function () {
            return this.isRead;
        },
        set: function (value) {
            this.isRead = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemChange.prototype, "ItemId", {
        /**
         * Gets the Id of the item the change applies to.
         */
        get: function () {
            return this.Id;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates an ItemId instance.
     *
     * @return  {ServiceId}      A ItemId.
     */
    ItemChange.prototype.CreateId = function () {
        return new ItemId_1.ItemId();
    };
    return ItemChange;
}(Change_1.Change));
exports.ItemChange = ItemChange;
