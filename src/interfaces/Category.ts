import { IProduct } from "./Product"

export interface ICategory {
    code: string,
    type: string,
    name: string,
    shortDescription: string,
    description: string,
    basicPrice: number,
    minQuantity: number,
    url: string,
    displayImage: string,
    altDisplay: string,
    gallery: string[],
    products?: IProduct[]
    FAQs?: IQuestion[]
}

interface IQuestion {
    ask: string
    response: string
}

