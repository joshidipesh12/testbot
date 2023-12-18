import * as graphql from "@nestjs/graphql";
import { TravellerResolverBase } from "./base/traveller.resolver.base";
import { Traveller } from "./base/Traveller";
import { TravellerService } from "./traveller.service";

@graphql.Resolver(() => Traveller)
export class TravellerResolver extends TravellerResolverBase {
  constructor(protected readonly service: TravellerService) {
    super(service);
  }
}
