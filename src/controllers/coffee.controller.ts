import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from "@loopback/repository";
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from "@loopback/rest";
import { Coffee } from "../models";
import { CoffeeRepository } from "../repositories";

export class CoffeeController {
  constructor(
    @repository(CoffeeRepository)
    public coffeeRepository: CoffeeRepository
  ) {}

  @post("/coffees")
  @response(200, {
    description: "Coffee model instance",
    content: { "application/json": { schema: getModelSchemaRef(Coffee) } },
  })
  async create(
    @requestBody({
      content: {
        "application/json": {
          schema: getModelSchemaRef(Coffee, {
            title: "NewCoffee",
            exclude: ["id"],
          }),
        },
      },
    })
    coffee: Omit<Coffee, "id">
  ): Promise<Coffee> {
    return this.coffeeRepository.create(coffee);
  }

  @get("/coffees/count")
  @response(200, {
    description: "Coffee model count",
    content: { "application/json": { schema: CountSchema } },
  })
  async count(@param.where(Coffee) where?: Where<Coffee>): Promise<Count> {
    return this.coffeeRepository.count(where);
  }

  @get("/coffees")
  @response(200, {
    description: "Array of Coffee model instances",
    content: {
      "application/json": {
        schema: {
          type: "array",
          items: getModelSchemaRef(Coffee, { includeRelations: true }),
        },
      },
    },
  })
  async find(@param.filter(Coffee) filter?: Filter<Coffee>): Promise<Coffee[]> {
    return this.coffeeRepository.find(filter);
  }

  @get("/coffees/search")
  @response(200, {
    description: "Search for Coffee by name",
    content: {
      "application/json": {
        schema: {
          type: "array",
          items: getModelSchemaRef(Coffee, { includeRelations: true }),
        },
      },
    },
  })
  async searchByName(
    @param.query.string("name") name: string
  ): Promise<Coffee[]> {
    const filter: Filter<Coffee> = {
      where: {
        name: { like: name },
      },
    };
    return this.coffeeRepository.find(filter);
  }

  @patch("/coffees")
  @response(200, {
    description: "Coffee PATCH success count",
    content: { "application/json": { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        "application/json": {
          schema: getModelSchemaRef(Coffee, { partial: true }),
        },
      },
    })
    coffee: Coffee,
    @param.where(Coffee) where?: Where<Coffee>
  ): Promise<Count> {
    return this.coffeeRepository.updateAll(coffee, where);
  }

  @get("/coffees/{id}")
  @response(200, {
    description: "Coffee model instance",
    content: {
      "application/json": {
        schema: getModelSchemaRef(Coffee, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.number("id") id: number,
    @param.filter(Coffee, { exclude: "where" })
    filter?: FilterExcludingWhere<Coffee>
  ): Promise<Coffee> {
    return this.coffeeRepository.findById(id, filter);
  }

  @patch("/coffees/{id}")
  @response(204, {
    description: "Coffee PATCH success",
  })
  async updateById(
    @param.path.number("id") id: number,
    @requestBody({
      content: {
        "application/json": {
          schema: getModelSchemaRef(Coffee, { partial: true }),
        },
      },
    })
    coffee: Coffee
  ): Promise<void> {
    await this.coffeeRepository.updateById(id, coffee);
  }

  @put("/coffees/{id}")
  @response(204, {
    description: "Coffee PUT success",
  })
  async replaceById(
    @param.path.number("id") id: number,
    @requestBody() coffee: Coffee
  ): Promise<void> {
    await this.coffeeRepository.replaceById(id, coffee);
  }

  @del("/coffees/{id}")
  @response(204, {
    description: "Coffee DELETE success",
  })
  async deleteById(@param.path.number("id") id: number): Promise<void> {
    await this.coffeeRepository.deleteById(id);
  }
}
