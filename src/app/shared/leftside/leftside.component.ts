import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductFilterService } from 'src/app/services/ProductFilter.service';
import { IProductFilter } from 'src/app/viewmodel/IProductFilter';


@Component({
  selector: 'app-leftside',
  templateUrl: './leftside.component.html',
  styleUrls: ['./leftside.component.css']
})
export class LeftsideComponent implements OnInit {

  public FilterData: { ProductLine: string ,  Style: string,  Class: string, Color: string, Category: string};

  constructor(public _Router: Router , private _ProductFilterService: ProductFilterService) { }
  ngOnInit() {
  }

  onRadioProductLineChnage(value: string) {
    this.FilterData.ProductLine = value;
    this._ProductFilterService.SetFilterValue(this.FilterData);
  }
  onRadioStyleChnage(value: string) {
    this.FilterData.Style = value;
    this._ProductFilterService.SetFilterValue(this.FilterData);
  }
  onRadioClassChnage(value: string) {
    this.FilterData.Class = value;
    this._ProductFilterService.SetFilterValue(this.FilterData);
  }
  onRadioColorChnage(value: string) {
    this.FilterData.Color = value;
    this._ProductFilterService.SetFilterValue(this.FilterData);
  }

  onRadioCategoryChnage(value: string) {
    this.FilterData.Category = value;
    this._ProductFilterService.SetFilterValue(this.FilterData);
  }
}
