import { DataTypes, Sequelize} from "sequelize";
import sequelize from "../config/db.js";

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

