/* eslint-disable react-hooks/exhaustive-deps */

"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShimmerButton } from "../magicui/shimmer-button"
import {  useMenuStore } from "@/lib/store/useMenuStore"
import { useFormik } from 'formik';

import { IDatas, itemDetailes } from "../../../type/types"
import { useEffect } from "react"
export type MenuInput = Omit<IDatas, "_id">;
export function DialogSublists() {
    const {createMenuItem,activeTab,findMenuItems}=useMenuStore()
 const formik = useFormik<Omit<itemDetailes,"menuId">>({
    initialValues: {
      itemName: "",
      description: "",
      price:0
    },
    validationSchema:"",
   
    onSubmit: async(values) => {
        
      await createMenuItem(values,activeTab)
      console.log(values)
    }
  })


  useEffect(()=>{
const display=async()=>{
    if(!activeTab){
        return
    }
     await findMenuItems(activeTab)
}

display()
  },[activeTab])

  if(!activeTab){
    return null
  }
    
  return (
    <Dialog>
  <DialogTrigger asChild>
    <ShimmerButton>Create New</ShimmerButton>
  </DialogTrigger>

  <DialogContent className="sm:max-w-[425px]">
    <form onSubmit={formik.handleSubmit}>
      <DialogHeader>
        <DialogTitle>Create menu</DialogTitle>
        <DialogDescription>
          Make changes to your food menu here. Click save when you re done.
        </DialogDescription>
      </DialogHeader>

      <div className="grid gap-4">
        <div className="grid gap-3">
          <Label htmlFor="itemName">Name</Label>
          <Input
            id="itemName"
            name="itemName"
            value={formik.values.itemName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.itemName && formik.errors.itemName && (
            <p className="text-red-500 text-sm">{formik.errors.itemName}</p>
          )}
        </div>

        <div className="grid gap-3">
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.description && formik.errors.description && (
            <p className="text-red-500 text-sm">{formik.errors.description}</p>
          )}
        </div>
         <div className="grid gap-3">
          <Label htmlFor="price">price</Label>
          <Input
            id="price"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.price && formik.errors.price && (
            <p className="text-red-500 text-sm">{formik.errors.price}</p>
          )}
        </div>
      </div>

      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" className="text-red-700" variant="outline">
            Cancel
          </Button>
        </DialogClose>
        <Button type="submit" className="text-green-700">
          Save changes
        </Button>
      </DialogFooter>
    </form>
  </DialogContent>
</Dialog>
  )
}
