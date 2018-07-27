import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css'],
  providers: [TicketService]
})

export class TicketDetailsComponent implements OnInit {

  ticket: Ticket;
  isUpdate = false;

  constructor(public service: TicketService, private route: ActivatedRoute) {

    const id = parseInt(route.snapshot.paramMap.get('id'));
    service.getTicket(id).subscribe((data: Ticket) => {
      this.ticket = data;
          });
  }

  ngOnInit() {
  }

  updateTicket(number: string , price: number) {
    if (this.isUpdate === true) {
      return;
    }

    this.isUpdate = true;
    const ticket = new Ticket(0, price, null);
    this.service.updateTicket(this.ticket.id, ticket).subscribe();
    this.isUpdate = false;
  }
}
