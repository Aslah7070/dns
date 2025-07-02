
import { Types,Document } from "mongoose";
export interface IMenu extends Document {
    name: string;
    description: string;
    isDeleted: boolean;
}



export interface IMenulists extends Document {
    itemName: string;
    description: string;
    price: number;
    menuId: Types.ObjectId  
    isDeleted: boolean
}