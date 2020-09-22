
export class ProductData {
    constructor(data:Partial<ProductData>) {
        Object.assign(this,data)
    }
    _id: string
    title?: string
    description?: string
    url?: string
    createdAt?: string
    _v?: string






}