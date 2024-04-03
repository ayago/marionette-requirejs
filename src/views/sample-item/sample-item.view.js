define(["marionette", "underscore", "text!views/sample-item/sample-item.view.html"], function (
  Marionette,
  _,
  itemViewTemplate
) {
  return Marionette.View.extend({
    template: _.template(itemViewTemplate),
    tagName: "div",
    className: "item-view",
    model: new Backbone.Model({
      // your model data here
    }),
    // your view logic here
  });
});
