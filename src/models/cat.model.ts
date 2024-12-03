import { Entity, model, property } from "@loopback/repository";

@model({ name: "cats" })
export class Cat extends Entity {
  @property({
    type: "number",
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: "string",
    required: true,
  })
  name: string;

  @property({
    type: "string",
    required: true,
  })
  breed: string;

  @property({
    type: "number",
    required: true,
  })
  age: number;

  constructor(data?: Partial<Cat>) {
    super(data);
  }
}

export interface CatRelations {
  // define navigational properties
}

export type CatWithRelations = Cat & CatRelations;
