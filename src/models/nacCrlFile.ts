/**
 * Mist APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface NacCrlFile {
  /** Time at which the file was first uploaded, in epoch */
  createdTime?: number;
  /** ID for file upload, used to identify file even for deletion */
  id?: string;
  /** Time at which the file was last updated, in epoch */
  modifiedTime?: number;
  /** Name for the .crl file issuer if set */
  name?: string;
  /** Download URL for the .crl file */
  url?: string;
}

export const nacCrlFileSchema: Schema<NacCrlFile> = object({
  createdTime: ['created_time', optional(number())],
  id: ['id', optional(string())],
  modifiedTime: ['modified_time', optional(number())],
  name: ['name', optional(string())],
  url: ['url', optional(string())],
});