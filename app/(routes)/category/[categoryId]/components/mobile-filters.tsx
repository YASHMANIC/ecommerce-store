"use client"

import {Brand, Size} from "@/types";
import Button from "@/components/ui/button";
import {Plus, X} from "lucide-react";
import {useState} from "react";
import {Dialog} from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";
import Filter from "@/app/(routes)/category/[categoryId]/components/filter";

interface MobileFiltersProps {
    sizes:Size[]
    brands:Brand[]
}
const MobileFilters : React.FC<MobileFiltersProps> = ({
    sizes,brands
                                                      }) => {
    const[open,setOpen]=useState(false);
    const onOpen = () => {
        setOpen(true)
        console.log("OnOpen")
    }
    const onClose = () => {
        setOpen(false)
    };
    return (
        <>
            <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
                Filters
                <Plus size={20}/>
            </Button>
             <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
                {/*Background*/}
                <div className="flex inset-0 bg-black bg-opacity-100" />
                 <div className="fixed inset-0 flex z-40">
                     <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl ">
                         {/*Close Button*/}
                         <div className="flex items-center justify-end px-4">
                            <IconButton icon={<X size={15}/>} onClick={onClose}/>
                         </div>
                         <div className="p-4">
                             <Filter valueKey = 'sizeId'
                            name="Sizes"
                            data= {sizes}
                            />
                             <Filter valueKey = 'brandId'
                            name="Brands"
                            data= {brands}
                            />
                         </div>
                     </Dialog.Panel>
                 </div>
            </Dialog>
        </>
    )
}

export default MobileFilters;