var contextMenu = require("context-menu");
var tabs = require("tabs");
var clipboard = require("clipboard");

exports.main = function(options, callback) {
    var contextCopy = contextMenu.Item({
        label: "Copy Expanded Link",
        context: [contextMenu.URLContext("*.twitter.com"), contextMenu.SelectorContext("a[href].twitter-timeline-link")],
        contentScript: "self.on('click', function (node, data) {" +
                       " self.postMessage(node.getAttribute('data-ultimate-url'));" +
                       "});",
        onMessage: function (data) {
            clipboard.set(data)
        }
    });

    var contextNewTab = contextMenu.Item({
        label: "Open Expanded Link",
        context: [contextMenu.URLContext("*.twitter.com"), contextMenu.SelectorContext("a[href].twitter-timeline-link")],
        contentScript: "self.on('click', function (node, data) {" +
                       " self.postMessage(node.getAttribute('data-ultimate-url'));" +
                       "});",
        onMessage: function (data) {
            tabs.open(data);
        }
    });    
};
