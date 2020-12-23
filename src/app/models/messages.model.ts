import { ServerErrorCodes } from '../../commons/src';

export type MessageParams = { [key: string]: any; error?: Error };
export type MessageCodes =
  | ServerErrorCodes
  | 'ENVIRONMENT_STOPPED'
  | 'ENVIRONMENT_STARTED'
  | 'CREATING_PROXY';
