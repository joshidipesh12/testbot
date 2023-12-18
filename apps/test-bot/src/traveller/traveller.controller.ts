import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TravellerService } from "./traveller.service";
import { TravellerControllerBase } from "./base/traveller.controller.base";

@swagger.ApiTags("travellers")
@common.Controller("travellers")
export class TravellerController extends TravellerControllerBase {
  constructor(protected readonly service: TravellerService) {
    super(service);
  }
}
