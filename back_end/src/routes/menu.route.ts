import express from "express"
import errorCatch from "../middleware.ts/trycatch.middleware"
import { createMenu, getAllMenu } from "../controlls/menu.controlls"
import { createLists, getMenuLists } from "../controlls/menu.lists.controlls"

const menu=express.Router()


.post("/create",errorCatch(createMenu))
.post("/createLists",errorCatch(createLists))
.get("/",errorCatch(getAllMenu))
.get("/lists/:id",errorCatch(getMenuLists))



export {menu}