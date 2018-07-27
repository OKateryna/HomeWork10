import { Flight } from '../flights/flight';

export class Ticket{
    constructor(
        public id: number,
        public price: number,
        public flight: Flight) { }
}
