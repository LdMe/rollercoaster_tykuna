import { DataTypes} from "sequelize";
import sequelize from "../config/db.js";

const TicketTypeModel = sequelize.define("TicketType",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    cost: {
        type:DataTypes.INTEGER
    }

}, {
tableName: 'ticketTypes', // nombre real de la tabla en la base de datos
timestamps: true,
// añade automáticamente createdAt y updatedAt
})

export default TicketTypeModel;

