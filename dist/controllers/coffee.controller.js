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
exports.CoffeeController = void 0;
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CoffeeController = class CoffeeController {
    constructor(coffeeRepository) {
        this.coffeeRepository = coffeeRepository;
    }
    async create(coffee) {
        return this.coffeeRepository.create(coffee);
    }
    async count(where) {
        return this.coffeeRepository.count(where);
    }
    async find(filter) {
        return this.coffeeRepository.find(filter);
    }
    async searchByName(name) {
        const filter = {
            where: {
                name: { like: name },
            },
        };
        return this.coffeeRepository.find(filter);
    }
    async updateAll(coffee, where) {
        return this.coffeeRepository.updateAll(coffee, where);
    }
    async findById(id, filter) {
        return this.coffeeRepository.findById(id, filter);
    }
    async updateById(id, coffee) {
        await this.coffeeRepository.updateById(id, coffee);
    }
    async replaceById(id, coffee) {
        await this.coffeeRepository.replaceById(id, coffee);
    }
    async deleteById(id) {
        await this.coffeeRepository.deleteById(id);
    }
};
exports.CoffeeController = CoffeeController;
__decorate([
    (0, rest_1.post)("/coffees"),
    (0, rest_1.response)(200, {
        description: "Coffee model instance",
        content: { "application/json": { schema: (0, rest_1.getModelSchemaRef)(models_1.Coffee) } },
    }),
    __param(0, (0, rest_1.requestBody)({
        content: {
            "application/json": {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Coffee, {
                    title: "NewCoffee",
                    exclude: ["id"],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CoffeeController.prototype, "create", null);
__decorate([
    (0, rest_1.get)("/coffees/count"),
    (0, rest_1.response)(200, {
        description: "Coffee model count",
        content: { "application/json": { schema: repository_1.CountSchema } },
    }),
    __param(0, rest_1.param.where(models_1.Coffee)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CoffeeController.prototype, "count", null);
__decorate([
    (0, rest_1.get)("/coffees"),
    (0, rest_1.response)(200, {
        description: "Array of Coffee model instances",
        content: {
            "application/json": {
                schema: {
                    type: "array",
                    items: (0, rest_1.getModelSchemaRef)(models_1.Coffee, { includeRelations: true }),
                },
            },
        },
    }),
    __param(0, rest_1.param.filter(models_1.Coffee)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CoffeeController.prototype, "find", null);
__decorate([
    (0, rest_1.get)("/coffees/search"),
    (0, rest_1.response)(200, {
        description: "Search for Coffee by name",
        content: {
            "application/json": {
                schema: {
                    type: "array",
                    items: (0, rest_1.getModelSchemaRef)(models_1.Coffee, { includeRelations: true }),
                },
            },
        },
    }),
    __param(0, rest_1.param.query.string("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoffeeController.prototype, "searchByName", null);
__decorate([
    (0, rest_1.patch)("/coffees"),
    (0, rest_1.response)(200, {
        description: "Coffee PATCH success count",
        content: { "application/json": { schema: repository_1.CountSchema } },
    }),
    __param(0, (0, rest_1.requestBody)({
        content: {
            "application/json": {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Coffee, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.where(models_1.Coffee)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Coffee, Object]),
    __metadata("design:returntype", Promise)
], CoffeeController.prototype, "updateAll", null);
__decorate([
    (0, rest_1.get)("/coffees/{id}"),
    (0, rest_1.response)(200, {
        description: "Coffee model instance",
        content: {
            "application/json": {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Coffee, { includeRelations: true }),
            },
        },
    }),
    __param(0, rest_1.param.path.number("id")),
    __param(1, rest_1.param.filter(models_1.Coffee, { exclude: "where" })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CoffeeController.prototype, "findById", null);
__decorate([
    (0, rest_1.patch)("/coffees/{id}"),
    (0, rest_1.response)(204, {
        description: "Coffee PATCH success",
    }),
    __param(0, rest_1.param.path.number("id")),
    __param(1, (0, rest_1.requestBody)({
        content: {
            "application/json": {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Coffee, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Coffee]),
    __metadata("design:returntype", Promise)
], CoffeeController.prototype, "updateById", null);
__decorate([
    (0, rest_1.put)("/coffees/{id}"),
    (0, rest_1.response)(204, {
        description: "Coffee PUT success",
    }),
    __param(0, rest_1.param.path.number("id")),
    __param(1, (0, rest_1.requestBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Coffee]),
    __metadata("design:returntype", Promise)
], CoffeeController.prototype, "replaceById", null);
__decorate([
    (0, rest_1.del)("/coffees/{id}"),
    (0, rest_1.response)(204, {
        description: "Coffee DELETE success",
    }),
    __param(0, rest_1.param.path.number("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CoffeeController.prototype, "deleteById", null);
exports.CoffeeController = CoffeeController = __decorate([
    __param(0, (0, repository_1.repository)(repositories_1.CoffeeRepository)),
    __metadata("design:paramtypes", [repositories_1.CoffeeRepository])
], CoffeeController);
//# sourceMappingURL=coffee.controller.js.map