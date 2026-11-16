var { addExtensionToList, ExtensionType } = require("../extension-support/extension-list.js");

//Gvbvdxx Mod (Original) Websocket extension:
addExtensionToList({
    id: "websocket",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/gm_websocket')
});

//Gvbvdxx Mod (Original) JavaScript/Dialogs extension:
addExtensionToList({
    id: "dialogs",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/gm_dialog')
});

//Gvbvdxx Mod (Original) Speech4PC extension:
addExtensionToList({
    id: "speech4pc",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/gm_speech4pc')
});

//Gvbvdxx Mod Website API extension:
addExtensionToList({
    id: "websites",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/gm_websites')
});

//Gvbvdxx Mod WebMIDI extension:
addExtensionToList({
    id: "webmidi",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/gm_webmidi')
});