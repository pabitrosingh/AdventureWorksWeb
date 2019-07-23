import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DBrepositoryService } from '../services/dbrepository.service';
import { IProductDetails } from '../viewmodel/IProductDetails';
import { environment } from 'src/environments/environment';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProductFilterService } from '../services/ProductFilter.service';
import { ProductFilter } from '../viewmodel/IProductFilter';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ProductDetailsList: IProductDetails[];
  SingleProduct: IProductDetails;
  currentRate = 4;
  BASE_URL = environment.API_ENDPOINT;
  IDTxtSearch: string;
  @ViewChild('IDProductDetailsModelRef', { static: false }) ModalRef: ElementRef;

  constructor(private _Router: Router,
    private DB: DBrepositoryService,
    private modalService: NgbModal,
    private _ProductFilterService: ProductFilterService) { }

  ngOnInit() {
    this.GetProductDetails();
    this._ProductFilterService.GetFilterValue().subscribe(filterData => {
        this.GetProductDetails(filterData);
    });
  }

  public BtnViewDetails(ProductID: number): void {
    this.SingleProduct = this.ProductDetailsList.find(item => {
      return item.ProductID === ProductID;
    });
    this.modalService.open(this.ModalRef, { size: 'lg', backdrop: 'static' });
  }
  public BtnAdtoCart(): void {

  }
  public BtnSearchClick(): void {
    this.GetProductDetails();
  }
  private GetProductDetails(filterData?: ProductFilter): void {
    if (this.IDTxtSearch != null) {
      const _filterData =  new ProductFilter();
      _filterData.NameProductNumber = this.IDTxtSearch;
      this.DB.GetProductDetailsFromServer(_filterData)
      .subscribe(resp => {
        if (resp.length > 0) {
          this.ProductDetailsList = resp;
        }
      },
        error => {
          console.log(error);
        });
    } else {
      this.DB.GetProductDetailsFromServer(filterData)
      .subscribe(resp => {
        if (resp.length > 0) {
          this.ProductDetailsList = resp;
        }
      },
        error => {
          console.log(error);
        });
    }


  }
}
