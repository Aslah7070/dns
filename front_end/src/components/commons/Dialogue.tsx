
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
import { menuschema } from "@/lib/schema/menu.schema"
import { IDatas } from "../../../type/types"
export type MenuInput = Omit<IDatas, "_id">;
export function DialogDemo() {
    const {createMenu}=useMenuStore()
 const formik = useFormik<MenuInput>({
    initialValues: {
      name: "",
      description: ""
    },
    validationSchema:menuschema,
   
    onSubmit: async(values) => {
        
      await createMenu(values)
      console.log(values)
    }
  })
    
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
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm">{formik.errors.name}</p>
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
