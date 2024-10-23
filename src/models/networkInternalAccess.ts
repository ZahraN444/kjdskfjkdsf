/**
 * Mist APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';

export interface NetworkInternalAccess {
  enabled?: boolean;
}

export const networkInternalAccessSchema: Schema<NetworkInternalAccess> = object(
  { enabled: ['enabled', optional(boolean())] }
);
