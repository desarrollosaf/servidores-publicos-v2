import { DataTypes } from "sequelize";
import sequelize from "../database/connection";
import { Dependencia } from "./dependencia";
import { Direccion } from "./direccion";
import { Departamento } from "./departamento";
import { Declaraciones } from "./declaraciones";

export const Servidor = sequelize.define("servidores_publicos", {
    id: { type: DataTypes.BIGINT.UNSIGNED, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(191), allowNull: false },
    primer_apellido: { type: DataTypes.STRING(191), allowNull: false },
    segundo_apellido: { type: DataTypes.STRING(191), allowNull: true, defaultValue: null },
    curp: { type: DataTypes.STRING(191), allowNull: true, defaultValue: null },
    rfc: { type: DataTypes.STRING(191), allowNull: true, defaultValue: null },
    homoclave: { type: DataTypes.STRING(191), allowNull: true, defaultValue: null },
    fecha_inicio: { type: DataTypes.DATEONLY, allowNull: false },
    cargo: { type: DataTypes.STRING(191), allowNull: false },
    nivel_cargo: { type: DataTypes.STRING(191), allowNull: false },
    cve_issemym: { type: DataTypes.STRING(191), allowNull: true, defaultValue: null },
    tipo_dependencia: { type: DataTypes.BIGINT.UNSIGNED, references: {  model: Dependencia, key: 'id' },  allowNull: false },
    tipo_direccion: { type: DataTypes.BIGINT.UNSIGNED, references: {  model: Direccion, key: 'id' },  allowNull: false },
    tipo_departamento: { type: DataTypes.BIGINT.UNSIGNED, references: {  model: Departamento, key: 'id' },  allowNull: false },
    honorarios: { type: DataTypes.BIGINT.UNSIGNED, allowNull: true, defaultValue: null },
    c_institucional: { type: DataTypes.STRING(191), allowNull: true, defaultValue: null },
    c_personal: { type: DataTypes.STRING(191), allowNull: true, defaultValue: null },
    telefono_casa: { type: DataTypes.STRING(191), allowNull: true, defaultValue: null },
    celular: { type: DataTypes.STRING(191), allowNull: true, defaultValue: null },
    nacionalidad: { type: DataTypes.STRING(191), allowNull: true, defaultValue: null },
    observaciones: { type: DataTypes.STRING(191), allowNull: true, defaultValue: null },
    registro: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 0 },
    verificacion: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 0 },
    presenta_version_larga: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 0 },
    created_at: { type: DataTypes.DATE, allowNull: true, defaultValue: null },
    updated_at: { type: DataTypes.DATE, allowNull: true, defaultValue: null },
    deleted_at: { type: DataTypes.DATE, allowNull: true, defaultValue: null },
  }, {
    timestamps: false,  // Desactiva `createdAt` y `updatedAt`
});
  
Servidor.belongsTo(Dependencia, { foreignKey: 'tipo_dependencia', as: 'dependencia' });
Servidor.belongsTo(Direccion, { foreignKey: 'tipo_direccion', as: 'direccion' });
//Servidor.hasMany(Declaraciones, { foreignKey: 'servidor_publico_id', as: 'declaranet-v2.declaraciones' });