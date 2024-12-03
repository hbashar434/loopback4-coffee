import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CoffeeDbDataSource} from '../datasources';
import {Coffee, CoffeeRelations} from '../models';

export class CoffeeRepository extends DefaultCrudRepository<
  Coffee,
  typeof Coffee.prototype.id,
  CoffeeRelations
> {
  constructor(
    @inject('datasources.coffeeDB') dataSource: CoffeeDbDataSource,
  ) {
    super(Coffee, dataSource);
  }
}
