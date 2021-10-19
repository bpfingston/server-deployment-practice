'use strict'

module.exports = function (req, res, next) {
    console.log(req.method);
    //middle needs next to be called.
    next();
}