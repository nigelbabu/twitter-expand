self.on('click', function (node, data) {
  link = node.getAttribute('data-ultimate-url');
  if(!link) {
    link = node.getAttribute('data-expanded-url');
  }
  self.postMessage(link);
});

