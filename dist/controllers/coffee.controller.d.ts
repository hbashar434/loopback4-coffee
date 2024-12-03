import { Count, Filter, FilterExcludingWhere, Where } from "@loopback/repository";
import { Coffee } from "../models";
import { CoffeeRepository } from "../repositories";
export declare class CoffeeController {
    coffeeRepository: CoffeeRepository;
    constructor(coffeeRepository: CoffeeRepository);
    create(coffee: Omit<Coffee, "id">): Promise<Coffee>;
    count(where?: Where<Coffee>): Promise<Count>;
    find(filter?: Filter<Coffee>): Promise<Coffee[]>;
    searchByName(name: string): Promise<Coffee[]>;
    updateAll(coffee: Coffee, where?: Where<Coffee>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Coffee>): Promise<Coffee>;
    updateById(id: number, coffee: Coffee): Promise<void>;
    replaceById(id: number, coffee: Coffee): Promise<void>;
    deleteById(id: number): Promise<void>;
}
