const
    express = require("express"), 
    http = require('http'),
    fs = require('fs'),
    CrossDomain = require('../../lib/cors.js')
    Iframe = require('../../lib/iframe')
;

var app = new express();


// LOG File Config
var logFile = fs.createWriteStream('./logs/public.log', {
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

app.use(express.static(__dirname+'/web'));


app.get('/', function(req, res, method){
    res.send('Public area');
});

exports.app = app;

