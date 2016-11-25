"use strict";
//    public enum ItemIndexError
//    {
//        /// <summary>
//        /// None
//        /// </summary>
//        None,
//        /// <summary>
//        /// Generic error
//        /// </summary>
//        GenericError,
//        /// <summary>
//        /// Timeout
//        /// </summary>
//        Timeout,
//        /// <summary>
//        /// Stale event
//        /// </summary>
//        StaleEvent,
//        /// <summary>
//        /// Mailbox offline
//        /// </summary>
//        MailboxOffline,
//        /// <summary>
//        /// Too many attachments to index
//        /// </summary>
//        AttachmentLimitReached,
//        /// <summary>
//        /// Data is truncated
//        /// </summary>
//        MarsWriterTruncation,
//}
var NonIndexableItem = (function () {
    function NonIndexableItem() {
    }
    NonIndexableItem.prototype.LoadFromXml = function (reader) { throw new Error("NonIndexableItem.ts - LoadFromXml : Not implemented."); };
    return NonIndexableItem;
}());
exports.NonIndexableItem = NonIndexableItem;
//}
