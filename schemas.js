var 
	schemas = {}
	mongooseHelper = require('mongoose-helper')
;
schemas.StaticContent = mongooseHelper( "StaticContent", {
    title: String,
    content: String,
    updated_at: Date,
    created_at: Date
});

exports = module.exports = schemas;