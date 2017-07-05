import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct  } from './product';
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'pm-products',
  moduleId : module.id,
  templateUrl: 'product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  title: string = 'Product Detail';
  product: IProduct;

  constructor(private _route: ActivatedRoute,private _router: Router){
  }

  ngOnInit():void{
    let id = +this._route.snapshot.params['id'];
    this.title += ` : ${id}`;
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}


    