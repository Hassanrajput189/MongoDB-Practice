import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name:String,
    salary: Number,
    language:String,
    city:String,
    isManager: Boolean
});

export const company = mongoose.model('company', companySchema);

