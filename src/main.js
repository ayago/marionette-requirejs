define([ "views/sample-item/sample-item.view", "marionette"], function (ItemView, Marionette) {
  var app = new Marionette.Application({
    region: "#app",
    onStart: function () {
      var itemView = new ItemView();
      this.showView(itemView);
    },
  });

  return app;
});
