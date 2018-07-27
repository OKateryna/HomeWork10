import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  Flights: Array<Flight>;
  lastId: number;

  constructor(public service: FlightService) { }

   ngOnInit() {
    this.getFlights();
  }

  getFlights() {
    this.service.getAllFlights().subscribe((data: Array<Flight>) => {
    this.Flights = data;
    this.lastId = this.Flights[this.Flights.length - 1].id;
    })
  }

  createFlight() {
    const flight = new Flight(0, 'EEWQ233', 'Lviv', '15-06-2017', 'Kyiv', '16-06-2017', null);
    this.service.createFlight(flight).subscribe();
    this.lastId += 1;
    flight.id = this.lastId;
    this.Flights.push(flight);
  }

  deleteFlight(id: number) {
    this.service.deleteFlight(id).subscribe();
    this.Flights = this.Flights.filter(e => e.id !== id);
  }

  updateFlight(id: number) {
    const flight = new Flight(0, 'KKK332', 'Lviv', '31-05-2017', 'Milan', '01-06-2017', null);
    this.service.updateFlight(id, flight).subscribe();
    const temp = this.Flights.find(x => x.id === id);
    temp.number = flight.number;
    temp.placeDeparture = flight.placeDeparture;
    temp.timeDeparture = temp.timeDeparture;
    temp.destination = temp.destination;
    temp.timeDestination = temp.timeDestination;
    temp.tickets = temp.tickets;
  }

}
