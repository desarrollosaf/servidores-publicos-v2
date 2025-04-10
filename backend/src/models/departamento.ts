import { DataTypes } from "sequelize";
import sequelize from "../database/connection";
import { Dependencia } from "./dependencia";
import { Direccion } from "./direccion";

export const Departamento = sequelize.define("tipo_departamento", {
    id: { type: DataTypes.BIGINT.UNSIGNED, primaryKey: true, autoIncrement: true },
    c_presupDir: { type: DataTypes.TINYINT, allowNull: false },
    nombre: { type: DataTypes.STRING(191), allowNull: false },
    id_Dependencia: { type: DataTypes.BIGINT.UNSIGNED, references: {  model: Dependencia, key: 'id' },  allowNull: false },
    id_Direccion: { type: DataTypes.BIGINT.UNSIGNED, references: {  model: Direccion, key: 'id' },  allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: true, defaultValue: null },
    updated_at: { type: DataTypes.DATE, allowNull: true, defaultValue: null },
    deleted_at: { type: DataTypes.DATE, allowNull: true, defaultValue: null },
  },{ 
    timestamps: false,  
});

Departamento.belongsTo(Dependencia, { foreignKey: 'id_Dependencia', as: 'dependencia' });
Departamento.belongsTo(Direccion, { foreignKey: 'id_Direccion', as: 'direccion' });