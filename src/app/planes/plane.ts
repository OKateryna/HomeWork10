import { PlaneType } from '../plane-types/planeType';

export class Plane{
    constructor(
        public id: number,
        public planeName: string,
        public planeType: PlaneType,
        public manufectureDate: string,
        public lifeSpan: number ) { }
}