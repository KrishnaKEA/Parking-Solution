import mongoose from "mongoose";
const { Schema, model} = mongoose;

const parkingAreaSchema = new Schema({
    name: { type: String, unique: true },
    location: { type: String },
    slot: [{
        number: { type: Number },
        startTime: { type: Date, default: null },
        endTime: { type: Date, default: null }
   }]
    
});

const parkingArea = model('parkingArea', parkingAreaSchema);

export default parkingArea;