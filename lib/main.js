var contextMenu = require("context-menu");
var tabs = require("tabs");

exports.main = function(options, callback) {
    var contextMenuImage = contextMenu.Item({
        label: "Open Expanded Link",
        context: [contextMenu.URLContext("*.twitter.com"), contextMenu.SelectorContext("a[href]")],
        contentScript: 'self.on("click", function (node, data) {' +
                       ' self.postMessage(node.title);' +
                       '});',
        onMessage: function (data) {
            tabs.open(data);
        }
    });
};

console.log("The add-on is running.");
