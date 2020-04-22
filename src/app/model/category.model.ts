import { Product } from './product.model';

export class Category{
    id: number;
    categoryName: string;
    imagePath?: string;
    product: Product[];
    sections?: any;
    sectionsInDb?: any[];

    constructor(id:number, categoryName: string, product:Product[], imagePath: string){
        this.id = id;
        this.categoryName = categoryName;
        this.product = product;
        this.imagePath = imagePath;
    }
}