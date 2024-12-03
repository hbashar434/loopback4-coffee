import { Entity } from "@loopback/repository";
export declare class Coffee extends Entity {
    id: number;
    name: string;
    type: string;
    price: number;
    flavor: string;
    constructor(data?: Partial<Coffee>);
}
export interface CoffeeRelations {
}
export type CoffeeWithRelations = Coffee & CoffeeRelations;
