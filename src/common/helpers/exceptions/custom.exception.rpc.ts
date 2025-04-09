import { RpcException } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

export class CustomRpcException extends RpcException {
  private logger: Logger;

  constructor(errorData: {
    status: number;
    message: string;
    module: string;
    innerError?: Error;
  }) {
    super({
      status: errorData.status,
      message: errorData.message,
      error: errorData.innerError ? errorData.innerError.toString() : undefined,
    });

    this.logger = new Logger(errorData.module);
    this.logError(errorData.message, errorData.innerError);
  }

  private logError(message: string, innerError?: Error): void {
    // Log the error with its stack trace if available
    this.logger.error(message, innerError?.stack);
  }
}
