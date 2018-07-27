import { Component, OnInit } from '@angular/core';
import { PlaneType } from '../planeType';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { PlaneTypeService } from '../plane-type.service';

@Component({
  selector: 'app-plane-type-detail',
  templateUrl: './plane-type-details.component.html',
  styleUrls: ['./plane-type-details.component.css']
})
export class PlaneTypeDetailsComponent implements OnInit {

  planeType: PlaneType;
  isUpdate = false;

  constructor(public service: PlaneTypeService,private route: ActivatedRoute) {

    let id = parseInt(route.snapshot.paramMap.get('id'));
    service.getPlaneType(id).subscribe((data: PlaneType) => {
      this.planeType = data;
          })
  }

  ngOnInit() {
  }

  updatePlaneType(planeModel: string, placesAmount: number,  capacity: number) {
    if (this.isUpdate === true) {
      return;
    }

    this.isUpdate = true;
    console.log(planeModel, placesAmount, capacity);
    const planeType = new PlaneType(0, planeModel, placesAmount, capacity);
    this.service.updatePlaneType(this.planeType.id, planeType).subscribe();
    this.isUpdate = false;
  }
}
