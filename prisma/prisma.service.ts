// prisma.service.ts
import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger('PrismaService');
  async onModuleInit() {
    await this.$connect();
    this.logger.log('MongoDB connected');
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
