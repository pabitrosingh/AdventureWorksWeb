import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DBrepositoryService } from '../services/dbrepository.service';
import { IProductDetails } from '../viewmodel/IProductDetails';
import { environment } from 'src/environments/environment';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProductFilterService } from '../services/ProductFilter.service';
import { IProductFilter } from '../viewmodel/IProductFilter';

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
    this._ProductFilterService.GetFilterValue().subscribe(filterData => {
      console.log(filterData);
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

  private GetProductDetails(filterData: IProductFilter): void {

    const DataToPost = new FormData();
    DataToPost.append('NameProductNumber', this.IDTxtSearch);
    DataToPost.append('ProductLine', filterData.ProductLine);
    DataToPost.append('Style', filterData.Style);
    DataToPost.append('Class', filterData.Class);
    DataToPost.append('Color', filterData.Color);
    DataToPost.append('Category', filterData.Category);

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
}
