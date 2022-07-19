import mongoose from "mongoose";


const DeliveryModel = mongoose.model('DeliveryData',mongoose.Schema(),'DeliveryData');
const DiningModel  = mongoose.model('DiningOutData',mongoose.Schema(),'DiningOutData');
const NightModel = mongoose.model('NightLifeData',mongoose.Schema(),'NightLifeData');

export {DeliveryModel,DiningModel,NightModel};