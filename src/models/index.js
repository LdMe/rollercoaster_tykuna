import RideModel from "./rideModel.js";
import RideCategoryModel from "./rideCategoryModel.js";
import TicketModel from "./ticketModel.js";
import TicketTypeModel from "./ticketTypeModel.js";
import UserModel from "./userModel.js";



RideCategoryModel.hasMany(RideModel,{ foreignKey: 'categoryId', as: 'rides' });
RideModel.belongsTo(RideCategoryModel,{ foreignKey: 'categoryId', as: 'category' });

TicketTypeModel.hasMany(TicketModel,{ foreignKey: 'ticketTypeId', as: 'tickets' });
TicketModel.belongsTo(TicketTypeModel,{ foreignKey: 'ticketTypeId', as: 'type' });

UserModel.hasMany(TicketModel,{foreignKey:"userId",as: "tickets"})
TicketModel.belongsTo(UserModel,{foreignKey:"userId",as:"user"});

TicketModel.belongsToMany(RideModel,{through:"ticket_uses_ride",foreignKey:"ticketId", as:"rides_used"})
RideModel.belongsToMany(TicketModel,{through:"ticket_uses_ride",foreignKey:"rideId", as:"tickets_history"})



export {
    RideCategoryModel,
    RideModel
}