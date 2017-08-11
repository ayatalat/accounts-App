var Sequelize = require('sequelize');
var sequelize = new Sequelize('sql8189643', 'sql8189643', 'wnjTT7FmfV', {
    host: 'sql8.freemysqlhosting.net',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        timestamps: false
    }
});

module.exports = sequelize;
