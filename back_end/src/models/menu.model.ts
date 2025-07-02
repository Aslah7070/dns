import mongoose, { Schema } from "mongoose";
import { IMenu } from "../types/type";



const menuSchema: Schema<IMenu> = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    isDeleted: { type: Boolean, required: true, default: false }
}, { timestamps: true });

export const Menu = mongoose.model<IMenu>("Menu", menuSchema);
