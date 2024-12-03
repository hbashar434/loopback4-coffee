"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlDataSource = void 0;
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: "mysql",
    connector: "mysql",
    url: "",
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1901",
    database: "catDB",
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let MysqlDataSource = class MysqlDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
exports.MysqlDataSource = MysqlDataSource;
MysqlDataSource.dataSourceName = "mysql";
MysqlDataSource.defaultConfig = config;
exports.MysqlDataSource = MysqlDataSource = __decorate([
    (0, core_1.lifeCycleObserver)("datasource"),
    __param(0, (0, core_1.inject)("datasources.config.mysql", { optional: true })),
    __metadata("design:paramtypes", [Object])
], MysqlDataSource);
//# sourceMappingURL=mysql.datasource.js.map