import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Cat, CatRelations} from '../models';

export class CatRepository extends DefaultCrudRepository<
  Cat,
  typeof Cat.prototype.id,
  CatRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Cat, dataSource);
  }
}
