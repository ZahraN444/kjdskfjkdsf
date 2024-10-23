/**
 * Mist APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';
import {
  NacPortalTypeEnum1Enum,
  nacPortalTypeEnum1EnumSchema,
} from './nacPortalTypeEnum1Enum';

export interface NacPortalTemplate {
  alignment?: NacPortalTypeEnum1Enum;
  color?: string;
  /** custom logo custom logo with â€œdata:image/png;base64,â€ format. default null, uses Juniper Mist Logo. */
  logo?: string;
  /** whether to hide â€œPowered by Juniper Mistâ€ and email footers */
  poweredBy?: boolean;
}

export const nacPortalTemplateSchema: Schema<NacPortalTemplate> = object({
  alignment: ['alignment', optional(nacPortalTypeEnum1EnumSchema)],
  color: ['color', optional(string())],
  logo: ['logo', optional(string())],
  poweredBy: ['poweredBy', optional(boolean())],
});
