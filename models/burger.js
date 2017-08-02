var orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
        orm.all('burgers', function(res) {
            cb(res);
        });
    }

    // TODO:
    //   make the update function
}

module.exports = burger;
