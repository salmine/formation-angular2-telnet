import { Formation } from './../models/formation';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { environment } from './../../../environments/environment';
@Injectable()
export class FormationService {

  constructor(private http: Http) {


  }

  fetch(): Observable<Formation[]> {
    return this.http.get(`${environment.apiUrl}/formation`).map((res: Response) => res.json());
  }

  save(model: Formation): Observable<Formation> {
    return this.http.post(`${environment.apiUrl}/formation`, model).map((res: Response) => res.json());
  }

    find(id): Observable<Formation> {
    return this.http.get(`${environment.apiUrl}/formation/${id}`).map((res: Response) => res.json());
  }

  remove(id): Observable<Formation> {
    return this.http.delete(`${environment.apiUrl}/formation/${id}`).map((res: Response) => res.json());
  }

  put(id, model): Observable<Formation> {
    return this.http.put(`${environment.apiUrl}/formation/${id}`, model).map((res: Response) => res.json());
  }
}
