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
  HttpErrors,
} from "@loopback/rest";
import {Cat} from "../models";
import {CatRepository} from "../repositories";

const ROUTES = {
  CATS: "/cats",
  CATS_ID: "/cats/{id}",
  CATS_COUNT: "/cats/count",
};

export class CatController {
  constructor(
    @repository(CatRepository)
    public catRepository: CatRepository,
  ) {}

  // Create a new Cat instance
  @post(ROUTES.CATS)
  @response(201, {
    description: "Cat model instance created",
    content: {"application/json": {schema: getModelSchemaRef(Cat)}},
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
    cat: Omit<Cat, "id">,
  ): Promise<Cat> {
    try {
      return await this.catRepository.create(cat);
    } catch (err) {
      throw new HttpErrors.BadRequest(`Error creating Cat: ${err.message}`);
    }
  }

  // Count Cats matching a where clause
  @get(ROUTES.CATS_COUNT)
  @response(200, {
    description: "Cat model count",
    content: {"application/json": {schema: CountSchema}},
  })
  async count(@param.where(Cat) where?: Where<Cat>): Promise<Count> {
    try {
      return await this.catRepository.count(where);
    } catch (err) {
      throw new HttpErrors.InternalServerError(
        `Error counting Cats: ${err.message}`,
      );
    }
  }

  // Retrieve all Cats with optional filters
  @get(ROUTES.CATS)
  @response(200, {
    description: "Array of Cat model instances",
    content: {
      "application/json": {
        schema: {
          type: "array",
          items: getModelSchemaRef(Cat, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Cat) filter?: Filter<Cat>,
    @param.query.number("limit") limit: number = 10,
    @param.query.number("offset") offset: number = 0,
  ): Promise<Cat[]> {
    try {
      const modifiedFilter = {...filter, limit, offset};
      return await this.catRepository.find(modifiedFilter);
    } catch (err) {
      throw new HttpErrors.InternalServerError(
        `Error retrieving Cats: ${err.message}`,
      );
    }
  }

  // Update multiple Cats matching a where clause
  @patch(ROUTES.CATS)
  @response(200, {
    description: "Cat PATCH success count",
    content: {"application/json": {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        "application/json": {
          schema: getModelSchemaRef(Cat, {partial: true}),
        },
      },
    })
    cat: Cat,
    @param.where(Cat) where?: Where<Cat>,
  ): Promise<Count> {
    try {
      return await this.catRepository.updateAll(cat, where);
    } catch (err) {
      throw new HttpErrors.BadRequest(
        `Error updating Cats: ${err.message}`,
      );
    }
  }

  // Retrieve a single Cat by ID
  @get(ROUTES.CATS_ID)
  @response(200, {
    description: "Cat model instance",
    content: {
      "application/json": {
        schema: getModelSchemaRef(Cat, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number("id") id: number,
    @param.filter(Cat, {exclude: "where"}) filter?: FilterExcludingWhere<Cat>,
  ): Promise<Cat> {
    try {
      return await this.catRepository.findById(id, filter);
    } catch (err) {
      throw new HttpErrors.NotFound(`Cat with ID ${id} not found`);
    }
  }

  // Update a specific Cat by ID
  @patch(ROUTES.CATS_ID)
  @response(204, {
    description: "Cat PATCH success",
  })
  async updateById(
    @param.path.number("id") id: number,
    @requestBody({
      content: {
        "application/json": {
          schema: getModelSchemaRef(Cat, {partial: true}),
        },
      },
    })
    cat: Cat,
  ): Promise<void> {
    try {
      await this.catRepository.updateById(id, cat);
    } catch (err) {
      throw new HttpErrors.BadRequest(`Error updating Cat: ${err.message}`);
    }
  }

  // Replace a specific Cat by ID
  @put(ROUTES.CATS_ID)
  @response(204, {
    description: "Cat PUT success",
  })
  async replaceById(
    @param.path.number("id") id: number,
    @requestBody() cat: Cat,
  ): Promise<void> {
    try {
      await this.catRepository.replaceById(id, cat);
    } catch (err) {
      throw new HttpErrors.BadRequest(`Error replacing Cat: ${err.message}`);
    }
  }

  // Delete a specific Cat by ID
  @del(ROUTES.CATS_ID)
  @response(204, {
    description: "Cat DELETE success",
  })
  async deleteById(@param.path.number("id") id: number): Promise<void> {
    try {
      await this.catRepository.deleteById(id);
    } catch (err) {
      throw new HttpErrors.BadRequest(`Error deleting Cat: ${err.message}`);
    }
  }
}
