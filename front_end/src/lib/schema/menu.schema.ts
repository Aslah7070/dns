

import * as Yup from 'yup'


export const  menuschema=Yup.object({
      name: Yup.string().required("Name is required"),
      description: Yup.string().required("Description is required")
    })