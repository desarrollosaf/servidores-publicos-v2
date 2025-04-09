"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dependencia = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
exports.Dependencia = connection_1.default.define("tipo_dependencia", {
    id: { type: sequelize_1.DataTypes.BIGINT.UNSIGNED, primaryKey: true, autoIncrement: true },
    c_presupDep: { type: sequelize_1.DataTypes.TINYINT, allowNull: false },
    nombre: { type: sequelize_1.DataTypes.STRING(191), allowNull: false },
    created_at: { type: sequelize_1.DataTypes.DATE, allowNull: true, defaultValue: null },
    updated_at: { type: sequelize_1.DataTypes.DATE, allowNull: true, defaultValue: null },
    deleted_at: { type: sequelize_1.DataTypes.DATE, allowNull: true, defaultValue: null },
}, {
    timestamps: false,
});
