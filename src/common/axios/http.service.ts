// helpers/axios-service.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpStatus } from '@nestjs/common';
import { handleError } from '../exceptions';

export class AxiosService {
  async getRequest(
    url: string,
    params?: Record<string, any>,
    headers?: Record<string, string>,
  ): Promise<any> {
    return this._sendRequest('get', url, { params, headers });
  }

  async postRequest(
    url: string,
    data?: any,
    headers?: Record<string, string>,
  ): Promise<any> {
    return this._sendRequest('post', url, { data, headers });
  }

  async putRequest(
    url: string,
    data?: any,
    headers?: Record<string, string>,
  ): Promise<any> {
    return this._sendRequest('put', url, { data, headers });
  }

  async deleteRequest(
    url: string,
    params?: Record<string, any>,
    headers?: Record<string, string>,
  ): Promise<any> {
    return this._sendRequest('delete', url, { params, headers });
  }

  private async _sendRequest(
    method: 'get' | 'post' | 'put' | 'delete',
    url: string,
    options?: AxiosRequestConfig,
  ): Promise<any> {
    try {
      const config: AxiosRequestConfig = {
        method: method,
        url: url,
        ...options,
        headers: {
          accept: 'application/json',
          ...(options?.headers || {}),
        },
      };

      const response: AxiosResponse = await axios(config);
      return response.data;
    } catch (error: any) {
      handleError(
        {
          error: {
            message: `ERRORS.${method.toUpperCase()}_RESOURCE`,
            status: HttpStatus.BAD_REQUEST,
          },
        },
        `ERRORS.${method.toUpperCase()}_RESOURCE`,
        this.constructor.name,
      );
    }
  }
}
