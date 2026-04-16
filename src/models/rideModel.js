import { DataTypes, Sequelize} from "sequelize";
import sequelize from "../config/db.js";

const RideModel = sequelize.define("Ride",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
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

