import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health-check.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('/')
export class HealthCheckController {
  constructor(private healthService: HealthService) {}
  @Get()
  healthCheck() {
    return 'Client Gateway is up and running!!';
  }

  @MessagePattern('orders.health.description')
  healthCheckDescription() {
    return this.healthService.getHealthCheck();
  }
}
