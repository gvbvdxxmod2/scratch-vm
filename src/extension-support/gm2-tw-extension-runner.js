var createTranslate = require('./tw-l10n');
var createScratchX = require('./tw-scratchx-compatibility-layer');
var ArgumentType = require('../argument-type');
var BlockType = require('../block-type');
var Cast = require('../../util/cast');
var TargetType = require('../target-type');
var log = require('../../util/log');

class ScratchExtensionAPI {
	constructor (vm, runtime) {		
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
			register: this.register.bind(this)
		};
		this.translate = createTranslate(vm);
		this.ScratchExtensions = createScratchX(this);
	}
	register (ext) {
		this.vm.extensionManager.GM2RegisterExtension(ext);
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
        const actualURL = url instanceof Request ? url.url : url;
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

class ExtensionRunner {
	static ScratchExtensionAPI = ScratchExtensionAPI;

	constructor (manager, runtime) {
		this.runtime = runtime;
		this.vm = runtime.vm;
		this.extensionManager = manager;
	}

	async runExtensionURL(url) {
		try{
			var response = await window.fetch(url);
		}catch(e){
			log.error("GM2 Extension Runner got error fetching an extension: ",e);
			return {
				error: true,
				message: "Javascript Extension Fetch Error: "+e
			};
		}
		if (!response.ok) {
			log.error("GM2 Extension Runner got bad status: ",response.ok);
			return {
				error: true,
				message: `JavaScript Extension request was not OK, got status ${response.status}.`
			};
		}
	}

	async runExtensionBlob(blob) {
		var url = URL.createObjectURL(blob);
		var result = await this.runExtensionURL(url);
		URL.revokeObjectURL(url);
		return result;
	}

	runExtensionFromJavascriptSync (extensionJavascript) {
		var Scratch = new ExtensionRunner.ScratchExtensionAPI(this.vm, this.runtime);
		var globalStuff = {
			Scratch:Scratch
		};

		var extensionFunction = new Function("Scratch", extensionJavascript);
		extensionFunction(globalStuff);
		
		return {
			Scratch: Scratch
		};
	}
}

module.exports = ExtensionRunner;