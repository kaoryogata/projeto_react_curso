const schemaRestful = require('./schema');

schemaRestful.methods(['get', 'post', 'put']);
schemaRestful.updateOptions({new: true, runValidators: true});

module.exports = schemaRestful;