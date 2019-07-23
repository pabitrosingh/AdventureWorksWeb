export interface IProductFilter {
  ProductLine: string;
  Style: string;
  Class: string;
  Color: string;
  Category: string;
  NameProductNumber: string;
}

export class ProductFilter implements IProductFilter {
  ProductLine: string;  Style: string;
  Class: string;
  Color: string;
  Category: string;
  NameProductNumber: string;

}
