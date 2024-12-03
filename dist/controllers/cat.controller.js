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
exports.CatController = void 0;
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CatController = class CatController {
    constructor(catRepository) {
        this.catRepository = catRepository;
    }
    async create(cat) {
        return this.catRepository.create(cat);
    }
    async count(where) {
        return this.catRepository.count(where);
    }
    async find(filter) {
        return this.catRepository.find(filter);
    }
    async updateAll(cat, where) {
        return this.catRepository.updateAll(cat, where);
    }
    async findById(id, filter) {
        return this.catRepository.findById(id, filter);
    }
    async updateById(id, cat) {
        await this.catRepository.updateById(id, cat);
    }
    async replaceById(id, cat) {
        await this.catRepository.replaceById(id, cat);
    }
    async deleteById(id) {
        await this.catRepository.deleteById(id);
    }
};
exports.CatController = CatController;
__decorate([
    (0, rest_1.post)('/cats'),
    (0, rest_1.response)(200, {
        description: 'Cat model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Cat) } },
    }),
    __param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cat, {
                    title: 'NewCat',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CatController.prototype, "create", null);
__decorate([
    (0, rest_1.get)('/cats/count'),
    (0, rest_1.response)(200, {
        description: 'Cat model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    __param(0, rest_1.param.where(models_1.Cat)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CatController.prototype, "count", null);
__decorate([
    (0, rest_1.get)('/cats'),
    (0, rest_1.response)(200, {
        description: 'Array of Cat model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Cat, { includeRelations: true }),
                },
            },
        },
    }),
    __param(0, rest_1.param.filter(models_1.Cat)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CatController.prototype, "find", null);
__decorate([
    (0, rest_1.patch)('/cats'),
    (0, rest_1.response)(200, {
        description: 'Cat PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    __param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cat, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.where(models_1.Cat)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Cat, Object]),
    __metadata("design:returntype", Promise)
], CatController.prototype, "updateAll", null);
__decorate([
    (0, rest_1.get)('/cats/{id}'),
    (0, rest_1.response)(200, {
        description: 'Cat model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cat, { includeRelations: true }),
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.param.filter(models_1.Cat, { exclude: 'where' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CatController.prototype, "findById", null);
__decorate([
    (0, rest_1.patch)('/cats/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cat PATCH success',
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cat, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Cat]),
    __metadata("design:returntype", Promise)
], CatController.prototype, "updateById", null);
__decorate([
    (0, rest_1.put)('/cats/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cat PUT success',
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, (0, rest_1.requestBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Cat]),
    __metadata("design:returntype", Promise)
], CatController.prototype, "replaceById", null);
__decorate([
    (0, rest_1.del)('/cats/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cat DELETE success',
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CatController.prototype, "deleteById", null);
exports.CatController = CatController = __decorate([
    __param(0, (0, repository_1.repository)(repositories_1.CatRepository)),
    __metadata("design:paramtypes", [repositories_1.CatRepository])
], CatController);
//# sourceMappingURL=cat.controller.js.map