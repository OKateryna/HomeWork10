import { Injectable } from '@angular/core';
import { Plane } from './plane';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaneService {

  private url = 'http://localhost:51099/api/planes';

  constructor(private http: HttpClient) { }

  getAllPlanes() {
    return this.http.get(this.url);
  }

  createPlane(plane: Plane) {
    return this.http.post(this.url , plane);
  }

  updatePlane(id: number, plane: Plane) {
    return this.http.put(this.url + '/' + id, plane);
  }

  deletePlane(id)  {
    return this.http.delete(this.url + '/' + id);
  }

  getPlane(id: number) {
    return this.http.get(this.url + '/' + id);
  }
}
