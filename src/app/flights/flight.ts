import { Ticket } from '../tickets/ticket';

export class Flight {
    constructor(public id: number,
        public number: string,
        public placeDeparture: string,
        public timeDeparture: string,
        public destination: string,
        public timeDestination: string,
        public tickets: Ticket []) { }
}
