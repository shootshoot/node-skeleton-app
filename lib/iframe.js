exports = module.exports = function(req, res, next) {
    // console.log('IFRAME');
    // console.log(req);
    // console.log(' ');
    // console.log(' ');
    
    var oneof = false;
    if (req.headers['x-frame-options']) {
        // X-Frame-Options header may contain one of three tokens:
        // DENY
        // SAMEORIGIN
        // ALLOW-FROM origin
        // res.header('X-Frame-Options', req.headers['x-frame-options']);
        res.header('X-Frame-Options', 'ALLOW-FROM '+ req.headers.origin);
        oneof = true;
    }

    // intercept OPTIONS method
    if (oneof && req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
}