cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-speechrecognizer/SpeechRecognizer.js",
        "id": "cordova-plugin-speechrecognizer.SpeechRecognizer",
        "pluginId": "cordova-plugin-speechrecognizer",
        "clobbers": [
            "plugins.speechrecognizer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-speechrecognizer": "1.0.0"
}
// BOTTOM OF METADATA
});