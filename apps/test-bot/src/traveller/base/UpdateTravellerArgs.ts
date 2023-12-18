/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TravellerWhereUniqueInput } from "./TravellerWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TravellerUpdateInput } from "./TravellerUpdateInput";

@ArgsType()
class UpdateTravellerArgs {
  @ApiProperty({
    required: true,
    type: () => TravellerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TravellerWhereUniqueInput)
  @Field(() => TravellerWhereUniqueInput, { nullable: false })
  where!: TravellerWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TravellerUpdateInput,
  })
  @ValidateNested()
  @Type(() => TravellerUpdateInput)
  @Field(() => TravellerUpdateInput, { nullable: false })
  data!: TravellerUpdateInput;
}

export { UpdateTravellerArgs as UpdateTravellerArgs };
