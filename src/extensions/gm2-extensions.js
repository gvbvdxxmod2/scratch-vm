
var { addExtensionToList, ExtensionType } = require("../extension-support/extension-list.js");

//Gvbvdxx Mod (Original) Websocket extension:
addExtensionToList({
    id: "websocket",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/gm_websocket')
});

//Gvbvdxx Mod 2 Sprite Canvases extension:
addExtensionToList({
    id: "spritecanvas",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/gm2_spritecanvas')
});

//Gvbvdxx Mod 2 NES Emulation extension:
addExtensionToList({
    id: "nesemulator",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/gm2_nesemulator')
});

//Gvbvdxx Mod 2 HTML5 Elements extension:
addExtensionToList({
    id: "html5",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/gm2_html5_elements')
});

//Gvbvdxx Mod (Original) Gamepads (with updated labels) extension:
addExtensionToList({
    id: "gamepad",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/gm2_gamepad')
});