import { Environment } from '../../commons/src';

export type EnvironmentProperties = {
  [T in keyof Environment]?: Environment[T];
};
