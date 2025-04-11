import { DataTypes } from "sequelize";
import sequelizeDecl from "../database/connection_decl";
import { Servidor } from "./servidor";

export const Declaraciones = sequelizeDecl.define("declaraciones",{
    id: { type: DataTypes.BIGINT.UNSIGNED, primaryKey: true, autoIncrement: true },
    servidor_publico_id: { type: DataTypes.BIGINT.UNSIGNED, references: {  model: Servidor, key: 'id' },  allowNull: false },
    tipo_movimiento_id: { type: DataTypes.BIGINT.UNSIGNED, allowNull: false },
    fecha_declaracion: { type: DataTypes.DATEONLY, allowNull: false },
    correo_institucional: { type: DataTypes.STRING(191), allowNull: true },
    correo_personal: { type: DataTypes.STRING(191), allowNull: true },
    telefono_casa: { type: DataTypes.STRING(191), allowNull: true },
    telefono_personal: { type: DataTypes.STRING(191), allowNull: true },
    situacion_personal_id: { type: DataTypes.BIGINT.UNSIGNED, allowNull: true },
    regimen_matrimonial_id: { type: DataTypes.BIGINT.UNSIGNED, allowNull: true },
    honorarios: { type: DataTypes.TINYINT, allowNull: true },
    pais_id: { type: DataTypes.BIGINT.UNSIGNED, allowNull: true },
    nacionalidad: { type: DataTypes.STRING(191), allowNull: true },
    regimen_especificar: { type: DataTypes.STRING(191), allowNull: true },
    obligado: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 1 },
    estatus_declaracion_id: { type: DataTypes.BIGINT.UNSIGNED, allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: true, defaultValue: null },
    updated_at: { type: DataTypes.DATE, allowNull: true, defaultValue: null },
    deleted_at: { type: DataTypes.DATE, allowNull: true, defaultValue: null },
    regimen_matrimonial: { type: DataTypes.STRING(191), allowNull: true },
    nacionalidad_id: { type: DataTypes.BIGINT.UNSIGNED, allowNull: true },
    enviado: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 0 },
    fecha_envio: { type: DataTypes.DATEONLY, allowNull: true },
    observaciones: { type: DataTypes.TEXT('long'), allowNull: true },
    respuesta_id: { type: DataTypes.BIGINT.UNSIGNED, allowNull: true },
    motivo_no_obligado_id: { type: DataTypes.BIGINT.UNSIGNED, allowNull: true },
    fecha_envio_aclaracion: { type: DataTypes.DATEONLY, allowNull: true },
    cargo: { type: DataTypes.STRING(191), allowNull: true },
    nivel_cargo: { type: DataTypes.STRING(191), allowNull: true }
  
  }, {
    timestamps: false, // porque estás manejando los timestamps manualmente
    tableName: 'declaraciones',
    paranoid: true,     // para soportar deleted_at con soft delete
  });