import { IsNotEmpty, IsString, IsEmail, IsNumberString, Length, IsOptional, IsNumber } from "class-validator";

export class UserDto {

    @IsNotEmpty({message: "Name can't be empty"})
    @IsString()
    name: string;

    @IsNotEmpty({message: "Email Id can't be empty"})
    @IsEmail({}, {message: "Email Id must be valid"})
    email: string;

    @IsNotEmpty({message: "Phone number can't be empty"})
    @IsNumberString()
    @Length(10,10, {message: "Enter valid phone number, should have 10 digits"})
    phone: string;

    @IsOptional()
    @IsString()
    details: string;

    @IsOptional()
    @IsString()
    image: string;

    @IsOptional()
    @IsNumber()
    status: number;
}