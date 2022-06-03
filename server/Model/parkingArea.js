import mongoose from "mongoose";
const { Schema, model} = mongoose;

const parkingAreaSchema = new Schema({
    name: { type: String, unique: true },
    location: { type: String },
    lat: { type: Number },
    lon: { type: Number },
    slot: [{
        number: { type: Number },
        startTime: { type: Date, default: null },
        endTime: { type: Date, default: null },
        isFree: {type:Boolean,default:true}
       
   }]
   });

const parkingArea = model('parkingArea', parkingAreaSchema);

export default parkingArea;
