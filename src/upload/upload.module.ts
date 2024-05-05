import { Module } from "@nestjs/common";
import { UploadController } from "./upload.controller";
import { UploadService } from "./upload.service";
import { ConfigModule } from "@nestjs/config";
import { S3Client } from "@aws-sdk/client-s3";

import { APP_GUARD } from "@nestjs/core";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";


@Module({
imports: [
    //------- Throttler 2 per ttl
    // ThrottlerModule.forRoot({
    //     ttl: 60,
    //     limit: 2,
        
    //   }),
  ConfigModule,S3Client
     ],
  providers: [UploadService,
    // {
    //     provide:APP_GUARD,
    //     useClass:ThrottlerGuard,
    // }
  ],
  controllers: [UploadController],
  exports:[UploadService]
})

export class UploadModule {}