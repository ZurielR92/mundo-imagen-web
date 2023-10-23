export interface IProduct {
    title: string;
    img: string;
    altImg: string;
    shortDescription: string;
    priceConfig: productPriceConfigInterface;
}

export interface productPriceConfigInterface {
    priceType: priceType
    price: number;
    queantity: number;
    quantities?:string[]
}

export type priceType = |'Precio Fijo' | 'Precio por Cm2'