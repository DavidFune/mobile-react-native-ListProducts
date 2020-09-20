import { ProductData } from "../../produc-card/types/ProductData";
export class ProductsListData {
    constructor(data:Partial<ProductsListData>) {
        Object.assign(this,data)
    }

    docs!: ProductData[];
    total?: number
    limit?: number
    page?: number
    pages?: number


}