import { Component, OnInit } from '@angular/core';
import { PlaneType } from '../planeType';
import { PlaneTypeService } from '../plane-type.service';

@Component({
  selector: 'app-plane-type-list',
  templateUrl: './plane-type-list.component.html',
  styleUrls: ['./plane-type-list.component.css']
})
export class PlaneTypeListComponent implements OnInit {

  planeTypes : Array<PlaneType>;
  lastId : number;

  constructor(public service : PlaneTypeService){ }

   ngOnInit(){
    this.getAllPlaneTypes();
  }

  getAllPlaneTypes(){
    this.service.getAllPlaneTypes().subscribe((data : Array<PlaneType>) => {
    this.planeTypes = data;
    this.lastId = this.planeTypes[this.planeTypes.length - 1].id;
    })
  }

  createPlaneType(planeModel : string,seats: number,capacity : number){
    let planeType = new PlaneType(0,planeModel,seats,capacity);
    this.service.createPlaneType(planeType).subscribe();
    this.lastId++;
    planeType.id = this.lastId;
    this.planeTypes.push(planeType);
  }

  deletePlaneType(id : number){
    this.service.deletePlaneType(id).subscribe();
    this.planeTypes = this.planeTypes.filter(e => { return e.id !== id; });
  }
}
