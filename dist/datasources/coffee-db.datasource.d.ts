import { LifeCycleObserver } from "@loopback/core";
import { juggler } from "@loopback/repository";
export declare class CoffeeDbDataSource extends juggler.DataSource implements LifeCycleObserver {
    static dataSourceName: string;
    static readonly defaultConfig: {
        name: string;
        connector: string;
        localStorage: string;
        file: string;
    };
    constructor(dsConfig?: object);
}
