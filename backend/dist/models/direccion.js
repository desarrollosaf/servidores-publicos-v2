"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const dependencia_1 = require("./dependencia");
exports.Direccion = connection_1.default.define("tipo_direccion", {
    id: { type: sequelize_1.DataTypes.BIGINT.UNSIGNED, primaryKey: true, autoIncrement: true },
    c_presupDir: { type: sequelize_1.DataTypes.TINYINT, allowNull: false },
    nombre: { type: sequelize_1.DataTypes.STRING(191), allowNull: false },
    id_Dependencia: { type: sequelize_1.DataTypes.BIGINT.UNSIGNED, references: { model: dependencia_1.Dependencia, key: 'id' }, allowNull: false },
    created_at: { type: sequelize_1.DataTypes.DATE, allowNull: true, defaultValue: null },
    updated_at: { type: sequelize_1.DataTypes.DATE, allowNull: true, defaultValue: null },
    deleted_at: { type: sequelize_1.DataTypes.DATE, allowNull: true, defaultValue: null },
}, {
    timestamps: false,
});
exports.Direccion.belongsTo(dependencia_1.Dependencia, { foreignKey: 'id_Dependencia', as: 'dependencias' });
