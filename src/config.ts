import * as nodeConfig from 'config';

interface IConfig {
  server: {
    port: number;
    url: string;
    version: string;
  };
  database: {
    url: string;
    host: string;
    user: string;
    password: string;
    database: string;
    dialect: string;
    schema: string;
  };
}

export const config: IConfig = {
  server: nodeConfig.get('server'),
  database: nodeConfig.get('database'),
};
