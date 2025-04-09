import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HealthDto } from './health-check.dto';

@Injectable()
export class HealthService {
  logger: Logger;

  constructor(private _configService: ConfigService) {
    this.logger = new Logger('HealthCheck');
  }

  getHealthCheck(): HealthDto {
    this.logger.log(
      'getHealthCheck in version %o',
      `${HealthService.name}:${this.getHealthCheck.name}`,
      process.version,
    );

    return {
      nodeVersion: process.version,
      uptime: process.uptime(),
      environment: this._configService.get('NODE_ENV'),
      service: this._configService.get('npm_package_name'),
      appVersionPackage: this._configService.get('npm_package_version'),
      description: this._configService.get('npm_package_description'),
    };
  }

  getOk(): string {
    return 'Ok!';
  }

  getWhoami(user: any): string {
    this.logger.log({ user }, `${HealthService.name}:${this.getWhoami.name}`);
    return `Hi ${user.userName}`;
  }
}
