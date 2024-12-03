import { Entity } from "@loopback/repository";
export declare class Cat extends Entity {
    id?: number;
    name: string;
    breed: string;
    age: number;
    constructor(data?: Partial<Cat>);
}
export interface CatRelations {
}
export type CatWithRelations = Cat & CatRelations;
