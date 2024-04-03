define(["marionette", "views/sample-item/sample-item.view"], function (Marionette, ItemView) {
  var app = new Marionette.Application({
    region: "#app",
    onStart: function () {
      var itemView = new ItemView();
      this.showView(itemView);
    },
  });

  return app;
});
