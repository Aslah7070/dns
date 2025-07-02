import { create } from "zustand";
import handleAsync from "../utils/handleError.utils";
import axiosInstance from "../services/api";
import { IDatas, itemDetailes, MenuItemType } from "../../../type/types";


export interface IMenu{
    isSucces: boolean
    loading: boolean,
    error: string | null,
    name:string
    description:string
    menu:IDatas[]
    selectMenu:MenuItemType[]
    activeTab: string | null;
setActiveTab: (id: string | null) => void;
    createMenu:(val:Omit<IDatas, "_id">)=>Promise<IDatas|null>
    createMenuItem:(val:Omit<itemDetailes, "menuId">,menuId:string|null)=>Promise<itemDetailes|null>
    findMenuItems:(id:string)=>Promise<itemDetailes|null>
    findMenu:()=>Promise<itemDetailes|null>
}



export const useMenuStore = create<IMenu>((set) => ({
  loading: false,
  error: null,
  isSucces: false,
  name: "",
  description: "",
  menu: [],
  selectMenu:[],
   activeTab: null, // <-- NEW STATE
  setActiveTab: (id) => set({ activeTab: id }), // <-- NEW SETTER


  createMenu: async (values:Omit<IDatas, "_id">) => {
    set({ loading: true, error: null });

    const result = await handleAsync(async () => {
      const response = await axiosInstance.post("/menu/create", values);
      return response.data;
    });

    if (result) {
      const items = await handleAsync(async () => {
        const response = await axiosInstance.get("/menu/");
        return response.data;
      });

      if (items) {
        const data = items.allMenu;
      
        set({
          menu: data,
          loading: false,
          error: null,
          isSucces: true,
        });
        return items.data;
      } else {
        set({
          error: "Fetching workspace failed",
          loading: false,
          isSucces: false,

        });
        return null;
      }
    } else {
      set({
        error: "Menu creation failed",
        isSucces: false,
        loading: false
      });
      return null;
    }
  },
  findMenu:async()=>{
    const result=await handleAsync(async()=>{
        const response=await axiosInstance.get("/menu/")
         return response.data;
    })
  if (result) {
        const data = result.allMenu;
      
        set({
          menu: data,
          loading: false,
          error: null,
          isSucces: true,
        });
        return result.data;
      } else {
        set({
          error: "Fetching workspace failed",
          loading: false,
          isSucces: false,

        });
        return null;
      }

  },
   createMenuItem: async (itemDetailes: Omit<itemDetailes,"menuId">,menuId:string|null) => {
        
            set({ loading: true })
            const result = await handleAsync(async () => {
      const response = await axiosInstance.post("/menu/createLists",{ itemDetailes,menuId});
      return response.data;
    });

    

   if (result) {
    set({ loading: false })
      const items = await handleAsync(async () => {
        const response = await axiosInstance.get(`/menu/lists/${menuId}`);
        return response.data;
      });
      if(items){
        console.log("ddee",items);
        
        set({ loading: false,selectMenu:items.menuItem })

        return items
      }
            set({ loading: false })

    }
},
findMenuItems:async (id:string) => {
        
            set({ loading: true })
            const result = await handleAsync(async () => {
      const response = await axiosInstance.get(`/menu/lists/${id}`);
      return response.data;
    });
    if(result){
           
        set({ loading: false,selectMenu:result.menuItem })

        return result
    }
    return null

}
    
}));
