import { Route, RouteResponse } from '../../commons/src';

export type RouteProperties = { [T in keyof Route]?: Route[T] };

export type RouteResponseProperties = {
  [T in keyof RouteResponse]?: RouteResponse[T];
};
