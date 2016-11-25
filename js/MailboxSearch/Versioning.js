"use strict";
var DiscoverySchemaChanges = (function () {
    function DiscoverySchemaChanges() {
    }
    return DiscoverySchemaChanges;
}());
exports.DiscoverySchemaChanges = DiscoverySchemaChanges;
var DiscoverySchemaChanges;
(function (DiscoverySchemaChanges) {
    var SchemaChange = (function () {
        function SchemaChange(serverVersionOrserverBuild) {
            if (typeof serverVersionOrserverBuild === 'number')
                this.MinimumServerVersion = serverVersionOrserverBuild;
            if (typeof serverVersionOrserverBuild === 'string') {
            }
        }
        /// <summary>
        /// Determines whether the specified versionable is compatible.
        /// </summary>
        /// <param name="versionable">The versionable.</param>
        /// <returns><c>true</c> if the specified versionable is compatible; otherwise, <c>false</c>.</returns>
        SchemaChange.prototype.IsCompatible = function (versionable) {
            // note: when ServerVersion is not set(i.e., => 0), we ignore compatible check on the client side. It will eventually fail server side schema check if incompatible
            return versionable.ServerVersion == 0 || versionable.ServerVersion >= this.MinimumServerVersion;
        };
        return SchemaChange;
    }());
    DiscoverySchemaChanges.SchemaChange = SchemaChange;
})(DiscoverySchemaChanges = exports.DiscoverySchemaChanges || (exports.DiscoverySchemaChanges = {}));
