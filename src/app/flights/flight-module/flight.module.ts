import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightListComponent } from '../flight-list/flight-list.component';
import { FlightDetailsComponent } from '../flight-details/flight-details.component';
import { FlightService } from '../flight.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FlightListComponent,
    FlightDetailsComponent
  ],
  providers : [FlightService]
})
export class FlightModule { }
