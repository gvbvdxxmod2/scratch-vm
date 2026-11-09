
var { addExtensionToList, ExtensionType } = require("./extension-list.js");

//Scratch 3.0 pen extension:
addExtensionToList({
    id: "pen",
    type: ExtensionType.EXTENSION_BUILTIN_SYNC,
    importFunc: () => require('../extensions/scratch3_pen')
});

//Scratch 3.0 wedo2 extension:
addExtensionToList({
    id: "wedo2",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/scratch3_wedo2')
});

//Scratch 3.0 music extension, also with edits and modifications from Gvbvdxx Mod 2:
addExtensionToList({
    id: "music",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/scratch3_music')
});

//Scratch 3.0 microbit extension:
addExtensionToList({
    id: "microbit",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/scratch3_microbit')
});

//Scratch 3.0 text to speech extension:
addExtensionToList({
    id: "text2speech",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/scratch3_text2speech')
});

//Scratch 3.0 translation extension:
addExtensionToList({
    id: "translate",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/scratch3_translate')
});

//Scratch 3.0 video sensing extension:
addExtensionToList({
    id: "videoSensing",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/scratch3_video_sensing')
});

//Scratch 3.0 Lego Mindstorms EV3 extension:
addExtensionToList({
    id: "ev3",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/scratch3_ev3')
});

//Scratch 3.0 MakeyMakey board extension:
addExtensionToList({
    id: "makeymakey",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/scratch3_makeymakey')
});

//Scratch 3.0 Lego Boost extension:
addExtensionToList({
    id: "boost",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/scratch3_boost')
});

//Scratch 3.0 gdxfor extension:
addExtensionToList({
    id: "gdxfor",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/scratch3_gdx_for')
});

//Scratch 3.0 (After the High Contrast Blocks) face sensing extension:
addExtensionToList({
    id: "faceSensing",
    type: ExtensionType.EXTENSION_BUILTIN_ASYNC,
    importFunc: async () => await import('../extensions/scratch3_face_sensing')
});

//TurboWarp blocks:
addExtensionToList({
    id: "tw",
    type: ExtensionType.EXTENSION_BUILTIN_SYNC, //This isn't marked as TurboWarp because this doesn't use the TurboWarp custom extension API.
    importFunc: () => require('../extensions/tw')
});