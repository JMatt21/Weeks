const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");


const Character = sequelize.define('character', {
    routeName: Sequelize.STRING,
    name: Sequelize.STRING,
    role: Sequelize.STRING,
    age: Sequelize.INTEGER,
    forcePoints: Sequelize.INTEGER
});

// Character.sync({ force: true }).then(() => {
//     // Table created
//     return Character.create({
//         routeName: 'obi',
//         name: 'obiwan',
//         role: 'highground',
//         age: 42,
//         forcePoints: 1000
//     });
// });

Character.sync();
// preferred ^^^

module.exports = Character;