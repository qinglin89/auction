import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-mange',
  templateUrl: './stock-mange.component.html',
  styleUrls: ['./stock-mange.component.css']
})
export class StockMangeComponent implements OnInit {
  private stocks:Array<Stock>;
  constructor() { }

  ngOnInit() {
    this.stocks = [];
    this.stocks = [
      new Stock(1,"diyizhigupiao", 1.99, 3.5, "this is the first", ["a","b"]),
    ];
  }

}

class Stock {
  constructor(
    public id:number,
    public name:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories: Array<string>){}
}
