import { TravellerWhereInput } from "./TravellerWhereInput";
import { TravellerOrderByInput } from "./TravellerOrderByInput";

export type TravellerFindManyArgs = {
  where?: TravellerWhereInput;
  orderBy?: Array<TravellerOrderByInput>;
  skip?: number;
  take?: number;
};
