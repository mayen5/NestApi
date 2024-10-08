import {
    IsArray,
    IsIn,
    IsNumber,
    IsOptional,
    IsPositive,
    IsString,
    MinLength
} from 'class-validator';

export class CreateProductDto {

    @IsString()
    @MinLength(1)
    title: string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    price?: number;

    @IsString()
    @IsOptional()
    slug?: string;

    @IsNumber()
    @IsOptional()
    stock?: number;

}
