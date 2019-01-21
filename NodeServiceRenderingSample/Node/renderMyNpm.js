var generate = require('nodeservicetesting');
module.exports = function (callback) {
    var result = generate.testOutput();
    callback(null,result);
};