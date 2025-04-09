import { IEnvs } from './envs.interface';
import { envVars } from './envs.validatios';

export const envs: IEnvs = {
  ms: {
    env: envVars.API_ENV,
    port: envVars.PORT,
    natsServers: envVars.NATS_SERVERS,
  },
  auth: {
    jwtSecret: envVars.JWT_SECRET,
  },
};
