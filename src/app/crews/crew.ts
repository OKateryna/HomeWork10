import { Pilot } from '../pilots/pilot';
import { Stewardess } from '../stewardesses/stewardess';

export class Crew {
    constructor(public id: number,
        public name: string,
        public pilot: Pilot,
        public stewardesses: Stewardess []) { }
}
