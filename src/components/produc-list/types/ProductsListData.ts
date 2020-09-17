import { ProductData } from "../../produc-card/types/ProductData";
export class ProductsListData {
    constructor(data:Partial<ProductsListData>) {
        Object.assign(this,data)
    }

    docs: ProductData | undefined
    total: number | undefined
    limit: number | undefined
    page: number | undefined
    pages: number | undefined


}