"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servidor = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const dependencia_1 = require("./dependencia");
const direccion_1 = require("./direccion");
const departamento_1 = require("./departamento");
exports.Servidor = connection_1.default.define("servidores_publicos", {
    id: { type: sequelize_1.DataTypes.BIGINT.UNSIGNED, primaryKey: true, autoIncrement: true },
    nombre: { type: sequelize_1.DataTypes.STRING(191), allowNull: false },
    primer_apellido: { type: sequelize_1.DataTypes.STRING(191), allowNull: false },
    segundo_apellido: { type: sequelize_1.DataTypes.STRING(191), allowNull: true, defaultValue: null },
    curp: { type: sequelize_1.DataTypes.STRING(191), allowNull: true, defaultValue: null },
    rfc: { type: sequelize_1.DataTypes.STRING(191), allowNull: true, defaultValue: null },
    homoclave: { type: sequelize_1.DataTypes.STRING(191), allowNull: true, defaultValue: null },
    fecha_inicio: { type: sequelize_1.DataTypes.DATEONLY, allowNull: false },
    cargo: { type: sequelize_1.DataTypes.STRING(191), allowNull: false },
    nivel_cargo: { type: sequelize_1.DataTypes.STRING(191), allowNull: false },
    cve_issemym: { type: sequelize_1.DataTypes.STRING(191), allowNull: true, defaultValue: null },
    tipo_dependencia: { type: sequelize_1.DataTypes.BIGINT.UNSIGNED, references: { model: dependencia_1.Dependencia, key: 'id' }, allowNull: false },
    tipo_direccion: { type: sequelize_1.DataTypes.BIGINT.UNSIGNED, references: { model: direccion_1.Direccion, key: 'id' }, allowNull: false },
    tipo_departamento: { type: sequelize_1.DataTypes.BIGINT.UNSIGNED, references: { model: departamento_1.Departamento, key: 'id' }, allowNull: false },
    honorarios: { type: sequelize_1.DataTypes.BIGINT.UNSIGNED, allowNull: true, defaultValue: null },
    c_institucional: { type: sequelize_1.DataTypes.STRING(191), allowNull: true, defaultValue: null },
    c_personal: { type: sequelize_1.DataTypes.STRING(191), allowNull: true, defaultValue: null },
    telefono_casa: { type: sequelize_1.DataTypes.STRING(191), allowNull: true, defaultValue: null },
    celular: { type: sequelize_1.DataTypes.STRING(191), allowNull: true, defaultValue: null },
    nacionalidad: { type: sequelize_1.DataTypes.STRING(191), allowNull: true, defaultValue: null },
    observaciones: { type: sequelize_1.DataTypes.STRING(191), allowNull: true, defaultValue: null },
    registro: { type: sequelize_1.DataTypes.TINYINT, allowNull: false, defaultValue: 0 },
    verificacion: { type: sequelize_1.DataTypes.TINYINT, allowNull: false, defaultValue: 0 },
    presenta_version_larga: { type: sequelize_1.DataTypes.TINYINT, allowNull: false, defaultValue: 0 },
    created_at: { type: sequelize_1.DataTypes.DATE, allowNull: true, defaultValue: null },
    updated_at: { type: sequelize_1.DataTypes.DATE, allowNull: true, defaultValue: null },
    deleted_at: { type: sequelize_1.DataTypes.DATE, allowNull: true, defaultValue: null },
}, {
    timestamps: false, // Desactiva `createdAt` y `updatedAt`
});
exports.Servidor.belongsTo(dependencia_1.Dependencia, { foreignKey: 'tipo_dependencia', as: 'dependencia' });
exports.Servidor.belongsTo(direccion_1.Direccion, { foreignKey: 'tipo_direccion', as: 'direccion' });
