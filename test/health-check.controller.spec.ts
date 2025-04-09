import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HealthCheckController } from '../src/health-check/health-check.controller';
import { HealthService } from '../src//health-check/health-check.service';

describe('HealthCheckController', () => {
  let healthCheckController: HealthCheckController;
  let healthService: HealthService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      controllers: [HealthCheckController],
      providers: [HealthService, ConfigService],
    }).compile();

    healthCheckController = moduleRef.get<HealthCheckController>(
      HealthCheckController,
    );
    healthService = moduleRef.get<HealthService>(HealthService);
  });

  describe('healthCheck', () => {
    it('should return "Client Gateway is up and running!!"', () => {
      const result = {
        nodeVersion: process.version,
        uptime: process.uptime(),
        environment: 'test',
        service: 'service-name',
        appVersionPackage: '1.0.0',
        description: 'service description',
      };

      jest
        .spyOn(healthService, 'getHealthCheck')
        .mockImplementation(() => result);

      expect(healthCheckController.healthCheck()).toBe(
        'Client Gateway is up and running!!',
      );
    });
  });
});
