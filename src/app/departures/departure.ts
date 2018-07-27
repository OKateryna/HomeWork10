import { Flight } from '../flights/flight';
import { Crew } from '../crews/crew';
import { Plane } from '../planes/plane';

export class Departure {
    constructor(public id: number,
        public flight: Flight,
        public departureDate: string,
        public crew: Crew,
        public plane: Plane) { }
}
