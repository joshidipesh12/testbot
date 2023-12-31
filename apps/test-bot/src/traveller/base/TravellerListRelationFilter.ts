/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TravellerWhereInput } from "./TravellerWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TravellerListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TravellerWhereInput,
  })
  @ValidateNested()
  @Type(() => TravellerWhereInput)
  @IsOptional()
  @Field(() => TravellerWhereInput, {
    nullable: true,
  })
  every?: TravellerWhereInput;

  @ApiProperty({
    required: false,
    type: () => TravellerWhereInput,
  })
  @ValidateNested()
  @Type(() => TravellerWhereInput)
  @IsOptional()
  @Field(() => TravellerWhereInput, {
    nullable: true,
  })
  some?: TravellerWhereInput;

  @ApiProperty({
    required: false,
    type: () => TravellerWhereInput,
  })
  @ValidateNested()
  @Type(() => TravellerWhereInput)
  @IsOptional()
  @Field(() => TravellerWhereInput, {
    nullable: true,
  })
  none?: TravellerWhereInput;
}
export { TravellerListRelationFilter as TravellerListRelationFilter };
