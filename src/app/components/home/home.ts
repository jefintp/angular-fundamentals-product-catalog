import { Component,inject } from '@angular/core';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  title = 'Angular Fundamentals';
  description = 'Learning Angular through practical implementation';
  version = 22;
  buttonText = 'Buy Now';
  isDisabled = false;
  // imageUrl = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500';
  private productService = inject(ProductService);

  products: Product[] = this.productService.getProducts();

  }


