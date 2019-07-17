import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DBrepositoryService } from '../services/dbrepository.service';
import { IProductDetails } from '../viewmodel/IProductDetails';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ProductDetails: IProductDetails[];
  BASE_URL = environment.API_ENDPOINT;

  constructor(private _Router: Router , private DB: DBrepositoryService) { }

  ngOnInit() {

    let DataToPost  = new FormData();
    DataToPost.append('NameProductNumber', ' ');
    DataToPost.append('ProductLine', ' ');
    DataToPost.append('Style', ' ');
    DataToPost.append('Class', ' ');

    this.DB.GetProductDetailsFromServer(DataToPost)
      .subscribe(resp => {
        if (resp.length > 0) {
          this.ProductDetails = resp;
        }
      },
        error => {
          console.log(error);
        });
   }
}
