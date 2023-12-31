/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Traveller } from "./Traveller";
import { TravellerCountArgs } from "./TravellerCountArgs";
import { TravellerFindManyArgs } from "./TravellerFindManyArgs";
import { TravellerFindUniqueArgs } from "./TravellerFindUniqueArgs";
import { CreateTravellerArgs } from "./CreateTravellerArgs";
import { UpdateTravellerArgs } from "./UpdateTravellerArgs";
import { DeleteTravellerArgs } from "./DeleteTravellerArgs";
import { TravellerService } from "../traveller.service";
@graphql.Resolver(() => Traveller)
export class TravellerResolverBase {
  constructor(protected readonly service: TravellerService) {}

  async _travellersMeta(
    @graphql.Args() args: TravellerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Traveller])
  async travellers(
    @graphql.Args() args: TravellerFindManyArgs
  ): Promise<Traveller[]> {
    return this.service.travellers(args);
  }

  @graphql.Query(() => Traveller, { nullable: true })
  async traveller(
    @graphql.Args() args: TravellerFindUniqueArgs
  ): Promise<Traveller | null> {
    const result = await this.service.traveller(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Traveller)
  async createTraveller(
    @graphql.Args() args: CreateTravellerArgs
  ): Promise<Traveller> {
    return await this.service.createTraveller({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Traveller)
  async updateTraveller(
    @graphql.Args() args: UpdateTravellerArgs
  ): Promise<Traveller | null> {
    try {
      return await this.service.updateTraveller({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Traveller)
  async deleteTraveller(
    @graphql.Args() args: DeleteTravellerArgs
  ): Promise<Traveller | null> {
    try {
      return await this.service.deleteTraveller(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
