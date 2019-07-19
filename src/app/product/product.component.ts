import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DBrepositoryService } from '../services/dbrepository.service';
import { IProductDetails } from '../viewmodel/IProductDetails';
import { environment } from 'src/environments/environment';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ProductDetailsList: IProductDetails[];
  SingleProduct: IProductDetails;

  BASE_URL = environment.API_ENDPOINT;
  @ViewChild('IDProductDetailsModelRef', { static: false}) ModalRef: ElementRef;
  constructor(private _Router: Router ,
              private DB: DBrepositoryService,
              private modalService: NgbModal,
              ) { }

  ngOnInit() {

    let DataToPost  = new FormData();
    DataToPost.append('NameProductNumber', ' ');
    DataToPost.append('ProductLine', ' ');
    DataToPost.append('Style', ' ');
    DataToPost.append('Class', ' ');

    this.DB.GetProductDetailsFromServer(DataToPost)
      .subscribe(resp => {
        if (resp.length > 0) {
          this.ProductDetailsList = resp;
        }
      },
        error => {
          console.log(error);
        });
   }

   public BtnViewDetails(ProductID: number) {
    this.SingleProduct = this.ProductDetailsList.find(item => {
     return item.ProductID === ProductID;
     });
     this.modalService.open(this.ModalRef, { size: 'lg', backdrop: 'static' });
   }


   public BtnAdtoCart() {

   }
}
