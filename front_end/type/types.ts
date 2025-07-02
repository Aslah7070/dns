import { IMenu } from "@/lib/store/useMenuStore"

export interface IDatas{
    name:string
    description:string
    _id:string
}


export interface MenuStateResponse{
success:boolean
    menu:IMenu
    email:string
}


export interface MenuItemType {
    _id: string;
    itemName: string;
    description: string;
    price: number;
    menuId: IDatas;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface itemDetailes{
    itemName:string,
    description:string,
    price:number
    menuId:string
}

