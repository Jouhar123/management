import { IsNotEmpty, IsString } from "class-validator";



export class UploadDocumentDto {
    @IsNotEmpty()
    @IsString()
    fileType: string;

    @IsNotEmpty()
    @IsString()
    fileName: string;
}