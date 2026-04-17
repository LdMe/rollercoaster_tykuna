import { DataTypes,Sequelize} from "sequelize";
import sequelize from "../config/db.js";

const TicketModel = sequelize.define("Ticket",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    ticketTypeId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    boughtAt:{
        type:DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    validityDate:{
        type:DataTypes.DATEONLY,
        defaultValue: Sequelize.NOW
    }

}, {
tableName: 'tickets', // nombre real de la tabla en la base de datos
timestamps: true,
// añade automáticamente createdAt y updatedAt
})

export default TicketModel;

