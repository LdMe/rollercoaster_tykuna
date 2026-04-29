import { DataTypes, Sequelize} from "sequelize";
import sequelize from "../config/db.js";
/**
 * @namespace Models
 */
/**
 * @typedef {Object} Ride
 * @memberof Models
 * @property {number} id - identificador de la atraccion
 * @property {string} name - nombre de la atraccion
 * @property {number} categoryId - identificador de la categoría
 * @property {Date} creationDate - fecha de creación de la atraccion
 * @property {number} durationSeconds - duración de la atraccion en segundos
 * @property {number} minAge - edad minima
 * @property {number} minHeight - altura minima
 * @property {string} status - estado de la atraccion
 * 
 * @example
 * const rideModel = {
 * id: 1,
 * name: "montaña rusa",
 * categoryId: 1,
 * creationDate: "2022-01-01",
 * durationSeconds: 60,
 * minAge: 10,
 * minHeight: 120,
 * status: "open"
 }
 */
const RideModel = sequelize.define("Ride",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    categoryId:{
        type:DataTypes.INTEGER,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    creationDate:{
        type:DataTypes.DATEONLY,
        defaultValue:Sequelize.NOW
    },
    durationSeconds:{
        type:DataTypes.INTEGER,
        validate:{
            min:10
        }
    },
    minAge:DataTypes.INTEGER,
    minHeight: DataTypes.INTEGER,
    status:{
        type:DataTypes.ENUM("open","closed","testing"),
        defaultValue: "closed"
    }

}, {
tableName: 'rides', // nombre real de la tabla en la base de datos
timestamps: true,
// añade automáticamente createdAt y updatedAt
})

export default RideModel;

