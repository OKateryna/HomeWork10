import { Component, OnInit } from '@angular/core';
import { Departure } from '../departure';
import { DepartureService } from '../departure.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-departure-detail',
  templateUrl: './departure-details.component.html',
  styleUrls: ['./departure-details.component.css']
})
export class DepartureDetailsComponent implements OnInit {

  departure: Departure;
  constructor(public service: DepartureService, private route: ActivatedRoute) {

    const id = parseInt(route.snapshot.paramMap.get('id'));
    service.getDeparture(id).subscribe((data: Departure) => {
      this.departure = data;
          });
   }

  ngOnInit() {
  }

}
