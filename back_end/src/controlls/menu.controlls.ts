import { NextFunction,Response,Request} from "express"
import { HttpStatus } from "../constants/status.constant"
import { Menu } from "../models/menu.model"



export const createMenu = async (req: Request, res: Response) => {
    const { name, description } = req.body
    if (!name || !description) {
        res.status(HttpStatus.NOT_FOUND).json({success:false,message:"data not found"})
    }
    const newMenu = new Menu({ name, description })
    await newMenu.save()
 res.status(HttpStatus.OK).json({success:true,message:"menu created"})
 return
}

export const getAllMenu = async (req: Request, res: Response) => {

    const allMenu = await Menu.find({ isDeleted: false })

    if (!allMenu) {
         res.status(HttpStatus.NOT_FOUND).json({success:false,message:"not found menu"})
         return
    }
    res.status(HttpStatus.OK).json({ success: true, message: "All menu", allMenu })
}



export const getMenuById = async (req: Request, res: Response) => {
    const { id } = req.params
    if (!id) {
        return res.status(HttpStatus.NOT_FOUND).json({success:false,message:"id not found"})
    }
    const menu = await Menu.findById(id)
    if (!menu) {
      return res.status(HttpStatus.NOT_FOUND).json({success:false,message:"menu not found"})

    }
    res.status(200).json({ error: false, message: "Menu By Id", menu })
}
