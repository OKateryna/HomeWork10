import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { PlaneType } from './planeType';

@Injectable({
  providedIn: 'root'
})
export class PlaneTypeService {

    private url = 'http://localhost:51099/api/planetypes';

    constructor(private http: HttpClient) { }

    getAllPlaneTypes() {
      return this.http.get(this.url);
    }

    createPlaneType(planeType: PlaneType) {
      return this.http.post(this.url , planeType);
    }

    updatePlaneType(id: number, planeType: PlaneType) {
      return this.http.put(this.url + '/' + id, planeType);
    }

  deletePlaneType(id)  {
      return this.http.delete(this.url + '/' + id);
    }

    getPlaneType(id: number) {
      return this.http.get(this.url + '/' + id);
    }
  }

