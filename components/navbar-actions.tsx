"use client"

import Button from "@/components/ui/button";
import {ShoppingBag} from "lucide-react";
import {useEffect, useState} from "react";
import useCart from "@/hooks/use-cart";
import {useRouter} from "next/navigation";

const NavbarActions = () =>{
    const [isMounted,setIsMounted] = useState(false)
     const router = useRouter()
     const cart = useCart()
    useEffect(() => {
        setIsMounted(true)
    }, []);
    if(!isMounted)
    {
        return null;
    }

    return (
        <div onClick={() => router.push('/cart')} className="ml-auto flex items-center gap-x-4">
            <Button className="flex items-center rounded-md bg-black px-4 py-2">
                <ShoppingBag size={20}
                             color="white"/>
                <span className="ml-2 text-sm font-medium text-white">
                  {cart.items.length}
                </span>
            </Button>
        </div>
    )
}
export default NavbarActions