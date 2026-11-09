var { addExtensionToList, ExtensionType } = require("../extension-support/extension-list.js");

////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/lab/text.js
  Name: Animated Text
  Description: An easy way to display and animate text. Compatible with Scratch Lab's Animated Text experiment.
  Authors: LilyMakesThings, GarboMuffin
*/
addExtensionToList({
  id: "text",
  url: "https://extensions.turbowarp.org/lab/text.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./0.text.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/lab/face-sensing.js
  Name: Face Sensing
  Description: Sense faces with the camera.
  Authors: GarboMuffin
*/
addExtensionToList({
  id: "faceSensing",
  url: "https://extensions.turbowarp.org/lab/face-sensing.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./1.faceSensing.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/lab/video-sprites.js
  Name: Video Sprites
  Description: Replace sprites with a live video feed. Compatible with Scratch Lab's Video Sprites experiment.
  Authors: Staevski_G
*/
addExtensionToList({
  id: "videoSprites",
  url: "https://extensions.turbowarp.org/lab/video-sprites.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./2.videoSprites.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/stretch.js
  Name: Stretch
  Description: Stretch sprites horizontally or vertically.
  Authors: GarboMuffin, TheStarWorld
*/
addExtensionToList({
  id: "stretch",
  url: "https://extensions.turbowarp.org/stretch.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./3.stretch.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/gamepad.js
  Name: Gamepad
  Description: Directly access gamepads instead of just mapping buttons to keys.
  Authors: GarboMuffin
*/
addExtensionToList({
  id: "Gamepad",
  url: "https://extensions.turbowarp.org/gamepad.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./4.Gamepad.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/box2d.js
  Name: Box2D Physics
  Description: Two dimensional physics.
  Authors: 
*/
addExtensionToList({
  id: "griffpatch",
  url: "https://extensions.turbowarp.org/box2d.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./5.griffpatch.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/files.js
  Name: Files
  Description: Read and download files.
  Authors: GarboMuffin
*/
addExtensionToList({
  id: "files",
  url: "https://extensions.turbowarp.org/files.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./6.files.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/pointerlock.js
  Name: Pointerlock
  Description: Adds blocks for mouse locking. Mouse x & y blocks will report the change since the previous frame while the pointer is locked. Replaces the pointerlock experiment.
  Authors: GarboMuffin
*/
addExtensionToList({
  id: "pointerlock",
  url: "https://extensions.turbowarp.org/pointerlock.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./7.pointerlock.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/cursor.js
  Name: Mouse Cursor
  Description: Use custom cursors or hide the cursor. Also allows replacing the cursor with any costume image.
  Authors: Samq64, GarboMuffin
*/
addExtensionToList({
  id: "MouseCursor",
  url: "https://extensions.turbowarp.org/cursor.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./8.MouseCursor.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/runtime-options.js
  Name: Runtime Options
  Description: Get and modify turbo mode, framerate, interpolation, clone limit, stage size, and more.
  Authors: GarboMuffin
*/
addExtensionToList({
  id: "runtimeoptions",
  url: "https://extensions.turbowarp.org/runtime-options.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./9.runtimeoptions.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/fetch.js
  Name: Fetch
  Description: Make requests to the broader internet.
  Authors: GarboMuffin
*/
addExtensionToList({
  id: "fetch",
  url: "https://extensions.turbowarp.org/fetch.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./10.fetch.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/text.js
  Name: Text
  Description: Manipulate characters and text.
  Authors: CST1229, BludIsAnLemon, Man-o-Valor
*/
addExtensionToList({
  id: "strings",
  url: "https://extensions.turbowarp.org/text.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./11.strings.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/local-storage.js
  Name: Local Storage
  Description: Store data persistently. Like cookies, but better.
  Authors: infernostars, GarboMuffin
*/
addExtensionToList({
  id: "localstorage",
  url: "https://extensions.turbowarp.org/local-storage.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./12.localstorage.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/true-fantom/base.js
  Name: Base
  Description: Convert numbers between bases.
  Authors: TrueFantom
*/
addExtensionToList({
  id: "truefantombase",
  url: "https://extensions.turbowarp.org/true-fantom/base.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./13.truefantombase.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/bitwise.js
  Name: Bitwise
  Description: Blocks that operate on the binary representation of numbers in computers.
  Authors: TrueFantom
*/
addExtensionToList({
  id: "Bitwise",
  url: "https://extensions.turbowarp.org/bitwise.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./14.Bitwise.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/Skyhigh173/bigint.js
  Name: BigInt
  Description: Math blocks that work on infinitely large integers (no decimals).
  Authors: Skyhigh173
*/
addExtensionToList({
  id: "skyhigh173BigInt",
  url: "https://extensions.turbowarp.org/Skyhigh173/bigint.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./15.skyhigh173BigInt.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/utilities.js
  Name: Utilities
  Description: A bunch of interesting blocks.
  Authors: 
*/
addExtensionToList({
  id: "utilities",
  url: "https://extensions.turbowarp.org/utilities.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./16.utilities.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/Lily/Video.js
  Name: Video
  Description: Play videos from URLs.
  Authors: LilyMakesThings, SharkPool, Fath11
*/
addExtensionToList({
  id: "lmsVideo",
  url: "https://extensions.turbowarp.org/Lily/Video.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./17.lmsVideo.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/iframe.js
  Name: Iframe
  Description: Display webpages or HTML over the stage.
  Authors: GarboMuffin
*/
addExtensionToList({
  id: "iframe",
  url: "https://extensions.turbowarp.org/iframe.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./18.iframe.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/Clay/htmlEncode.js
  Name: HTML Encode
  Description: Escape untrusted text to safely include in HTML.
  Authors: clay-rip
*/
addExtensionToList({
  id: "clayhtmlencode",
  url: "https://extensions.turbowarp.org/Clay/htmlEncode.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./19.clayhtmlencode.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/Xeltalliv/clippingblending.js
  Name: Clipping & Blending
  Description: Clipping outside of a specified rectangular area and different color blending modes.
  Authors: Vadik1
*/
addExtensionToList({
  id: "xeltallivclipblend",
  url: "https://extensions.turbowarp.org/Xeltalliv/clippingblending.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./20.xeltallivclipblend.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/clipboard.js
  Name: Clipboard
  Description: Read and write from the system clipboard.
  Authors: tomyo-code, AdamMady, NamelessCat
*/
addExtensionToList({
  id: "clipboard",
  url: "https://extensions.turbowarp.org/clipboard.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./21.clipboard.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/obviousAlexC/penPlus.js
  Name: Pen Plus V7
  Description: Advanced rendering capabilities.
  Authors: ObviousAlexC, Pen-Group
*/
addExtensionToList({
  id: "penP",
  url: "https://extensions.turbowarp.org/obviousAlexC/penPlus.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./22.penP.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/penplus.js
  Name: Pen Plus V5 (Old)
  Description: Replaced by Pen Plus V7.
  Authors: ObviousAlexC
*/
addExtensionToList({
  id: "betterpen",
  url: "https://extensions.turbowarp.org/penplus.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./23.betterpen.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/Xeltalliv/simple3D.js
  Name: Simple 3D
  Description: Make GPU accelerated 3D projects easily.
  Authors: Vadik1
*/
addExtensionToList({
  id: "xeltallivSimple3D",
  url: "https://extensions.turbowarp.org/Xeltalliv/simple3D.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./24.xeltallivSimple3D.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/Lily/Skins.js
  Name: Skins
  Description: Have your sprites render as other images or costumes.
  Authors: LilyMakesThings
*/
addExtensionToList({
  id: "lmsSkins",
  url: "https://extensions.turbowarp.org/Lily/Skins.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./25.lmsSkins.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/obviousAlexC/SensingPlus.js
  Name: Sensing Plus
  Description: An extension to the sensing category.
  Authors: ObviousAlexC
*/
addExtensionToList({
  id: "obviousalexsensing",
  url: "https://extensions.turbowarp.org/obviousAlexC/SensingPlus.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./26.obviousalexsensing.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/CubesterYT/KeySimulation.js
  Name: Key Simulation
  Description: Simulate key presses and mouse clicks.
  Authors: CubesterYT
*/
addExtensionToList({
  id: "cubesterKeySimulation",
  url: "https://extensions.turbowarp.org/CubesterYT/KeySimulation.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./27.cubesterKeySimulation.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/Lily/ClonesPlus.js
  Name: Clones Plus
  Description: Expansion of Scratch's clone features.
  Authors: LilyMakesThings
*/
addExtensionToList({
  id: "lmsclonesplus",
  url: "https://extensions.turbowarp.org/Lily/ClonesPlus.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./28.lmsclonesplus.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/Lily/LooksPlus.js
  Name: Looks Plus
  Description: Expands upon the looks category, allowing you to show/hide, get costume data and edit SVG skins on sprites.
  Authors: LilyMakesThings
*/
addExtensionToList({
  id: "lmsLooksPlus",
  url: "https://extensions.turbowarp.org/Lily/LooksPlus.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./29.lmsLooksPlus.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/Lily/MoreEvents.js
  Name: More Events
  Description: Start your scripts in new ways.
  Authors: LilyMakesThings
*/
addExtensionToList({
  id: "lmsMoreEvents",
  url: "https://extensions.turbowarp.org/Lily/MoreEvents.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./30.lmsMoreEvents.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/SharkPool/Messages-Plus.js
  Name: Messages+
  Description: Powerful new message blocks that work with vanilla broadcasts.
  Authors: SharkPool
*/
addExtensionToList({
  id: "SPmessagePlus",
  url: "https://extensions.turbowarp.org/SharkPool/Messages-Plus.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./31.SPmessagePlus.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/Lily/ListTools.js
  Name: List Tools
  Description: An assortment of new ways to interact with lists.
  Authors: LilyMakesThings
*/
addExtensionToList({
  id: "lmsListTools",
  url: "https://extensions.turbowarp.org/Lily/ListTools.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./32.lmsListTools.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/veggiecan/mobilekeyboard.js
  Name: Mobile Keyboard
  Description: Show the keyboard on mobile devices and get the users input without showing any input modal.
  Authors: veggiecan0419
*/
addExtensionToList({
  id: "mobilekeyboard0419",
  url: "https://extensions.turbowarp.org/veggiecan/mobilekeyboard.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./33.mobilekeyboard0419.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/NexusKitten/moremotion.js
  Name: More Motion
  Description: More motion-related blocks.
  Authors: NamelessCat
*/
addExtensionToList({
  id: "nkmoremotion",
  url: "https://extensions.turbowarp.org/NexusKitten/moremotion.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./34.nkmoremotion.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/CubesterYT/WindowControls.js
  Name: Window Controls
  Description: Move, resize, rename the window, enter fullscreen, get screen size, and more.
  Authors: CubesterYT
*/
addExtensionToList({
  id: "cubesterWindowControls",
  url: "https://extensions.turbowarp.org/CubesterYT/WindowControls.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./35.cubesterWindowControls.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/veggiecan/browserfullscreen.js
  Name: Browser Fullscreen
  Description: Enter and exit fullscreen mode.
  Authors: Veggiecan0419
*/
addExtensionToList({
  id: "fullscreen0419",
  url: "https://extensions.turbowarp.org/veggiecan/browserfullscreen.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./36.fullscreen0419.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/shreder95ua/resolution.js
  Name: Screen Resolution
  Description: Get the resolution of the primary screen.
  Authors: shreder95ua
*/
addExtensionToList({
  id: "shreder95resolution",
  url: "https://extensions.turbowarp.org/shreder95ua/resolution.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./37.shreder95resolution.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/XmerOriginals/closecontrol.js
  Name: Ask Before Closing Tab
  Description: Show a prompt when someone tries to close the tab.
  Authors: XmerOriginals
*/
addExtensionToList({
  id: "xmerclosecontrol",
  url: "https://extensions.turbowarp.org/XmerOriginals/closecontrol.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./38.xmerclosecontrol.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/navigator.js
  Name: Navigator
  Description: Details about the user's browser and operating system.
  Authors: GarboMuffin
*/
addExtensionToList({
  id: "navigatorinfo",
  url: "https://extensions.turbowarp.org/navigator.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./39.navigatorinfo.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/battery.js
  Name: Battery
  Description: Access information about the battery of phones or laptops. May not work on all devices and browsers.
  Authors: GarboMuffin
*/
addExtensionToList({
  id: "battery",
  url: "https://extensions.turbowarp.org/battery.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./40.battery.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/PwLDev/vibration.js
  Name: Vibration
  Description: Control the device's vibration. Only works on Chrome for Android.
  Authors: PwLDev
*/
addExtensionToList({
  id: "pwldevvibration",
  url: "https://extensions.turbowarp.org/PwLDev/vibration.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./41.pwldevvibration.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/TheShovel/CustomStyles.js
  Name: Custom Styles
  Description: Customize the appearance of variable monitors and prompts in your project.
  Authors: TheShovel
*/
addExtensionToList({
  id: "shovelcss",
  url: "https://extensions.turbowarp.org/TheShovel/CustomStyles.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./42.shovelcss.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/TheShovel/ColorPicker.js
  Name: Color Picker
  Description: Access your system's color picker.
  Authors: TheShovel
*/
addExtensionToList({
  id: "shovelColorPicker",
  url: "https://extensions.turbowarp.org/TheShovel/ColorPicker.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./43.shovelColorPicker.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/NexusKitten/controlcontrols.js
  Name: Control Controls
  Description: Show and hide the project's controls.
  Authors: NamelessCat
*/
addExtensionToList({
  id: "nkcontrols",
  url: "https://extensions.turbowarp.org/NexusKitten/controlcontrols.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./44.nkcontrols.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/mdwalters/notifications.js
  Name: Notifications
  Description: Display notifications.
  Authors: mdwalters
*/
addExtensionToList({
  id: "mdwaltersnotifications",
  url: "https://extensions.turbowarp.org/mdwalters/notifications.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./45.mdwaltersnotifications.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/XeroName/Deltatime.js
  Name: Delta Time
  Description: Precise delta timing blocks.
  Authors: XeroName
*/
addExtensionToList({
  id: "dtbyxeroname",
  url: "https://extensions.turbowarp.org/XeroName/Deltatime.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./46.dtbyxeroname.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/ar.js
  Name: Augmented Reality
  Description: Shows image from camera and performs motion tracking, allowing 3D projects to correctly overlay virtual objects on real world.
  Authors: Vadik1
*/
addExtensionToList({
  id: "AR",
  url: "https://extensions.turbowarp.org/ar.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./47.AR.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/encoding.js
  Name: Encoding
  Description: Encode and decode strings into their unicode numbers, base 64, or URLs.
  Authors: -SIPC-
*/
addExtensionToList({
  id: "Encoding",
  url: "https://extensions.turbowarp.org/encoding.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./48.Encoding.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/SharkPool/Tune-Shark-V3.js
  Name: Tune Shark V3
  Description: An advanced audio engine, providing complex sound control.
  Authors: SharkPool
*/
addExtensionToList({
  id: "SPtuneShark3",
  url: "https://extensions.turbowarp.org/SharkPool/Tune-Shark-V3.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./49.SPtuneShark3.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/Lily/SoundExpanded.js
  Name: Sound Expanded
  Description: Adds more sound-related blocks.
  Authors: LilyMakesThings
*/
addExtensionToList({
  id: "lmsSoundExpanded",
  url: "https://extensions.turbowarp.org/Lily/SoundExpanded.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./50.lmsSoundExpanded.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/Lily/TempVariables2.js
  Name: Temporary Variables
  Description: Create disposable runtime or thread variables.
  Authors: LilyMakesThings, Mio
*/
addExtensionToList({
  id: "lmsTempVars2",
  url: "https://extensions.turbowarp.org/Lily/TempVariables2.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./51.lmsTempVars2.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/Lily/MoreTimers.js
  Name: More Timers
  Description: Control several timers at once.
  Authors: LilyMakesThings
*/
addExtensionToList({
  id: "lmsTimers",
  url: "https://extensions.turbowarp.org/Lily/MoreTimers.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./52.lmsTimers.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/clouddata-ping.js
  Name: Ping Cloud Data
  Description: Determine whether a cloud variable server is probably up.
  Authors: GarboMuffin
*/
addExtensionToList({
  id: "clouddataping",
  url: "https://extensions.turbowarp.org/clouddata-ping.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./53.clouddataping.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/cloudlink.js
  Name: CloudLink V4
  Description: A powerful WebSocket extension for Scratch.
  Authors: MikeDEV
*/
addExtensionToList({
  id: "cloudlink",
  url: "https://extensions.turbowarp.org/cloudlink.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./54.cloudlink.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/true-fantom/network.js
  Name: Network
  Description: Various blocks for interacting with the network.
  Authors: TrueFantom
*/
addExtensionToList({
  id: "truefantomnetwork",
  url: "https://extensions.turbowarp.org/true-fantom/network.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./55.truefantomnetwork.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/true-fantom/math.js
  Name: Math
  Description: A lot of operators blocks, from exponentiation to trigonometric functions.
  Authors: TrueFantom
*/
addExtensionToList({
  id: "truefantommath",
  url: "https://extensions.turbowarp.org/true-fantom/math.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./56.truefantommath.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/true-fantom/regexp.js
  Name: RegExp
  Description: Full interface for working with Regular Expressions.
  Authors: TrueFantom
*/
addExtensionToList({
  id: "truefantomregexp",
  url: "https://extensions.turbowarp.org/true-fantom/regexp.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./57.truefantomregexp.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/true-fantom/couplers.js
  Name: Couplers
  Description: A few adapter blocks.
  Authors: TrueFantom
*/
addExtensionToList({
  id: "truefantomcouplers",
  url: "https://extensions.turbowarp.org/true-fantom/couplers.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./58.truefantomcouplers.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/SamuelLouf/Geolocation.js
  Name: Geolocation
  Description: Get the user's current location (requires permission from browser). Not supported in desktop app or Electron packaged projects.
  Authors: SamuelLouf
*/
addExtensionToList({
  id: "samuelloufgeolocation",
  url: "https://extensions.turbowarp.org/SamuelLouf/Geolocation.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./59.samuelloufgeolocation.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/DogeisCut/FormatNumbers.js
  Name: Format Numbers
  Description: Format large numbers into AD standard, fixed decimal, comma separated, or scientific notation.
  Authors: DogeisCut
*/
addExtensionToList({
  id: "dogeiscutformatnumbers",
  url: "https://extensions.turbowarp.org/DogeisCut/FormatNumbers.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./60.dogeiscutformatnumbers.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/Lily/AllMenus.js
  Name: All Menus
  Description: Special category with every menu from every Scratch category and extensions.
  Authors: LilyMakesThings
*/
addExtensionToList({
  id: "lmsAllMenus",
  url: "https://extensions.turbowarp.org/Lily/AllMenus.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./61.lmsAllMenus.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/Lily/HackedBlocks.js
  Name: Hidden Block Collection
  Description: Various "hacked blocks" that work in Scratch but are not visible in the palette.
  Authors: LilyMakesThings, pumpkinhasapatch
*/
addExtensionToList({
  id: "lmsHackedBlocks",
  url: "https://extensions.turbowarp.org/Lily/HackedBlocks.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./62.lmsHackedBlocks.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/Lily/Cast.js
  Name: Cast
  Description: Convert values between types.
  Authors: LilyMakesThings
*/
addExtensionToList({
  id: "lmsCast",
  url: "https://extensions.turbowarp.org/Lily/Cast.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./63.lmsCast.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/-SIPC-/time.js
  Name: Time
  Description: Blocks for times, dates, and time zones.
  Authors: -SIPC-, SharkPool
*/
addExtensionToList({
  id: "sipctime",
  url: "https://extensions.turbowarp.org/-SIPC-/time.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./64.sipctime.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/-SIPC-/consoles.js
  Name: Consoles
  Description: Blocks that interact with the JavaScript console built in to your browser's developer tools.
  Authors: -SIPC-
*/
addExtensionToList({
  id: "sipcconsole",
  url: "https://extensions.turbowarp.org/-SIPC-/consoles.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./65.sipcconsole.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/ZXMushroom63/searchApi.js
  Name: Search Params
  Description: Interact with URL search parameters: the part of the URL after a question mark.
  Authors: ZXMushroom63
*/
addExtensionToList({
  id: "zxmushroom63searchparams",
  url: "https://extensions.turbowarp.org/ZXMushroom63/searchApi.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./66.zxmushroom63searchparams.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/TheShovel/ShovelUtils.js
  Name: ShovelUtils
  Description: A bunch of miscellaneous blocks.
  Authors: TheShovel, Mio
*/
addExtensionToList({
  id: "ShovelUtils",
  url: "https://extensions.turbowarp.org/TheShovel/ShovelUtils.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./67.ShovelUtils.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/Lily/Assets.js
  Name: Asset Manager
  Description: Add, remove, and get data from various types of assets.
  Authors: LilyMakesThings, Mio
*/
addExtensionToList({
  id: "lmsAssets",
  url: "https://extensions.turbowarp.org/Lily/Assets.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./68.lmsAssets.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/SharkPool/Font-Manager.js
  Name: Font Manager
  Description: Add, delete, and manage fonts.
  Authors: SharkPool, Mio
*/
addExtensionToList({
  id: "SPASfontManager",
  url: "https://extensions.turbowarp.org/SharkPool/Font-Manager.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./69.SPASfontManager.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/DNin/wake-lock.js
  Name: Wake Lock
  Description: Prevent the computer from falling asleep.
  Authors: D-ScratchNinja
*/
addExtensionToList({
  id: "dninwakelock",
  url: "https://extensions.turbowarp.org/DNin/wake-lock.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./70.dninwakelock.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/Skyhigh173/json.js
  Name: JSON
  Description: Handle JSON strings and arrays.
  Authors: Skyhigh173, Mio
*/
addExtensionToList({
  id: "skyhigh173JSON",
  url: "https://extensions.turbowarp.org/Skyhigh173/json.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./71.skyhigh173JSON.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/mbw/xml.js
  Name: XML
  Description: Create and extract values from XML.
  Authors: mybearworld
*/
addExtensionToList({
  id: "mbwxml",
  url: "https://extensions.turbowarp.org/mbw/xml.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./72.mbwxml.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/numerical-encoding-2.js
  Name: Numerical Encoding V2
  Description: Encode strings as numbers for cloud variables. Not compatible with V1 due to using much more efficient format.
  Authors: GarboMuffin
*/
addExtensionToList({
  id: "numericalencoding2",
  url: "https://extensions.turbowarp.org/numerical-encoding-2.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./73.numericalencoding2.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/cs2627883/numericalencoding.js
  Name: Numerical Encoding V1
  Description: Use V2 instead as it is more efficient. V1 only exists for compatibility reasons.
  Authors: cs2627883
*/
addExtensionToList({
  id: "cs2627883NumericalEncoding",
  url: "https://extensions.turbowarp.org/cs2627883/numericalencoding.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./74.cs2627883NumericalEncoding.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/SharkPool/Camera.js
  Name: Camera V2
  Description: Move the visible part of the stage.
  Authors: SharkPool
*/
addExtensionToList({
  id: "SPcamera",
  url: "https://extensions.turbowarp.org/SharkPool/Camera.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./75.SPcamera.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/DT/cameracontrols.js
  Name: Camera V1 (Buggy)
  Description: Move the visible part of the stage.
  Authors: DT
*/
addExtensionToList({
  id: "DTcameracontrols",
  url: "https://extensions.turbowarp.org/DT/cameracontrols.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./76.DTcameracontrols.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/TheShovel/CanvasEffects.js
  Name: Canvas Effects
  Description: Apply visual effects to the entire stage.
  Authors: TheShovel, SharkPool
*/
addExtensionToList({
  id: "theshovelcanvaseffects",
  url: "https://extensions.turbowarp.org/TheShovel/CanvasEffects.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./77.theshovelcanvaseffects.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/Longboost/color_channels.js
  Name: RGB Channels
  Description: Only render or stamp certain RGB channels.
  Authors: Longboost
*/
addExtensionToList({
  id: "lbdrawtest",
  url: "https://extensions.turbowarp.org/Longboost/color_channels.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./78.lbdrawtest.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/CST1229/zip.js
  Name: Zip
  Description: Create and edit .zip format files, including .sb3 files.
  Authors: CST1229
*/
addExtensionToList({
  id: "cst1229zip",
  url: "https://extensions.turbowarp.org/CST1229/zip.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./79.cst1229zip.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/CST1229/images.js
  Name: Images
  Description: Some blocks for working with images.
  Authors: 
*/
addExtensionToList({
  id: "images",
  url: "https://extensions.turbowarp.org/CST1229/images.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./80.images.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/TheShovel/LZ-String.js
  Name: LZ Compress
  Description: Compress and decompress text using lz-string.
  Authors: TheShovel
*/
addExtensionToList({
  id: "shovellzcompress",
  url: "https://extensions.turbowarp.org/TheShovel/LZ-String.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./81.shovellzcompress.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/0832/rxFS2.js
  Name: rxFS
  Description: Blocks for interacting with a virtual in-memory filesystem.
  Authors: 0832
*/
addExtensionToList({
  id: "0832rxfs2",
  url: "https://extensions.turbowarp.org/0832/rxFS2.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./82.0832rxfs2.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/NexusKitten/sgrab.js
  Name: S-Grab
  Description: Get information about Scratch projects and Scratch users.
  Authors: NamelessCat
*/
addExtensionToList({
  id: "nexuskittensgrab",
  url: "https://extensions.turbowarp.org/NexusKitten/sgrab.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./83.nexuskittensgrab.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/NOname-awa/graphics2d.js
  Name: Graphics 2D
  Description: Blocks to compute lengths, angles, and areas in two dimensions.
  Authors: NOname-awa
*/
addExtensionToList({
  id: "nonameawagraph",
  url: "https://extensions.turbowarp.org/NOname-awa/graphics2d.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./84.nonameawagraph.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/NOname-awa/more-comparisons.js
  Name: More Comparisons
  Description: More comparison blocks.
  Authors: NOname-awa
*/
addExtensionToList({
  id: "nonameawacomparisons",
  url: "https://extensions.turbowarp.org/NOname-awa/more-comparisons.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./85.nonameawacomparisons.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/JeremyGamer13/tween.js
  Name: Tween
  Description: Easing methods for smooth animations.
  Authors: JeremyGamer13, Fath11
*/
addExtensionToList({
  id: "jeremygamerTweening",
  url: "https://extensions.turbowarp.org/JeremyGamer13/tween.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./86.jeremygamerTweening.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/rixxyx.js
  Name: RixxyX
  Description: Various utility blocks.
  Authors: RixTheTyrunt
*/
addExtensionToList({
  id: "RixxyX",
  url: "https://extensions.turbowarp.org/rixxyx.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./87.RixxyX.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/Lily/lmsutils.js
  Name: Lily's Toolbox
  Description: Previously called LMS Utilities.
  Authors: LilyMakesThings
*/
addExtensionToList({
  id: "lmsutilsblocks",
  url: "https://extensions.turbowarp.org/Lily/lmsutils.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./88.lmsutilsblocks.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/qxsck/data-analysis.js
  Name: Data Analysis
  Description: Blocks to compute means, medians, maximums, minimums, variances, and modes.
  Authors: qxsck
*/
addExtensionToList({
  id: "qxsckdataanalysis",
  url: "https://extensions.turbowarp.org/qxsck/data-analysis.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./89.qxsckdataanalysis.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/qxsck/var-and-list.js
  Name: Variable and list
  Description: More blocks related to variables and lists.
  Authors: qxsck
*/
addExtensionToList({
  id: "qxsckvarandlist",
  url: "https://extensions.turbowarp.org/qxsck/var-and-list.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./90.qxsckvarandlist.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/vercte/dictionaries.js
  Name: Dictionaries
  Description: Use the power of dictionaries in your project.
  Authors: Vercte
*/
addExtensionToList({
  id: "verctedictionaries",
  url: "https://extensions.turbowarp.org/vercte/dictionaries.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./91.verctedictionaries.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/godslayerakp/http.js
  Name: HTTP
  Description: Comprehensive extension for interacting with external websites.
  Authors: RedMan13
*/
addExtensionToList({
  id: "gsaHTTPRequests",
  url: "https://extensions.turbowarp.org/godslayerakp/http.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./92.gsaHTTPRequests.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/godslayerakp/ws.js
  Name: WebSocket
  Description: Manually connect to WebSocket servers.
  Authors: RedMan13
*/
addExtensionToList({
  id: "gsaWebsocket",
  url: "https://extensions.turbowarp.org/godslayerakp/ws.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./93.gsaWebsocket.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/CubesterYT/Webhooks.js
  Name: Webhooks
  Description: A modern, very capable Webhook extension.
  Authors: CubesterYT
*/
addExtensionToList({
  id: "cubesterWebhooks",
  url: "https://extensions.turbowarp.org/CubesterYT/Webhooks.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./94.cubesterWebhooks.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/Lily/CommentBlocks.js
  Name: Comment Blocks
  Description: Annotate your scripts.
  Authors: LilyMakesThings
*/
addExtensionToList({
  id: "lmscomments",
  url: "https://extensions.turbowarp.org/Lily/CommentBlocks.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./95.lmscomments.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/veggiecan/LongmanDictionary.js
  Name: Longman Dictionary
  Description: Get the definitions of words from the Longman Dictionary in your projects.
  Authors: veggiecan0419
*/
addExtensionToList({
  id: "longvegdictionary",
  url: "https://extensions.turbowarp.org/veggiecan/LongmanDictionary.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./96.longvegdictionary.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/Alestore/nfcwarp.js
  Name: NFCWarp
  Description: Allows reading data from NFC (NDEF) devices. Only works in Chrome on Android.
  Authors: Alestore Games
*/
addExtensionToList({
  id: "alestorenfc",
  url: "https://extensions.turbowarp.org/Alestore/nfcwarp.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./97.alestorenfc.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/NishiOwO/dectalk.js
  Name: DECtalk Text to Speech
  Description: Text to speech powered by DECtalk. Does not use an internet connection, so it works offline. English only.
  Authors: NishiOwO
*/
addExtensionToList({
  id: "nishiowoDectalk",
  url: "https://extensions.turbowarp.org/NishiOwO/dectalk.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./98.nishiowoDectalk.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/steamworks.js
  Name: Steamworks
  Description: Connect your project to Steamworks APIs.
  Authors: GarboMuffin
*/
addExtensionToList({
  id: "steamworks",
  url: "https://extensions.turbowarp.org/steamworks.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./99.steamworks.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/itchio.js
  Name: itch.io
  Description: Blocks that interact with the itch.io website. Unofficial.
  Authors: softed
*/
addExtensionToList({
  id: "itch",
  url: "https://extensions.turbowarp.org/itchio.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./100.itch.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/gamejolt.js
  Name: Game Jolt
  Description: Blocks that allow games to interact with the GameJolt API. Unofficial.
  Authors: softed
*/
addExtensionToList({
  id: "GameJoltAPI",
  url: "https://extensions.turbowarp.org/gamejolt.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./101.GameJoltAPI.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/obviousAlexC/newgroundsIO.js
  Name: Newgrounds
  Description: Blocks that allow games to interact with the Newgrounds API. Unofficial.
  Authors: ObviousAlexC
*/
addExtensionToList({
  id: "NGIO",
  url: "https://extensions.turbowarp.org/obviousAlexC/newgroundsIO.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./102.NGIO.js")
});
////////////////////////////////////////
/**
  Extension is fetched from https://extensions.turbowarp.org/Lily/McUtils.js
  Name: McUtils
  Description: Helpful utilities for any fast food employee.
  Authors: LilyMakesThings
*/
addExtensionToList({
  id: "lmsmcutils",
  url: "https://extensions.turbowarp.org/Lily/McUtils.js",
  type: ExtensionType.EXTENSION_TW_ASYNC,
  importFunc: async () => await import("!!raw-loader!./103.lmsmcutils.js")
});
////////////////////////////////////////
