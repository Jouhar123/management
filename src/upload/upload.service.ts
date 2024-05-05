import { Injectable } from '@nestjs/common';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UploadService {
  private readonly s3Client: S3Client;

  constructor(private readonly configService: ConfigService) {
    this.s3Client = new S3Client({
      region: this.configService.get('AWS_S3_REGION'),
      credentials: {
        accessKeyId: this.configService.get('AWS_S3_KEY_ID'),
        secretAccessKey: this.configService.get('AWS_S3_SECRET_KEY'),
      },
    });
  }

  async upload(fileName: string, file: Buffer) {
    await this.s3Client.send(
      new PutObjectCommand({
        Bucket: 'hoteldocs',
        Key: fileName,
        Body: file,
      })
    );
  }
}










