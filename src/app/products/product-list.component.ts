import { Component, OnInit } from '@angular/core';
import { IProduct  } from './product'

@Component({
  selector: 'pm-products',
  moduleId : module.id,
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent {
  title: string = 'product list';
  products: IProduct[] = [
    {
      productId: 1253,
      productName: 'codex',
      releaseData: 'evers',
      price: 12.23,
      description: 'Codex for use in surveys',
      starRating:5,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYabhz6CJg_75n1FlUWsdr3pC8PZ1tICFMZyKgVsRu6xIkhm5bd8X8Q'
    },{
      productId: 1253,
      productName: 'rudex',
      releaseData: 'evers',
      price: 12.23,
      description: 'Codex for use in surveys',
      starRating:5,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYabhz6CJg_75n1FlUWsdr3pC8PZ1tICFMZyKgVsRu6xIkhm5bd8X8Q'
    }];
  showImg: boolean = false;
  filterList: string = 'cart';

  toggleImg(): void {
    this.showImg = !this.showImg;
  }

  ngOnInit():void{
    console.log("OnInitLifecycle");
  }
}


    