import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService} from '../ticket.service';
import { TicketListComponent } from '../ticket-list/ticket-list.component';
import { TicketDetailsComponent } from '../ticket-details/ticket-details.component';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    TicketDetailsComponent ,
    TicketListComponent
    ],
    providers : [TicketService]
})
export class TicketModule { }


