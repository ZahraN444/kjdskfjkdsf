/**
 * Mist APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  NacRuleActionEnum,
  nacRuleActionEnumSchema,
} from './nacRuleActionEnum';
import { NacRuleMatching, nacRuleMatchingSchema } from './nacRuleMatching';

export interface NacRule {
  action: NacRuleActionEnum;
  /** all optional, this goes into Access-Accept */
  applyTags?: string[];
  createdTime?: number;
  /** enabled or not */
  enabled?: boolean;
  id?: string;
  matching?: NacRuleMatching;
  modifiedTime?: number;
  name: string;
  notMatching?: NacRuleMatching;
  /** the order of the rule, lower value implies higher priority */
  order?: number;
  orgId?: string;
}

export const nacRuleSchema: Schema<NacRule> = object({
  action: ['action', nacRuleActionEnumSchema],
  applyTags: ['apply_tags', optional(array(string()))],
  createdTime: ['created_time', optional(number())],
  enabled: ['enabled', optional(boolean())],
  id: ['id', optional(string())],
  matching: ['matching', optional(lazy(() => nacRuleMatchingSchema))],
  modifiedTime: ['modified_time', optional(number())],
  name: ['name', string()],
  notMatching: ['not_matching', optional(lazy(() => nacRuleMatchingSchema))],
  order: ['order', optional(number())],
  orgId: ['org_id', optional(string())],
});
