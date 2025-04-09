/* eslint-disable @typescript-eslint/naming-convention */
import 'dotenv/config';
import * as Joi from 'joi';
import { IEnvVars } from './envs.interface';

const eventsShema = Joi.object({
  API_ENV: Joi.string()
    .valid('development', 'test', 'staging', 'production')
    .default('development'),
  PORT: Joi.number().required(),
  NATS_SERVERS: Joi.array().items(Joi.string()).required(),
  JWT_SECRET: Joi.string().required(),
  API_URL: Joi.string().required(),
});

const { error } = eventsShema.validate(
  {
    ...process.env,
    NATS_SERVERS: process.env.NATS_SERVERS?.split(','),
  },

  {
    allowUnknown: true,
  },
);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const envVars: IEnvVars = eventsShema.validate(process.env, {
  allowUnknown: true,
}).value as IEnvVars;
