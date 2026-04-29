import { DataTypes, Sequelize} from "sequelize";
import sequelize from "../config/db.js";
/**
 * @typedef {Object} RideCategory
 * @memberof Models
 * @property {number} id - identificador de categoría
 * @property {string} name - nombre de la categoría
 * @example 
 * const rideCategoryModel = {
 * id: 1,
 * name: "montaña rusa"
 * }
 */
const RideCategoryModel = sequelize.define("RideCategory",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },

}, {
tableName: 'rideCategories', // nombre real de la tabla en la base de datos
timestamps: true,
// añade automáticamente createdAt y updatedAt
})

export default RideCategoryModel;

