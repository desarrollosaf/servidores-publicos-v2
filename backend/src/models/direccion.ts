import { DataTypes } from "sequelize";
import sequelize from "../database/connection";
import { Dependencia } from "./dependencia";

export const Direccion = sequelize.define("tipo_direccion", {
    id: { type: DataTypes.BIGINT.UNSIGNED, primaryKey: true, autoIncrement: true },
    c_presupDir: { type: DataTypes.TINYINT, allowNull: false },
    nombre: { type: DataTypes.STRING(191), allowNull: false },
    id_Dependencia: { type: DataTypes.BIGINT.UNSIGNED, references: {  model: Dependencia, key: 'id' },  allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: true, defaultValue: null },
    updated_at: { type: DataTypes.DATE, allowNull: true, defaultValue: null },
    deleted_at: { type: DataTypes.DATE, allowNull: true, defaultValue: null },
  },{ 
    timestamps: false,  
});

Direccion.belongsTo(Dependencia, { foreignKey: 'id_Dependencia', as: 'dependencias' });