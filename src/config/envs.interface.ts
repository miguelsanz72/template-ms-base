export interface IEnvVars {
  API_ENV     : string;
  PORT        : number;
  NATS_SERVERS: string[];
  JWT_SECRET  : string;
}

export interface INodeEnv {
  env         : IEnvVars['API_ENV'];
  port        : IEnvVars['PORT'];
  natsServers : IEnvVars['NATS_SERVERS'];  
}

export interface IJwtEnv {
  jwtSecret   : IEnvVars['JWT_SECRET'];
}

export interface IEnvs {
  ms          : INodeEnv;
  auth        : IJwtEnv;
}
