import { IEnvs } from './envs.interface';
import { envVars } from './envs.validations';

export const envs: IEnvs = {
  ms: {
    env: envVars.API_ENV,
    port: envVars.PORT,
    natsServers: envVars.NATS_SERVERS,
    apiUrl: envVars.API_URL,
  },
  auth: {
    jwtSecret: envVars.JWT_SECRET,
  },
};
