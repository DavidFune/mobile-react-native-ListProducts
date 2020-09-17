
export class ProductData {
    constructor(data:Partial<ProductData>) {
        Object.assign(this,data)
    }
    id: string | undefined
    title: string | undefined
    description: string | undefined
    url: string | undefined
    createdAt: string | undefined
    v: string | undefined






}