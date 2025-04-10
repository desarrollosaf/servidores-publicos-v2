"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('cddiputados-v2', 'homestead', 'secret', {
    host: '192.168.10.10',
    dialect: 'mysql',
    define: {
        freezeTableName: true // evita que Sequelize pluralice
    }
});
// const sequelize = new Sequelize('pos', 'root', '1004',{
//     host: 'localhost',
//     dialect: 'mysql'
// })
exports.default = sequelize;
