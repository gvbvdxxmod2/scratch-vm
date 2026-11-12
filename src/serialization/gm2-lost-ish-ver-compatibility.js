

async function getCompatFontData(json) {
    var customFonts = json.customFonts || [];

    if (json.gm2fonts) {
        //TODO: Add font import compatibility for the lost source code version of Gvbvdxx Mod 2's update.
    }

    return customFonts;
}

module.exports = {
    getCompatFontData,
};