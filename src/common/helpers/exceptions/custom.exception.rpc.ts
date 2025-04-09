import { RpcException } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

export class CustomRpcException extends RpcException {
  private _logger: Logger;

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

    this._logger = new Logger(errorData.module);
    this._logError(errorData.message, errorData.innerError);
  }

  private _logError(message: string, innerError?: Error): void {
    // Log the error with its stack trace if available
    this._logger.error(message, innerError?.stack);
  }
}
