import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProductFilter } from '../viewmodel/IProductFilter';

@Injectable({ providedIn: 'root' })
export  class ProductFilterService {
  private FilterData = new Subject<IProductFilter>();

  SetFilterValue(FilterData: IProductFilter) {
    this.FilterData.next(FilterData);
  }

  GetFilterValue(): Observable<IProductFilter> {
   return this.FilterData.asObservable();
  }

}
