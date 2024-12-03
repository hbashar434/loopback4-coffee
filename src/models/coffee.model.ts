import { Entity, model, property } from "@loopback/repository";

@model()
export class Coffee extends Entity {
  @property({
    type: "number",
    id: true,
    generated: true,
  })
  id: number;

  @property({
    type: "string",
    required: true,
  })
  name: string;

  @property({
    type: "string",
    required: true,
  })
  type: string;

  @property({
    type: "number",
    required: true,
  })
  price: number;

  @property({
    type: "string",
    required: true,
  })
  flavor: string;

  constructor(data?: Partial<Coffee>) {
    super(data);
  }
}

export interface CoffeeRelations {
  // describe navigational properties here
}

export type CoffeeWithRelations = Coffee & CoffeeRelations;
