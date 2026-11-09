
class ExtensionType {
    //Syncronously loaded extensions, for extensions that need to be ready as soon as possible.
    static get EXTENSION_BUILTIN_SYNC() {
        return "EXTENSION_BUILTIN_SYNC";
    }

    //Asyncronusly loaded extensions, for extensions that can load later on.
    static get EXTENSION_BUILTIN_ASYNC() {
        return "EXTENSION_BUILTIN_ASYNC";
    }

    //Asyncronusly loaded extensions, specifically for TurboWarp's extension library.
    static get EXTENSION_TW_ASYNC() {
        return "EXTENSION_TW_ASYNC";
    }

    //Asyncronusly loaded extensions, specifically for an extension written with TurboWarp's Scratch extension API.
    static get EXTENSION_TW_API_ASYNC() {
        return "EXTENSION_TW_API_ASYNC";
    }

    //Asyncronusly loaded extensions, specifically for extensions that are imported elsewhere.
    static get EXTENSION_CUSTOM_ASYNC() {
        return "EXTENSION_CUSTOM_ASYNC";
    }
}

var extensions = {};

class Extension {
    constructor (opts) {
        this.type = opts.type;
        this.url = opts.url;
        this.id = opts.id;
        this.importFunc = opts.importFunc;
        this.info = Extension.getTypeInfo(opts);
        this.asyncImported = false;
        this.asyncResult = null;
        this._asyncPromise = null;
    }

    static getTypeInfo(options) {
        var isSync = false;
        var isTw = false;
        var isTwAPI = false;
        var isBuiltin = false;
        switch (options.type) {
            case ExtensionType.EXTENSION_BUILTIN_ASYNC: {
                isSync = false;
                isBuiltin = true;
                isTw = false;
                isTwAPI = false;
                break;
            }
            case ExtensionType.EXTENSION_TW_ASYNC: {
                isSync = false;
                isBuiltin = false;
                isTw = true;
                isTwAPI = true;
                break;
            }
            case ExtensionType.EXTENSION_TW_API_ASYNC: {
                isSync = false;
                isBuiltin = false;
                isTw = true;
                isTwAPI = true;
                break;
            }
            case ExtensionType.EXTENSION_CUSTOM_ASYNC: {
                isSync = false;
                isBuiltin = false;
                isTw = false;
                isTwAPI = true;
                break;
            }
            case ExtensionType.EXTENSION_BUILTIN_SYNC: {
                isSync = true;
                isBuiltin = true;
                isTw = false;
                isTwAPI = false;
                break;
            }
            default: {
                return null;
            }
        }

        return {
            isSync,
            isAsync: !isSync,
            isBuiltin,
            isTw,
            isTwAPI
        };
    }

    usesTwAPI() {
        var info = this.info;
        if (info.isTwAPI || info.isTw) {
            return true;
        }
        return false;
    }

    isTWLib() {
        var info = this.info;
        if (info.isTw) {
            return true;
        }
        return false;
    }

    async _doAsyncImport() {
        var info = this.info;
        if (info.isSync) {
            return this.doSyncImport();
        }

        var result = null;
        if (this.asyncImported) {
            result = this.asyncResult;
        } else {
            result = await this.importFunc();
            this.asyncImported = true;
            this.asyncResult = result;
        }
        return result;
    }

    doAsyncImport() {
        //Safety check so that we aren't trying to load many times at once.
        var _this = this;
        if (this._asyncPromise) {
            return this._asyncPromise;
        }
        var promise = this._doAsyncImport();
        this._asyncPromise = promise;
        promise.then(() => _this._asyncPromise = null);
        return promise;
    }

    doSyncImport() {
        var info = this.info;
        if (info.isAsync || info.isTw || info.isTwAPI) {
            return null;
        }

        var result = this.importFunc();
        return result;
    }
}

function addExtensionToList(providedOptions) {
    var options = {
        type: ExtensionType.EXTENSION_BUILTIN_SYNC,
        url: "", //If the extension is from TurboWarp, then GM2 will just load from its own TurboWarp extensions database.
    };
    Object.assign(options, providedOptions);

    if (typeof options.id !== "string") {
        throw new Error("Attempted to add extension to list that is missing an ID in its options.");
    }
    if (typeof options.importFunc !== "function") {
        throw new Error("Attempted to add extension to list that is missing an import function in its options.");
    }

    var typeInfo = Extension.getTypeInfo(options);
    if (!typeInfo) {
        throw new Error(`Attempted to add extension to list with unknown type "${options.type}".`);
    }

    extensions[options.id] = new Extension(options);
}

function hasExtension(id) {
    if (extensions[id]) {
        return true;
    }
    return false;
}

function getExtensions() {
    return Object.keys(extensions).map(getExtension);
}

function getExtension(id) {
    var extension = extensions[id];
    if (extension) {
        return extension;
    }
    return null;
}

function findTWExtension(twURL) {
    var extensions = getExtensions();
    var twLibExtensions = extensions.filter((extension) => extension.isTWLib());
    var compareURL = twURL.trim().toLowerCase();

    for (var extension of twLibExtensions) {
        var extURL = extension.url.trim().toLowerCase();
        
        if (extURL == compareURL) {
            return extension;
        }
    }

    return null;
}

module.exports = {
    extensions,
    ExtensionType,
    hasExtension,
    getExtensions,
    addExtensionToList,
    getExtension,
    findTWExtension
};