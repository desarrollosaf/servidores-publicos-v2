"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Declaraciones = void 0;
const sequelize_1 = require("sequelize");
const connection_decl_1 = __importDefault(require("../database/connection_decl"));
const servidor_1 = require("./servidor");
exports.Declaraciones = connection_decl_1.default.define("declaraciones", {
    id: { type: sequelize_1.DataTypes.BIGINT.UNSIGNED, primaryKey: true, autoIncrement: true },
    servidor_publico_id: { type: sequelize_1.DataTypes.BIGINT.UNSIGNED, references: { model: servidor_1.Servidor, key: 'id' }, allowNull: false },
    tipo_movimiento_id: { type: sequelize_1.DataTypes.BIGINT.UNSIGNED, allowNull: false },
    fecha_declaracion: { type: sequelize_1.DataTypes.DATEONLY, allowNull: false },
    correo_institucional: { type: sequelize_1.DataTypes.STRING(191), allowNull: true },
    correo_personal: { type: sequelize_1.DataTypes.STRING(191), allowNull: true },
    telefono_casa: { type: sequelize_1.DataTypes.STRING(191), allowNull: true },
    telefono_personal: { type: sequelize_1.DataTypes.STRING(191), allowNull: true },
    situacion_personal_id: { type: sequelize_1.DataTypes.BIGINT.UNSIGNED, allowNull: true },
    regimen_matrimonial_id: { type: sequelize_1.DataTypes.BIGINT.UNSIGNED, allowNull: true },
    honorarios: { type: sequelize_1.DataTypes.TINYINT, allowNull: true },
    pais_id: { type: sequelize_1.DataTypes.BIGINT.UNSIGNED, allowNull: true },
    nacionalidad: { type: sequelize_1.DataTypes.STRING(191), allowNull: true },
    regimen_especificar: { type: sequelize_1.DataTypes.STRING(191), allowNull: true },
    obligado: { type: sequelize_1.DataTypes.TINYINT, allowNull: false, defaultValue: 1 },
    estatus_declaracion_id: { type: sequelize_1.DataTypes.BIGINT.UNSIGNED, allowNull: false },
    created_at: { type: sequelize_1.DataTypes.DATE, allowNull: true, defaultValue: null },
    updated_at: { type: sequelize_1.DataTypes.DATE, allowNull: true, defaultValue: null },
    deleted_at: { type: sequelize_1.DataTypes.DATE, allowNull: true, defaultValue: null },
    regimen_matrimonial: { type: sequelize_1.DataTypes.STRING(191), allowNull: true },
    nacionalidad_id: { type: sequelize_1.DataTypes.BIGINT.UNSIGNED, allowNull: true },
    enviado: { type: sequelize_1.DataTypes.TINYINT, allowNull: false, defaultValue: 0 },
    fecha_envio: { type: sequelize_1.DataTypes.DATEONLY, allowNull: true },
    observaciones: { type: sequelize_1.DataTypes.TEXT('long'), allowNull: true },
    respuesta_id: { type: sequelize_1.DataTypes.BIGINT.UNSIGNED, allowNull: true },
    motivo_no_obligado_id: { type: sequelize_1.DataTypes.BIGINT.UNSIGNED, allowNull: true },
    fecha_envio_aclaracion: { type: sequelize_1.DataTypes.DATEONLY, allowNull: true },
    cargo: { type: sequelize_1.DataTypes.STRING(191), allowNull: true },
    nivel_cargo: { type: sequelize_1.DataTypes.STRING(191), allowNull: true }
}, {
    timestamps: false, // porque estás manejando los timestamps manualmente
    tableName: 'declaraciones',
    paranoid: true, // para soportar deleted_at con soft delete
});
