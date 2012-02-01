var contextMenu = require("context-menu");
var tabs = require("tabs");
var clipboard = require("clipboard");
var data = require("self").data;

exports.main = function(options, callback) {
    var contextCopy = contextMenu.Item({
        label: "Copy Expanded Link",
        context: [contextMenu.URLContext("*.twitter.com"), contextMenu.SelectorContext("a[href].twitter-timeline-link")],
        contentScriptFile: data.url('get-expanded.js'),
        onMessage: function (data) {
            clipboard.set(data)
        }
    });

    var contextNewTab = contextMenu.Item({
        label: "Open Expanded Link",
        context: [contextMenu.URLContext("*.twitter.com"), contextMenu.SelectorContext("a[href].twitter-timeline-link")],
        contentScriptFile: data.url('get-expanded.js'),
        onMessage: function (data) {
            tabs.open(data, inBackground: true);
        }
    });
};
