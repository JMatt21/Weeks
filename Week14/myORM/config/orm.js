var connection = require("./connection.js");

const orm = {
    tableContents: function (tableInput) {
        connection.query("SELECT * FROM ??", [tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    tableContentsWhere: function (tableInput, columnName, columnVal) {
        connection.query("SELECT * FROM ?? WHERE ?? = ?", [tableInput, columnName, columnVal], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    displayClientsParty: function (selectedKeys, tableOne, tableTwo, tableTwoForeignKey) {
        connection.query("SELECT ?? FROM ?? INNER JOIN ?? ON ?? = ??.id ", 
        [selectedKeys, tableOne, tableTwo, tableTwoForeignKey, tableOne],
            function (err, result) {
                if (err) throw err;
                console.log(result);
            });
    }
}

module.exports = orm;