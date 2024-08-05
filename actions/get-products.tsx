import {Product} from "@/types";
import queryString from 'query-string';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query{
    categoryId?:string
    brandId?:string
    sizeId?:string
    isFeatured?:boolean
}

const getProducts = async (query:Query) :Promise<Product[]> =>{
    const url = queryString.stringifyUrl({
        url : URL,
        query:{
            categoryId:query.categoryId,
            brandId:query.brandId,
            sizeId:query.sizeId,
            isFeatured : query.isFeatured
        }
    })

    const res= await fetch(url)
    return res.json();
}

export default getProducts