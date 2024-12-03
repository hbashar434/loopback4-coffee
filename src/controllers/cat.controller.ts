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
import { Cat } from "../models";
import { CatRepository } from "../repositories";

export class CatController {
  constructor(
    @repository(CatRepository)
    public catRepository: CatRepository
  ) {}

  @post("/cats")
  @response(200, {
    description: "Cat model instance",
    content: { "application/json": { schema: getModelSchemaRef(Cat) } },
  })
  async create(
    @requestBody({
      content: {
        "application/json": {
          schema: getModelSchemaRef(Cat, {
            title: "NewCat",
            exclude: ["id"],
          }),
        },
      },
    })
    cat: Omit<Cat, "id">
  ): Promise<Cat> {
    return this.catRepository.create(cat);
  }

  @get("/cats/count")
  @response(200, {
    description: "Cat model count",
    content: { "application/json": { schema: CountSchema } },
  })
  async count(@param.where(Cat) where?: Where<Cat>): Promise<Count> {
    return this.catRepository.count(where);
  }

  @get("/cats")
  @response(200, {
    description: "Array of Cat model instances",
    content: {
      "application/json": {
        schema: {
          type: "array",
          items: getModelSchemaRef(Cat, { includeRelations: true }),
        },
      },
    },
  })
  async find(@param.filter(Cat) filter?: Filter<Cat>): Promise<Cat[]> {
    return this.catRepository.find(filter);
  }

  @patch("/cats")
  @response(200, {
    description: "Cat PATCH success count",
    content: { "application/json": { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        "application/json": {
          schema: getModelSchemaRef(Cat, { partial: true }),
        },
      },
    })
    cat: Cat,
    @param.where(Cat) where?: Where<Cat>
  ): Promise<Count> {
    return this.catRepository.updateAll(cat, where);
  }

  @get("/cats/{id}")
  @response(200, {
    description: "Cat model instance",
    content: {
      "application/json": {
        schema: getModelSchemaRef(Cat, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.number("id") id: number,
    @param.filter(Cat, { exclude: "where" }) filter?: FilterExcludingWhere<Cat>
  ): Promise<Cat> {
    return this.catRepository.findById(id, filter);
  }

  @patch("/cats/{id}")
  @response(204, {
    description: "Cat PATCH success",
  })
  async updateById(
    @param.path.number("id") id: number,
    @requestBody({
      content: {
        "application/json": {
          schema: getModelSchemaRef(Cat, { partial: true }),
        },
      },
    })
    cat: Cat
  ): Promise<void> {
    await this.catRepository.updateById(id, cat);
  }

  @put("/cats/{id}")
  @response(204, {
    description: "Cat PUT success",
  })
  async replaceById(
    @param.path.number("id") id: number,
    @requestBody() cat: Cat
  ): Promise<void> {
    await this.catRepository.replaceById(id, cat);
  }

  @del("/cats/{id}")
  @response(204, {
    description: "Cat DELETE success",
  })
  async deleteById(@param.path.number("id") id: number): Promise<void> {
    await this.catRepository.deleteById(id);
  }
}
