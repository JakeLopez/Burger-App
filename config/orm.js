var connection = require('./connection.js');

var orm = {
    all: function(tableInput, cb) {
        connection.query('SELECT * FROM ' + tableInput + ';', function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    update: function(tableInput, condition, cb) {
        let updateQuery = 'UPDATE ' + tableInput + ' SET devoured=true WHERE id= ' + condition + ';'
        connection.query(updateQuery, function(err, result) {
            console.log(updateQuery);
            if (err) throw err;
            cb(result);
        })
    },
    create: function(tableInput, val, cb) {
        connection.query('INSERT INTO ' + tableInput + " (burger_name) VALUES ('" + val + "');", function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}
module.exports = orm;