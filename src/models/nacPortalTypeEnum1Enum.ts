/**
 * Mist APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for NacPortalTypeEnum1Enum
 */
export enum NacPortalTypeEnum1Enum {
  MarvisClient = 'marvis_client',
  Guest = 'guest',
}

/**
 * Schema for NacPortalTypeEnum1Enum
 */
export const nacPortalTypeEnum1EnumSchema: Schema<NacPortalTypeEnum1Enum> = stringEnum(
  NacPortalTypeEnum1Enum
);
