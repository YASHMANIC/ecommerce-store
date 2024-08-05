import {Product} from "@/types";
import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import toast from "react-hot-toast";


interface CartStore{
    items: Product[];
    val:number;
    incVal : (data: Product) => void;
}

const useCartVal = create(
    persist<CartStore>((set,get) => ({
        items:[],
        val:0,
        incVal:(data:Product) => {
            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.id === data.id);
            if(existingItem){
              let total = Number(data.price) + get().val
            }
            set({items:[...get().items,data]})
        },
    }),{
        name:"cart-value",
        storage:createJSONStorage(() => localStorage)
    })
)

export default useCartVal