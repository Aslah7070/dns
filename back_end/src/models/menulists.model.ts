import mongoose, { Schema, Document } from "mongoose";
import { IMenulists } from "../types/type";


const MenuItemSchema = new Schema<IMenulists>(
    {
        itemName: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        menuId: { type: Schema.Types.ObjectId, ref: "Menu", required: true },
        isDeleted: { type: Boolean, required: true, default: false }
    },
    {
        timestamps: true,
    }
);

export const MenuItem = mongoose.model<IMenulists>("MenuItem", MenuItemSchema);
