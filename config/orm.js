var connection = require("../config/connection");

// HELPERS
function createQmarks(num) {
    var arr = [];
    for(var i =0; i < num; i++) {
        arr.push("?")
    }
    return arr.toString();
}
// translate string into sql readable query  
function translateSql(obj) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if(typeof value === "string" && value.indexOf(" ") >= 0 ) {
                value = "'" + value + "'"
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}



var orm = {
    // select all function for database, create a connection to database and use a call back to retreive the results
    selectAll: function (table, cb) {
        var dbQuery = "SELECT * FROM " + table + ";";
        connection.query(dbQuery, function (err, results) {
            if (err) {
                throw err;
            }
            cb(results)
        })
    },
    insertOne: function (table, cols, vals, cd) {
        var dbQuery = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + createQmarks(vals.length) + ") ";
        
        console.log(dbQuery)
        connection.query(dbQuery, vals, function (err, results) {
            if (err) {
                throw err;
            }
            cb(results)
        })
    },
    updateOne: function (table, objColVals, condidtion, cb) {
        var dbQuery = "UPDATE " + table + "SET " + translateSql(objColVals) + "WHERE" + condidtion;
       
        console.log(dbQuery)
        connection.query(dbQuery, vals, function (err, results) {
            if (err) {
                throw err;
            }
            cb(results)
        })
    },
    deleteOne: function(table, condidtion, cb) {
        var dbQuery = "DELETE FROM " +table + "WHERE " + condidtion;
        console.log(dbQuery);

        connection.query(dbQuery, vals, function (err, results) {
            if (err) {
                throw err;
            }
            cb(results)
        })
    }
};

