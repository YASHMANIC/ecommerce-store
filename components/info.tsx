"use client"

import {Product} from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import {ShoppingCart} from "lucide-react";
import useCart from "@/hooks/use-cart";
import {MouseEventHandler} from "react";

interface InfoProps{
    data : Product
}

const Info : React.FC<InfoProps> = ({
    data
                                    }) => {
    const cart = useCart();
    const onAddToCart :MouseEventHandler<HTMLButtonElement> = (event) =>{
        event.stopPropagation();
        cart.addItem(data)
    }
    return(
        <div>
            <h1 className="p-5 text-3xl font-bold text-gray-700">{data.name}</h1>
            <div className="p-5 mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-950">
                    <Currency value={data?.price}/>
                </p>
            </div>
            <hr className="my-4"/>
            <div className="p-5 flex flex-col gap-y-4">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">
                        <div>Quantity: {data?.size?.name}</div>
                    </h3>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">
                        Brand: <span>{data?.brand?.name}</span>
                    </h3>
                </div>
            </div>
            <div className="p-5 mt-10 flex items-center gap-x-3">
                <Button onClick={onAddToCart} className="flex items-center gap-x-3">
                    Add to cart
                    <ShoppingCart/>
                </Button>
            </div>
        </div>
    );
}

export default Info
