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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
const repository_1 = require("@loopback/repository");
let Cat = class Cat extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Cat = Cat;
__decorate([
    (0, repository_1.property)({
        type: "number",
        id: true,
        generated: true,
    }),
    __metadata("design:type", Number)
], Cat.prototype, "id", void 0);
__decorate([
    (0, repository_1.property)({
        type: "string",
        required: true,
    }),
    __metadata("design:type", String)
], Cat.prototype, "name", void 0);
__decorate([
    (0, repository_1.property)({
        type: "string",
        required: true,
    }),
    __metadata("design:type", String)
], Cat.prototype, "breed", void 0);
__decorate([
    (0, repository_1.property)({
        type: "number",
        required: true,
    }),
    __metadata("design:type", Number)
], Cat.prototype, "age", void 0);
exports.Cat = Cat = __decorate([
    (0, repository_1.model)({ name: "cats" }),
    __metadata("design:paramtypes", [Object])
], Cat);
//# sourceMappingURL=cat.model.js.map