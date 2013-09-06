const
    sys = require('sys'), 
    express = require("express"), 
    path = require("path"), 
    http = require('http'),
    fs = require('fs'),
    gm = require('gm'),
    url = require('url')
    CrossDomain = require('../../lib/cors.js')
    Iframe = require('../../lib/iframe')
;

var app = new express();
app.set('title', 'backbone-mongoose-crud');

// LOG File Config
var logFile = fs.createWriteStream('./logs/admin.log', {
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
});
// Configue express
app.configure(function() {
    app.use(express.cookieParser());
    app.use(express.bodyParser({
        uploadDir: '/var/tmp/'
        // uploadDir: './uploads/'
    }));
    app.use(CrossDomain);
    app.use(Iframe);
    app.use(express.methodOverride());
    app.use(express.compress());
    app.use(app.router);
});

app.use('/CRUD', require('backbone-mongoose-crud').express);

app.use(express.static(__dirname+'/web'));


// Launch server
app.listen(8081);

exports.app = app;

