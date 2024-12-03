import { DefaultCrudRepository } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Cat, CatRelations } from '../models';
export declare class CatRepository extends DefaultCrudRepository<Cat, typeof Cat.prototype.id, CatRelations> {
    constructor(dataSource: MysqlDataSource);
}
