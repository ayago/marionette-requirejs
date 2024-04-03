require.config({
    baseUrl: './src',
    paths: {
      'jquery': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min',
      'underscore': 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.1/underscore-min',
      'backbone': 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.4.0/backbone-min',
      'backbone.radio': 'https://cdnjs.cloudflare.com/ajax/libs/backbone.radio/2.0.0/backbone.radio.min',
      'marionette': 'https://cdn.jsdelivr.net/npm/backbone.marionette@4.1.3/lib/backbone.marionette.min',
      'text': 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min'
    },
    shim: {
      underscore: {
        exports: '_'
      },
      jquery: {
          exports: '$'
      },
      'backbone': {
        deps: ['jquery', 'underscore'],
        exports: 'Backbone'
      },
      'backbone.radio': {
          deps: [
              'underscore',
              'backbone'
          ],
          export: 'Radio'
      },    
      'marionette': {
        deps: ['backbone','backbone.radio'],
        exports: 'Marionette'
      }
    }
});

require(['main'], function(App){
    App.start();
});