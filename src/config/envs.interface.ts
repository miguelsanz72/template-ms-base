/* eslint-disable @typescript-eslint/naming-convention */
export interface IEnvVars {
  API_ENV     : string;
  PORT        : number;
  NATS_SERVERS: string[];
  JWT_SECRET  : string;
  API_URL     : string;
}

export interface INodeEnv {
  env         : IEnvVars['API_ENV'];
  port        : IEnvVars['PORT'];
  natsServers : IEnvVars['NATS_SERVERS']; 
  apiUrl      : IEnvVars['API_URL']; 
}

export interface IJwtEnv {
  jwtSecret   : IEnvVars['JWT_SECRET'];
}

export interface IEnvs {
  ms          : INodeEnv;
  auth        : IJwtEnv;
}
