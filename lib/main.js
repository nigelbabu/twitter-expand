var contextMenu = require("context-menu");
var tabs = require("tabs");

exports.main = function(options, callback) {
    var contextMenuImage = contextMenu.Item({
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

console.log("The add-on is running.");
