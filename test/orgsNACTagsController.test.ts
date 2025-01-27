/**
 * Mist APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  NacTag,
  NacTagMatchEnum,
  NacTagTypeEnum,
  OrgsNACTagsController,
} from '../src';
import { testClient } from './testClient';
import {
  expectHeadersToMatch,
  expectMatchingWithOptions,
  makeApiCall,
} from './testHelper';

describe('OrgsNACTagsController', () => {
  let controller : OrgsNACTagsController;

  beforeAll(() => {
    controller = new OrgsNACTagsController(testClient);
  });

  it('should Test listOrgNacTags', async () => {
    const orgId = '000000ab-00ab-00ab-00ab-0000000000ab';

    const page = 1;

    const limit = 100;

    const response = await makeApiCall(
      () => controller.listOrgNacTags(
        orgId,
        undefined,
        undefined,
        undefined,
        page,
        limit
      )
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });

  it('should Test createOrgNacTag', async () => {
    const orgId = '000000ab-00ab-00ab-00ab-0000000000ab';

    const response = await makeApiCall(
      () => controller.createOrgNacTag(orgId, undefined)
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);

    const expected: NacTag = {
      name: 'cameras',
      type: NacTagTypeEnum.Match,
      match: NacTagMatchEnum.ClientMac,
      values: [
        '010203040506',
        'abcdef*'
      ],
    };

    expect(response.result).not.toBeNull();
    expectMatchingWithOptions(
      expected,
      response.result,
      { allowExtra: true, isOrdered: false, checkValues: false }
    );
  });

  it('should Test deleteOrgNacTag', async () => {
    const orgId = '000000ab-00ab-00ab-00ab-0000000000ab';

    const nactagId = '000000ab-00ab-00ab-00ab-0000000000ab';

    const response = await makeApiCall(
      () => controller.deleteOrgNacTag(orgId, nactagId)
    );

    expect(response.statusCode).toBe(200);
  });

  it('should Test getOrgNacTag', async () => {
    const orgId = '000000ab-00ab-00ab-00ab-0000000000ab';

    const nactagId = '000000ab-00ab-00ab-00ab-0000000000ab';

    const response = await makeApiCall(
      () => controller.getOrgNacTag(orgId, nactagId)
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);

    const expected: NacTag = {
      name: 'cameras',
      type: NacTagTypeEnum.Match,
      match: NacTagMatchEnum.ClientMac,
      values: [
        '010203040506',
        'abcdef*'
      ],
    };

    expect(response.result).not.toBeNull();
    expectMatchingWithOptions(
      expected,
      response.result,
      { allowExtra: true, isOrdered: false, checkValues: false }
    );
  });

  it('should Test updateOrgNacTag', async () => {
    const orgId = '000000ab-00ab-00ab-00ab-0000000000ab';

    const nactagId = '000000ab-00ab-00ab-00ab-0000000000ab';

    const response = await makeApiCall(
      () => controller.updateOrgNacTag(orgId, nactagId, undefined)
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);

    const expected: NacTag = {
      name: 'cameras',
      type: NacTagTypeEnum.Match,
      match: NacTagMatchEnum.ClientMac,
      values: [
        '010203040506',
        'abcdef*'
      ],
    };

    expect(response.result).not.toBeNull();
    expectMatchingWithOptions(
      expected,
      response.result,
      { allowExtra: true, isOrdered: false, checkValues: false }
    );
  });
});
