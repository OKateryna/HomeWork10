import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketModule } from './tickets/ticket-module/ticket.module';
import { HttpClientModule } from '@angular/common/http';
import { PlaneModule } from './planes/plane-module/plane.module';
import { StewardessModule } from './stewardesses/stewardess-module/stewardess.module';
import { PilotModule } from './pilots/pilot-module/pilot.module';
import { PlaneTypeModule } from './plane-types/plane-type-module/plane-type.module';
import { CrewModule } from './crews/crew-module/crew.module';
import { FlightModule } from './flights/flight-module/flight.module';
import { DepartureModule } from './departures/departure-module/departure.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TicketModule,
    PlaneModule,
    StewardessModule,
    FlightModule,
    DepartureModule,
    PilotModule,
    CrewModule,
    PlaneTypeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
