import { Category } from "./Category";
import { Product } from "./Product";

export class Store {
  id: string;

  type: string;

  title: string;

  icon: string;

  description?: string;

  products: Product[];

  categories: Category[];
}
