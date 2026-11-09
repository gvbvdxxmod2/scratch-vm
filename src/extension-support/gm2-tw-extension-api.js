var createTranslate = require('./tw-l10n');
var createScratchX = require('./tw-scratchx-compatibility-layer');
var ArgumentType = require('./argument-type');
var BlockType = require('./block-type');
var Cast = require('../util/cast');
var TargetType = require('./target-type');
var log = require('../util/log');
var external = require("./tw-external.js");

class ScratchExtensionAPI {
	constructor (extensionCode, vm, runtime) {		
		this.log = log;
		this.vm = vm;
		this.renderer = runtime.renderer;
		this.storage = runtime.storage;
		this.audio = runtime.audioEngine;
		this.audioEngine = runtime.audioEngine;
		this.fetch = window.fetch;
		this.ArgumentType = ArgumentType;
		this.BlockType = BlockType;
		this.Cast = Cast;
		this.TargetType = TargetType;
		this._extensionConstructor = null;
		this._extensionPrecreated = null;
		this.extensions = {
			unsandboxed:true, //Some extensions require this.
			register: this.register.bind(this),
			external
		};
		this.isGM2Loader = true;
		this.translate = createTranslate(vm);
		this.ScratchExtensions = createScratchX(this);

		this.extensionCode = extensionCode;
	}

    getExtensionAsDataURL() {
        var code = this.extensionCode;

        var blob = new Blob([code], {type: "application/javascript"});
        var reader = new FileReader();

        return new Promise((resolve, reject) => {
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL();
        });
    }

	register (ext) {
		this.vm.extensionManager._registerTWAPIExtension(ext, this);
	}

	//This may be unsecure in some way, but its easier to code this than setting up dialogs.
	async canEmbed () {
		return true;
	}
	async canFetch () {
		return true;
	}
	async canNotify () {
		return true;
	}
	async canOpenWindow () {
		return true;
	}
	async canRedirect () {
		return true;
	}
	async canRecordAudio () {
		return true;
	}
	async canRecordVideo () {
		return true;
	}
	async canReadClipboard () {
		return true;
	}

	//Some parts of this code is from TurboWarp themselfs.
	async fetch (url, options) {
        //const actualURL = url instanceof Request ? url.url : url;
        return fetch(url, options);
    }

	async openWindow (url, features) {
        // Use noreferrer to prevent new tab from accessing `window.opener`
        const baseFeatures = 'noreferrer';
        features = features ? `${baseFeatures},${features}` : baseFeatures;
        return window.open(url, '_blank', features);
    }

	async redirect (url) {
        location.href = url;
    }
}

module.exports = ScratchExtensionAPI;