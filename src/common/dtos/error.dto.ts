import { ApiProperty } from '@nestjs/swagger';
class DetailsProperties {
  @ApiProperty()
  columnNumber: string;

  @ApiProperty()
  lineNumber: string;

  @ApiProperty()
  fileName: string;

  @ApiProperty()
  functionName: string;

  @ApiProperty()
  source: string;
}

export class ErrorResponseDto {
  @ApiProperty()
  message: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  code: number;

  @ApiProperty({ type: [DetailsProperties] })
  details: any[] | null;
}

export interface IErrorData {
  message: string;
  statusCode: number;
  module: string;
  innerError?: Error;
}
