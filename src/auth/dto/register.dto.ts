import {IsEmail, IsString, MaxLength, MinLength} from "class-validator";

export class RegisterDto {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    @MaxLength(20)
    password: string;

    @IsString()
    @MinLength(1)
    @MaxLength(50)
    firstName: string;

    @IsString()
    @MinLength(1)
    @MaxLength(50)
    lastName: string;
}