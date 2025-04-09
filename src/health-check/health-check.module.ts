import { Module } from '@nestjs/common';
import { HealthCheckController } from './health-check.controller';
import { HealthService } from './health-check.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [HealthCheckController],
  providers: [HealthService],
})
export class HealthCheckModule {}
