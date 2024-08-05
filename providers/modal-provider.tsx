"use client"
import PreviewModal from "@/components/preview-modal";
import {useEffect, useState} from "react";

const ModalProvider = () =>{
    const [ismounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if(!ismounted)
    {
        return null;
    }
        return (
            <>
                <PreviewModal/>
            </>
        );
}
export default ModalProvider;