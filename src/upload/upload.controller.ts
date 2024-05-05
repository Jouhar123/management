import { Controller, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) { }

  @Post()
  @UseInterceptors(
    FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [],
      }),
    )
    file: Express.Multer.File,
  ) {
    await this.uploadService.upload(file.originalname, file.buffer);
  }


}







//   @Post()
//   @UseInterceptors(FileInterceptor('file'))
//   uploadFile(@UploadedFile() file: Express.Multer.File) {
//     return this.uploadService.uploadFile(file);
//   }
// }