import { Component, OnInit } from '@angular/core';
import { PlaneService } from '../plane.service';
import { Plane } from '../plane';

@Component({
  selector: 'app-plane-list',
  templateUrl: './plane-list.component.html',
  styleUrls: ['./plane-list.component.css'],
  providers : [PlaneService]
})
export class PlaneListComponent implements OnInit {

  Planes : Array<Plane>;
  lastId : number;

  constructor(public service : PlaneService) { }

   ngOnInit() {
    this.getPlanes();
  }

  getPlanes() {
    this.service.getAllPlanes().subscribe((data : Array<Plane>) => {
    this.Planes = data;
    this.lastId = this.Planes[this.Planes.length - 1].id;
    })
  }

  createPlane() {
    const plane = new Plane(0, 'Taska', null, '11.11.2009', 5);
    this.service.createPlane(plane).subscribe(x => console.log(x));
    this.lastId += 1;
    plane.id = this.lastId;
    this.Planes.push(plane);
  }

  deletePlane(id: number) {
    this.service.deletePlane(id).subscribe();
    this.Planes = this.Planes.filter(e => e.id !== id);
  }

  updatePlane(id: number) {
    const plane = new Plane(0, 'Bravo', null, '09.03.2015', 10);
    this.service.updatePlane(id, plane).subscribe();
    const temp = this.Planes.find(x => x.id === id);
    temp.planeName = plane.planeName;
    temp.lifeSpan = plane.lifeSpan;
    temp.manufectureDate = plane.manufectureDate;
    temp.planeType = plane.planeType;
  }


}
