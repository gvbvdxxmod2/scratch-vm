require("./gm1-extensions.js");

var { addExtensionToList, ExtensionType } = require("../extension-support/extension-list.js");

//Gvbvdxx Mod 2 Sprite Canvases extension:
addExtensionToList({
    id: "spritecanvas",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/gm2_spritecanvas')
});

//Gvbvdxx Mod 2 Sound Analyser extension:
addExtensionToList({
    id: "projectsound",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/gm2_projectsound')
});

//Gvbvdxx Mod 2 Roku Controls extension:
addExtensionToList({
    id: "roku",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/gm2_roku')
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

//Gvbvdxx Mod 2 Gamepads (compatible with GM1) extension:
addExtensionToList({
    id: "gamepad",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/gm2_gamepad')
});

//Gvbvdxx Mod 2 Audio Context extension:
addExtensionToList({
    id: "audiocontext",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/gm2_audiocontext')
});

//Gvbvdxx Mod 2 (But compatibile with GM1) Beepbox Synth extension:
addExtensionToList({
    id: "beepboxsynth",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/gm2_beepbox_synth')
});

//Gvbvdxx Mod 2 (NEW!) Live Connect extension:
addExtensionToList({
    id: "gm2liveconnect",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/gm2_gm2liveconnect')
});