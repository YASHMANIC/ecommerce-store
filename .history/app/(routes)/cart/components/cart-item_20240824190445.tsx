"use client"

import {Product} from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import {Minus, Plus, X} from "lucide-react";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import {useEffect, useState} from "react";
import Button from "@/components/ui/button";
interface CartItemProps{
    data:Product
}
const CartItem: React.FC<CartItemProps> = ({
    data
                                           }) => {
    const cart = useCart();
    const items = useCart((state) => state.items)
    const onRemove = () => {
        cart.removeItem(data.id)
        localStorage.removeItem(`${data.name}`)
    }
    // const intialData = () => {
    //     let CartQuantity : any = localStorage.getItem(`${data.name}`);
    //     if(CartQuantity === 1){
    //         return 1;
    //     }
    //     return JSON.parse(CartQuantity)
    // }
    // const [add,setAdd] = useState( intialData() ?? 1);
    // useEffect(() => {
    //     localStorage.setItem(`${data.name}`,JSON.stringify(add))
    // }, [add]);
    // const onPlus = () => {
    //      {add < 10 ? setAdd(add + 1) : setAdd(add)}
    // }
    // const onMinus = () => {
    //     {add > 1 ? setAdd(add - 1) : setAdd(add)}
    // }
    return(
       <li className="flex py-6 border-b">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image src={data.images[0].url} fill alt={"Images"}/>
            </div>
           <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                <IconButton onClick={onRemove} icon={<X size={15} />} />
                </div>
               <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <p className="texl-xl font-semibold text-black">{data.name}</p>
                    </div>
                   <div className="flex mt-1 text-sm">
                       <p className="text-gray-600">{data.brand.name}</p>
                       <p className="text-gray-600 ml-4 border-l border-gray-200 pl-4">{data.size.name}</p>
                   </div>
                   <Currency value={data.price} />
                   {/*<div className="flex items-center mt-20 gap-x-2">*/}
                   {/*    <Button disabled={add === 1} onClick={onMinus}><Minus/></Button>*/}
                   {/*    <span className="font-semibold text-lg">{add}</span>*/}
                   {/*    <Button disabled={add === 10} onClick={onPlus} ><Plus/></Button>*/}
                   {/*</div>*/}
               </div>
           </div>
       </li>
    );
}

export default CartItem