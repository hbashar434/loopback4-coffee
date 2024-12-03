import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Cat } from '../models';
import { CatRepository } from '../repositories';
export declare class CatController {
    catRepository: CatRepository;
    constructor(catRepository: CatRepository);
    create(cat: Omit<Cat, 'id'>): Promise<Cat>;
    count(where?: Where<Cat>): Promise<Count>;
    find(filter?: Filter<Cat>): Promise<Cat[]>;
    updateAll(cat: Cat, where?: Where<Cat>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Cat>): Promise<Cat>;
    updateById(id: number, cat: Cat): Promise<void>;
    replaceById(id: number, cat: Cat): Promise<void>;
    deleteById(id: number): Promise<void>;
}
