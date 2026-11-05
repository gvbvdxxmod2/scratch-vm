
class ExtensionImportType {
    //Syncronously loaded extensions, for extensions that need to be ready as soon as possible.
    static get EXTENSION_SYNC() {
        return "EXTENSION_SYNC";
    }

    //Asyncronusly loaded extensions, for extensions that can load later on.
    static get EXTENSION_ASYNC() {
        return "EXTENSION_ASYNC";
    }
}

class ExtensionAPIType {
    //For extensions that use the TurboWarp style API.
    static get EXTENSION_API() {
        return "EXTENSION_API";
    }

    //For extensions that use the standard extensions folder, usually the core ones inside "../extensions/" directory.
    static get EXTENSION_CORE() {
        return "EXTENSION_CORE";
    }
}

var extensions = {};

function addExtensionToList(providedOptions) {
    var options = {
        apiType: ExtensionAPIType.EXTENSION_CORE,
        importType: ExtensionImportType.EXTENSION_SYNC,
        isExternal: false, //Extension that was imported from the GUI custom extension manager.
        isTurboWarp: false, //Extension that was imported from the turbowarp extension library.
    };
    Object.assign(options, providedOptions);

    if (typeof options.id !== "string") {
        throw new Error("Attempted to add extension to list that is missing an ID in its options.");
    }
    if (typeof options.importFunc !== "function") {
        throw new Error("Attempted to add extension to list that is missing an import function in its options.");
    }

    extensions[options.id] = {
        ...options,
    };
}

function hasExtension(id) {
    if (extensions[id]) {
        return true;
    }
    return false;
}

function currentExtensions(id) {
    return Object.keys(extensions);
}

module.exports = {
    extensions,
    ExtensionAPIType,
    ExtensionImportType,
    hasExtension,
    currentExtensions,
    addExtensionToList
};