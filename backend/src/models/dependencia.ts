import { DataTypes } from "sequelize";
import sequelize from "../database/connection";

export const Dependencia = sequelize.define("tipo_dependencia", {
    id: { type: DataTypes.BIGINT.UNSIGNED, primaryKey: true, autoIncrement: true },
    c_presupDep: { type: DataTypes.TINYINT, allowNull: false },
    nombre: { type: DataTypes.STRING(191), allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: true, defaultValue: null },
    updated_at: { type: DataTypes.DATE, allowNull: true, defaultValue: null },
    deleted_at: { type: DataTypes.DATE, allowNull: true, defaultValue: null },
  },{ 
    timestamps: false,  
});