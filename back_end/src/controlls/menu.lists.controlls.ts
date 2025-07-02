import { HttpStatus } from "../constants/status.constant";
import {MenuItem} from "../models/menulists.model";
import { Request, Response, NextFunction } from 'express'



export const createLists = async (req: Request, res: Response ) => {
    const {  menuId } = req.body
    const {itemName, description, price,}=req.body.itemDetailes
    console.log("ee",req.body);
    
    if (!itemName || !description || !price || !menuId) {
        res.status(HttpStatus.NOT_FOUND).json({success:false,message:"need full credentials"})
        return 

    }
    const newItem = new MenuItem({ itemName, description, price, menuId })
    await newItem.save()
    res.status(HttpStatus.OK).json({ success:true, message: "New menu item added successfully",newItem })
}

export const getMenuLists = async (req: Request, res: Response) => {
    const { id } = req.params
    console.log("id",id);
    
    if (!id) {
        res.status(HttpStatus.NOT_FOUND).json({success:false,message:"id not found"})
        return 

    }
   const menuItem = await MenuItem.find({
      menuId: id,
      isDeleted: false
    }).populate({
      path: "menuId",
      select: "name" 
    });
    if (!menuItem) {
       
          res.status(HttpStatus.BAD_REQUEST).json({success:false,message:"Menu item not found"})
        return 

    }
      res.status(HttpStatus.OK).json({success:true,message: "menu items",menuItem})
        return 
  
}