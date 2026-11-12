import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 private products: Product[] = [
  {
    id: 1,
    name: 'Laptop',
    price: 55000,
    category: 'Electronics',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600'
  },
  {
    id: 2,
    name: 'Mobile Phone',
    price: 25000,
    category: 'Electronics',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600'
  },
  {
    id: 3,
    name: 'Headphones',
    price: 3000,
    category: 'Accessories',
    inStock: false,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600'
  }
];

  getProducts(): Product[] {
    return this.products;
  }
}