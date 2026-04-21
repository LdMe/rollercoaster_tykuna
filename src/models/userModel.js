import { DataTypes, Sequelize} from "sequelize";
import sequelize from "../config/db.js";

const UserModel = sequelize.define("Ride",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    dateOfBirth:{
        type:DataTypes.DATEONLY,
    },
    role:{
        type: DataTypes.ENUM("worker","admin"),
        default:"worker"
    },
    email: {
        type:DataTypes.STRING,
        validate:{
            isEmail: true
        }
    },
    password: {
        type:DataTypes.STRING,
        allowNull:false
    },
    phone: DataTypes.STRING,

}, {
tableName: 'users', // nombre real de la tabla en la base de datos
timestamps: true,
// añade automáticamente createdAt y updatedAt
})

export default UserModel;

