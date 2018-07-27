import { Component, OnInit } from '@angular/core';
import { Departure } from '../departure';
import { DepartureService } from '../departure.service';

@Component({
  selector: 'app-departure-list',
  templateUrl: './departure-list.component.html',
  styleUrls: ['./departure-list.component.css']
})
export class DepartureListComponent implements OnInit {

  Departures: Array<Departure>;
  lastId: number;

  constructor(public service: DepartureService) { }

   ngOnInit() {
    this.getDepartures();
  }

  getDepartures() {
    this.service.getAllDepartures().subscribe((data: Array<Departure>) => {
    console.log(data)
    this.Departures = data;
    this.lastId = this.Departures[this.Departures.length - 1].id;
    });
  }

  createDeparture() {
    const departure = new Departure(0, null, '05-03-2018', null, null);
    this.service.createDeparture(departure).subscribe();
    this.lastId += 1;
    departure.id = this.lastId;
    this.Departures.push(departure);
  }

  deleteDeparture(id: number) {
    this.service.deleteDeparture(id).subscribe();
    this.Departures = this.Departures.filter(e => e.id !== id);
  }

  updateDeparture(id: number) {
    const departure = new Departure(0, null, '11-07-2018', null, null);
    this.service.updateDeparture(id, departure).subscribe();
    const temp = this.Departures.find(x => x.id === id);
    temp.flight = departure.flight;
    temp.departureDate = departure.departureDate;
    temp.crew = departure.crew;
    temp.plane = departure.plane;
  }
}
