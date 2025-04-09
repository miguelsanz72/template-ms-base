import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  RpcExceptionFilter,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { RpcException } from '@nestjs/microservices';

@Catch(BadRequestException)
export class ValidationExceptionFilter
  implements RpcExceptionFilter<BadRequestException>
{
  catch(exception: BadRequestException, host: ArgumentsHost): Observable<any> {
    console.log('ValidationExceptionFilter', host.getArgs());

    const exceptionResponse = exception.getResponse() as
      | string
      | { message: string[] };

    const message =
      typeof exceptionResponse === 'string'
        ? exceptionResponse
        : exceptionResponse.message;
    if (Array.isArray(message)) {
      return throwError(
        () =>
          new RpcException({
            statusCode: exception.getStatus(),
            error: 'Bad Request',
            message: message.join(', '),
          }),
      );
    }
    return throwError(
      () =>
        new RpcException({
          statusCode: exception.getStatus(),
          error: 'Bad Request',
          message,
        }),
    );
  }
}
