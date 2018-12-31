import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IDepartment } from '../viewmodel/department';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DbrepositoryService {

  private readonly BASE_URL = environment.API_ENDPOINT;

  constructor(private http: HttpClient) {  }

    public GetDepartment(): Observable<IDepartment[]> {
          return this.http.get<IDepartment[]>(this.BASE_URL + '/Department/Get');
    }
}
