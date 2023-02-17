import mongoose from "mongoose";
import { TPoint, Point, TExemplaire, Exemplaire } from "./api/models/point";

console.log ("URL " + process.env.MONGO_DB_NAME)

const url = 'mongodb+srv://project_test:94hwAsMoM0E98wpo@cluster0.wihxaix.mongodb.net/' + process.env.MONGO_DB_NAME

export const connectToDb = async () => {
    try {
        await mongoose.connect(url);
    } catch (err) {
        console.error(err);
        process.exit(1);
    } 
};
