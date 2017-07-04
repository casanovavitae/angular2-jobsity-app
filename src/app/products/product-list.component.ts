import { Component, OnInit } from '@angular/core';
import { IProduct  } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  moduleId : module.id,
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent {
  title: string = 'Product List';
  errorMessage: string;
  products: IProduct[];
  showImg: boolean = false;
  filterList: string = '';

  constructor(private _productService: ProductService){
  }

  toggleImg(): void {
    this.showImg = !this.showImg;
  }

  ngOnInit():void{
    this._productService.getProducts()
    .subscribe(products => this.products = products,
    error => this.errorMessage = <any>error);
  }

  onRatingClicked(message: string): void{
    this.title = 'Product List: ' + message;
  }
}


    