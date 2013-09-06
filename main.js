const
    express = require("express"), 
    mongoose = require('mongoose'), 
    path = require("path"), 
    http = require('http'),
    fs = require('fs'),
    url = require('url')
;

var expressMarkdown = function(dir) {
    return require('express-markdown')({
        // directory where markdown files are stored
        // required
        directory: dir, 

        // view to use for rendering markdown file
        // optional
        // default is undefined, no view
        // view: 'foo',

        // name of markdown variable passed in the context when rendering
        // optional
        // default 'markdown'
        // variable: 'bar'

    });
}


// Database
mongoose.connect('mongodb://localhost/kitchensink');

// Init schemas
var schemas = require('./schemas');

var app = new express();


// LOG File Config
var logFile = fs.createWriteStream('./logs/main.log', {
    flags: 'a+'
}); //use {flags: 'w'} to open in write mode
app.configure('development', function(){
    app.use(express.logger({
        stream: logFile
    }));
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));

    app.use('/static', express.directory('static'));
    app.use('/src', expressMarkdown(__dirname));
    app.use('/src', express.directory(__dirname));
    app.use('/src', express.static(__dirname));
    app.use('/doc', expressMarkdown(__dirname+'/doc'));
    app.use('/doc', express.directory(__dirname+'/doc'));
    app.use('/doc', express.static(__dirname+'/doc'));
});

app.configure(function(){
    app.use('/static', express.static('static'));
});


app.use(
    express.vhost('admin.*', require('./apps/admin/server').app)
);

app.use(
    express.vhost('www.*', require('./apps/public/server').app)
);

app.listen(8080);