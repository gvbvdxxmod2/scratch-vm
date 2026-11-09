var ScratchExtensionAPI = require("./gm2-tw-extension-api.js");

class ExtensionRunner {
	static get ScratchExtensionAPI() {
		return ScratchExtensionAPI;
	}

	constructor (manager, runtime) {
		this.runtime = runtime;
		this.vm = runtime.vm;
		this.extensionManager = manager;
	}

	async runExtensionURL(url) {
		var response = null;
		var content = null;
		try{
			response = await window.fetch(url);
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

		try{
			content = await response.text();
		}catch(e){
			log.error("GM2 Extension Runner had error downloading extension content: ",e);
			return {
				error: true,
				message: `JavaScript Extension download error: ${e}`
			};
		}
		
		return this.runExtensionFromJSSync(content);
	}

	async runExtensionBlob(blob) {
		var textPromise = new Promise((resolve, reject) => {
			var reader = new FileReader();
			reader.onload = resolve;
			reader.onerror = reject;
			reader.readAsText(blob);
		});

		try{
			var text = await textPromise;
		}catch(e){
			return {
				error: true,
				message: `JavaScript Extension blob read error: ${e}`
			};
		}
		var result = this.runExtensionFromJSSync(text);
		return result;
	}

	runExtensionFromJSSync (jsCode) {
		var Scratch = new ExtensionRunner.ScratchExtensionAPI(jsCode, this.vm, this.runtime);
		window.Scratch = Scratch;

		try{
			var extensionFunction = new Function("Scratch", jsCode);
		}catch(e){
			return {
				error: true,
				message: `JavaScript Extension function parse error: ${e}`
			};
		}
		try{
			extensionFunction(Scratch);
		}catch(e){
			return {
				error: true,
				message: `JavaScript Extension function call error: ${e}`
			};
		}
		
		return {
			error: false,
			Scratch
		};
	}
}

module.exports = ExtensionRunner;