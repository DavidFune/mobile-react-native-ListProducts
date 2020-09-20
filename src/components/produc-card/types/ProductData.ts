
export class ProductData {
    constructor(data:Partial<ProductData>) {
        Object.assign(this,data)
    }
    _id: string | undefined
    title: string | undefined
    description: string | undefined
    url: string | undefined
    createdAt: string | undefined
    _v: string | undefined






}