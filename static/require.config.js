require.config({
    //Set paths for modules. If relative paths, set relative to baseUrl above.
    //If a special value of "empty:" is used for the path value, then that
    //acts like mapping the path to an empty file. It allows the optimizer to
    //resolve the dependency to path, but then does not include it in the output.
    //Useful to map module names that are to resources on a CDN or other
    //http: URL when running in the browser and during an optimization that
    //file should be skipped because it has no dependencies.
    "paths": {
        "jquery": "./static/bower_components/jquery/jquery.min",
        "jquery-1.9": "./static/bower_components/jquery-1.9/index",
        "jquery-1.10": "./static/bower_components/jquery-1.10/index",
        "lodash": "./static/bower_components/lodash/dist/lodash.min",
        "underscore": "./static/bower_components/lodash/dist/lodash.underscore.min",
        "chaplin": "./static/bower_components/chaplin/chaplin.min"
    },

    //Configure CommonJS packages. See http://requirejs.org/docs/api.html#packages
    //for more information.
    "packages": [
        {
            "name": "backbone",
            "location": "./static/bower_components/backbone",
            "main": "backbone.min.js"
        },
        {
            "name": "bootstrap",
            "location": "./static/bower_components/backbone.layoutmanager",
            "main": "backbone.layoutmanager.js"
        }
    ],


    //If shim config is used in the app during runtime, duplicate the config
    //here. Necessary if shim config is used, so that the shim's dependencies
    //are included in the build. Using "mainConfigFile" is a better way to
    //pass this information though, so that it is only listed in one place.
    //However, if mainConfigFile is not an option, the shim config can be
    //inlined in the build config.
    "shim": {
        "backbone": {
            "deps": [
                "jquery",
                "lodash"
            ],
            "exports": "Backbone"
        },
        "backbone.layoutmanager": {
            "deps": [
                "lodash",
                "jquery",
                "backbone"
            ],
            "exports": "Backbone.LayoutManager"
        },
        "backbone.localstorage": {
            "deps": [
                "lodash",
                "jquery",
                "backbone",
            ],
            "exports": "Store"
        },
        "backbone.modelbinder": ['lodash','jquery', 'backbone'],
        "lodash": {
            "exports": "_"
        },
        "jq18":{
            "exports": "jq18"
        },
        "bootstrap": ["jquery"],

        "jquery": {
            "exports": "$"
        },
        "jquery-1.10": {
            "exports": "JQ110"
        },
        "jquery-1.9": {
            "exports": "JQ19"
        },
        "jquery.qrcode": ['jquery'],
        "jquery.event.drag": ['jquery'],
        "jquery-sortable": ['jquery'],
        "jquery.ie.cors": ['jquery', 'jquery.matsiya.utils'],
        "jquery.toggle.buttons": ['jquery'],
        "jquery.matsiya.utils": ['jquery', 'backbone'],
        "jquery.preloadify": ['jquery'],
        "jquery.bootstrap.wizard": ['jquery','bootstrap'],
        "jquery.md5": ['jquery'],
        "jquery.cookie": ['jquery'],
        "jquery.pnotify": ['jquery'],

        "fileuploader.header": ['jquery'],
        "fileuploader.util": ['fileuploader.header'],
        "fileuploader.base": ['fileuploader.util'],
        "fileuploader.xhr": ['fileuploader.base'],
        "fileuploader.basic": ['fileuploader.xhr'],
        "fileuploader.jquery-plugin": ['jquery','fileuploader.basic'],
        "hammer": ['jquery'],
        "hammer.jquery": ['jquery', 'hammer'],
        "bootbox": ['jquery','bootstrap'],
        "wysihtml5": ['jquery','bootstrap'],
        "bootstrap-wysihtml5": ['jquery','bootstrap'],
        "bootstrap-datepicker": ['jquery','bootstrap'],
        "bootstrap-colorpicker": ['jquery','bootstrap'],
        "listTree": ['jquery','bootstrap'],
        "i18next": ['jquery'],
        "slidingview": ['hammer.jquery'],
        "moment" : ['jquery'],
        "iScroll": ['jquery'],
        "jszip": ['jquery'],
        "jszip-load": ['jszip'],
        "jszip-inflate": ['jszip-load'],
        "jszip-deflate": ['jszip-inflate'],
        "xlsx": ['jszip-deflate'],
        "heartcode-canvas":["jquery"],
        "fancybox":["jquery"],
        "mousewheel":["jquery"],
        "html2canvas":['jquery']
    }
});