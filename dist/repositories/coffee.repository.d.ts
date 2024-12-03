import { DefaultCrudRepository } from '@loopback/repository';
import { CoffeeDbDataSource } from '../datasources';
import { Coffee, CoffeeRelations } from '../models';
export declare class CoffeeRepository extends DefaultCrudRepository<Coffee, typeof Coffee.prototype.id, CoffeeRelations> {
    constructor(dataSource: CoffeeDbDataSource);
}
