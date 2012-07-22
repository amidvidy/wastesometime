var SelectionPageView = Backbone.View.extend({

  el: 'body',
  initialize: function(options) {
    this.template = _.template($('#fuck-this-template').html());
    this.options = options;
    this.render();
  },

  getHostname: function(str) {
    var re = new RegExp('^(?:f|ht)tp(?:s)?\://([^/]+)', 'im');
    return str.match(re)[1].toString().split('.')[1] //[1].toString();
  }

  render: function() {
    $('#container').hide();
    if (this.options.content.length > 0) {
      var listObj = {
        list: this.options.content.map(function (model) {
          return {
            url: model.get('url'),
            iconUrl: model.get('iconUrl'),
            title: model.get('title')
          }
        })
      };
      console.log(listObj);

      $(this.template(listObj)).appendTo(this.$el);
      }
  }
});
