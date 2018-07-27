import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketDetailsComponent } from './tickets/ticket-details/ticket-details.component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { PlaneDetailsComponent } from './planes/plane-details/plane-details.component';
import { PlaneListComponent } from './planes/plane-list/plane-list.component';
import { StewardessListComponent } from './stewardesses/stewardess-list/stewardess-list.component';
import { StewardessDetailsComponent } from './stewardesses/stewardess-details/stewardess-details.component';
import { PilotListComponent } from './pilots/pilot-list/pilot-list.component';
import { PilotDetailsComponent } from './pilots/pilot-details/pilot-details.component';
import { PlaneTypeListComponent } from './plane-types/plane-type-list/plane-type-list.component';
import { PlaneTypeDetailsComponent } from './plane-types/plane-type-details/plane-type-details.component';
import { CrewDetailsComponent } from './crews/crew-details/crew-details.component';
import { CrewListComponent } from './crews/crew-list/crew-list.component';
import { FlightListComponent } from './flights/flight-list/flight-list.component';
import { FlightDetailsComponent } from './flights/flight-details/flight-details.component';
import { DepartureListComponent } from './departures/departure-list/departure-list.component';
import { DepartureDetailsComponent } from './departures/departure-details/departure-details.component';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo : ''}, {
    path : 'tickets',
    component : TicketListComponent
    }, {
      path : 'tickets/:id',
      component : TicketDetailsComponent
    }, {
      path : 'planes/:id',
      component : PlaneDetailsComponent
    }, {
      path : 'planes',
      component : PlaneListComponent
    }, {
      path : 'stewardesses',
      component : StewardessListComponent
    }, {
      path : 'stewardesses/:id',
      component : StewardessDetailsComponent
    }, {
      path : 'pilots',
      component : PilotListComponent
    }, {
      path : 'pilots/:id',
      component : PilotDetailsComponent
    }, {
      path : 'planetypes',
      component : PlaneTypeListComponent
    }, {
      path : 'planetypes/:id',
      component : PlaneTypeDetailsComponent
    }, {
      path : 'crews',
      component : CrewListComponent
    }, {
      path : 'crews/:id',
      component : CrewDetailsComponent
    }, {
      path : 'flights',
      component : FlightListComponent
    }, {
      path : 'flights/:id',
      component : FlightDetailsComponent
    }, {
      path : 'departures',
      component : DepartureListComponent
    }, {
      path : 'departures/:id',
      component : DepartureDetailsComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
