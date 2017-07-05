import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'ai-star',
  moduleId : module.id,
  templateUrl: 'star.component.html'
})
export class StarComponent {
    
    @Input() rating : number; 
    @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();
    ratingArray: number[];
    title: string = 'Star';

    constructor() {}
    
    ngOnInit():void{
        this.ratingArray = Array(this.rating).fill(1); 
    }

    onClick():void{
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`)
    }

}


    