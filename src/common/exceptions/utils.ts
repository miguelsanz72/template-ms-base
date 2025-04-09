import { CustomRpcException } from '@helpers';
import { HttpStatus } from '@nestjs/common';

export type TErrorType = {
  error?: {
    status?: number;
    message?: string;
  };
};

export const handleError = (
  err: TErrorType,
  defaultMessage: string,
  module: string,
): never => {
  console.log(err);
  throw new CustomRpcException({
    status: err.error?.status ?? HttpStatus.BAD_REQUEST,
    message: err.error?.message ?? defaultMessage,
    module: module,
    innerError: err as Error,
  });
};
