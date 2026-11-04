
class SecurityManager {
    getSandboxMode (extensionURL) {
        return Promise.resolve('worker');
    }

    canLoadExtensionFromProject (extensionURL) {
        return Promise.resolve(false);
    }

    rewriteExtensionURL (extensionURL) {
        return Promise.resolve(extensionURL);
    }

    canFetch (resourceURL) {
        return Promise.resolve(true);
    }

    canOpenWindow (websiteURL) {
        return Promise.resolve(true);
    }

    canRedirect (websiteURL) {
        return Promise.resolve(true);
    }

    canRecordAudio () {
        return Promise.resolve(true);
    }

    canRecordVideo () {
        return Promise.resolve(true);
    }

    canReadClipboard () {
        return Promise.resolve(true);
    }

    canNotify () {
        return Promise.resolve(true);
    }

    canGeolocate () {
        return Promise.resolve(true);
    }

    canEmbed (documentURL) {
        return Promise.resolve(true);
    }

    canDownload (resourceURL, name) {
        return Promise.resolve(true);
    }
}

module.exports = SecurityManager;