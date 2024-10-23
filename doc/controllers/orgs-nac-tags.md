# Orgs NAC Tags

```ts
const orgsNACTagsController = new OrgsNACTagsController(client);
```

## Class Name

`OrgsNACTagsController`

## Methods

* [Get Org Nac Tag](../../doc/controllers/orgs-nac-tags.md#get-org-nac-tag)
* [List Org Nac Tags](../../doc/controllers/orgs-nac-tags.md#list-org-nac-tags)
* [Delete Org Nac Tag](../../doc/controllers/orgs-nac-tags.md#delete-org-nac-tag)
* [Update Org Nac Tag](../../doc/controllers/orgs-nac-tags.md#update-org-nac-tag)
* [Create Org Nac Tag](../../doc/controllers/orgs-nac-tags.md#create-org-nac-tag)


# Get Org Nac Tag

Get Org NAC Tag

```ts
async getOrgNacTag(  orgId: string,
  nactagId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<NacTag>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `nactagId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`NacTag`](../../doc/models/nac-tag.md)

## Example Usage

```ts
const orgId = '000000ab-00ab-00ab-00ab-0000000000ab';

const nactagId = '000000ab-00ab-00ab-00ab-0000000000ab';

try {
  const { result, ...httpResponse } = await orgsNACTagsController.getOrgNacTag(
  orgId,
  nactagId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "match": "client_mac",
  "name": "cameras",
  "type": "match",
  "values": [
    "010203040506",
    "abcdef*"
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Syntax | [`ApiV1OrgsNactags400Error`](../../doc/models/api-v1-orgs-nactags-400-error.md) |
| 401 | Unauthorized | [`ApiV1OrgsNactags401Error`](../../doc/models/api-v1-orgs-nactags-401-error.md) |
| 403 | Permission Denied | [`ApiV1OrgsNactags403Error`](../../doc/models/api-v1-orgs-nactags-403-error.md) |
| 404 | Not found. The API endpoint doesnâ€™t exist or resource doesnâ€™ t exist | [`ResponseHttp404Error`](../../doc/models/response-http-404-error.md) |
| 429 | Too Many Request. The API Token used for the request reached the 5000 API Calls per hour threshold | [`ApiV1OrgsNactags429Error`](../../doc/models/api-v1-orgs-nactags-429-error.md) |


# List Org Nac Tags

Get List of Org NAC Tags

```ts
async listOrgNacTags(  orgId: string,
  type?: string,
  name?: string,
  match?: string,
  page?: number,
  limit?: number,
requestOptions?: RequestOptions): Promise<ApiResponse<NacTag[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `type` | `string \| undefined` | Query, Optional | Type of NAC Tag |
| `name` | `string \| undefined` | Query, Optional | Name of NAC Tag |
| `match` | `string \| undefined` | Query, Optional | Type of NAC Tag |
| `page` | `number \| undefined` | Query, Optional | **Default**: `1`<br>**Constraints**: `>= 1` |
| `limit` | `number \| undefined` | Query, Optional | **Default**: `100`<br>**Constraints**: `>= 0` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`NacTag[]`](../../doc/models/nac-tag.md)

## Example Usage

```ts
const orgId = '000000ab-00ab-00ab-00ab-0000000000ab';

const page = 1;

const limit = 100;

try {
  const { result, ...httpResponse } = await orgsNACTagsController.listOrgNacTags(
  orgId,
  undefined,
  undefined,
  undefined,
  page,
  limit
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Syntax | [`ApiV1OrgsNactags400Error`](../../doc/models/api-v1-orgs-nactags-400-error.md) |
| 401 | Unauthorized | [`ApiV1OrgsNactags401Error`](../../doc/models/api-v1-orgs-nactags-401-error.md) |
| 403 | Permission Denied | [`ApiV1OrgsNactags403Error`](../../doc/models/api-v1-orgs-nactags-403-error.md) |
| 404 | Not found. The API endpoint doesnâ€™t exist or resource doesnâ€™ t exist | [`ResponseHttp404Error`](../../doc/models/response-http-404-error.md) |
| 429 | Too Many Request. The API Token used for the request reached the 5000 API Calls per hour threshold | [`ApiV1OrgsNactags429Error`](../../doc/models/api-v1-orgs-nactags-429-error.md) |


# Delete Org Nac Tag

Delete Org NAC Tag

```ts
async deleteOrgNacTag(  orgId: string,
  nactagId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `nactagId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const orgId = '000000ab-00ab-00ab-00ab-0000000000ab';

const nactagId = '000000ab-00ab-00ab-00ab-0000000000ab';

try {
  const { result, ...httpResponse } = await orgsNACTagsController.deleteOrgNacTag(
  orgId,
  nactagId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Syntax | [`ApiV1OrgsNactags400Error`](../../doc/models/api-v1-orgs-nactags-400-error.md) |
| 401 | Unauthorized | [`ApiV1OrgsNactags401Error`](../../doc/models/api-v1-orgs-nactags-401-error.md) |
| 403 | Permission Denied | [`ApiV1OrgsNactags403Error`](../../doc/models/api-v1-orgs-nactags-403-error.md) |
| 404 | Not found. The API endpoint doesnâ€™t exist or resource doesnâ€™ t exist | [`ResponseHttp404Error`](../../doc/models/response-http-404-error.md) |
| 429 | Too Many Request. The API Token used for the request reached the 5000 API Calls per hour threshold | [`ApiV1OrgsNactags429Error`](../../doc/models/api-v1-orgs-nactags-429-error.md) |


# Update Org Nac Tag

Update Org NAC Tag

```ts
async updateOrgNacTag(  orgId: string,
  nactagId: string,
  body?: NacTag,
requestOptions?: RequestOptions): Promise<ApiResponse<NacTag>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `nactagId` | `string` | Template, Required | - |
| `body` | [`NacTag \| undefined`](../../doc/models/nac-tag.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`NacTag`](../../doc/models/nac-tag.md)

## Example Usage

```ts
const orgId = '000000ab-00ab-00ab-00ab-0000000000ab';

const nactagId = '000000ab-00ab-00ab-00ab-0000000000ab';

const body: NacTag = {
  name: 'name6',
  type: NacTagTypeEnum.UsernameAttr,
  allowUsermacOverride: false,
  egressVlanNames: [
    '1vlan-30',
    '1vlan-20',
    '2-vlan10'
  ],
  matchAll: false,
  orgId: 'a97c1b22-a4e9-411e-9bfd-d8695a0f9e61',
  radiusAttrs: [
    'Idle-Timeout=600',
    'Termination-Action=RADIUS-Request'
  ],
  radiusVendorAttrs: [
    'PaloAlto-Admin-Role=superuser',
    'PaloAlto-Panorama-Admin-Role=administrator'
  ],
  sessionTimeout: 86000,
};

try {
  const { result, ...httpResponse } = await orgsNACTagsController.updateOrgNacTag(
  orgId,
  nactagId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "match": "client_mac",
  "name": "cameras",
  "type": "match",
  "values": [
    "010203040506",
    "abcdef*"
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Syntax | [`ApiV1OrgsNactags400Error`](../../doc/models/api-v1-orgs-nactags-400-error.md) |
| 401 | Unauthorized | [`ApiV1OrgsNactags401Error`](../../doc/models/api-v1-orgs-nactags-401-error.md) |
| 403 | Permission Denied | [`ApiV1OrgsNactags403Error`](../../doc/models/api-v1-orgs-nactags-403-error.md) |
| 404 | Not found. The API endpoint doesnâ€™t exist or resource doesnâ€™ t exist | [`ResponseHttp404Error`](../../doc/models/response-http-404-error.md) |
| 429 | Too Many Request. The API Token used for the request reached the 5000 API Calls per hour threshold | [`ApiV1OrgsNactags429Error`](../../doc/models/api-v1-orgs-nactags-429-error.md) |


# Create Org Nac Tag

Create Org NAC Tag

```ts
async createOrgNacTag(  orgId: string,
  body?: NacTag,
requestOptions?: RequestOptions): Promise<ApiResponse<NacTag>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `body` | [`NacTag \| undefined`](../../doc/models/nac-tag.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`NacTag`](../../doc/models/nac-tag.md)

## Example Usage

```ts
const orgId = '000000ab-00ab-00ab-00ab-0000000000ab';

const body: NacTag = {
  name: 'name6',
  type: NacTagTypeEnum.UsernameAttr,
  allowUsermacOverride: false,
  egressVlanNames: [
    '1vlan-30',
    '1vlan-20',
    '2-vlan10'
  ],
  matchAll: false,
  orgId: 'a97c1b22-a4e9-411e-9bfd-d8695a0f9e61',
  radiusAttrs: [
    'Idle-Timeout=600',
    'Termination-Action=RADIUS-Request'
  ],
  radiusVendorAttrs: [
    'PaloAlto-Admin-Role=superuser',
    'PaloAlto-Panorama-Admin-Role=administrator'
  ],
  sessionTimeout: 86000,
};

try {
  const { result, ...httpResponse } = await orgsNACTagsController.createOrgNacTag(
  orgId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "match": "client_mac",
  "name": "cameras",
  "type": "match",
  "values": [
    "010203040506",
    "abcdef*"
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Syntax | [`ApiV1OrgsNactags400Error`](../../doc/models/api-v1-orgs-nactags-400-error.md) |
| 401 | Unauthorized | [`ApiV1OrgsNactags401Error`](../../doc/models/api-v1-orgs-nactags-401-error.md) |
| 403 | Permission Denied | [`ApiV1OrgsNactags403Error`](../../doc/models/api-v1-orgs-nactags-403-error.md) |
| 404 | Not found. The API endpoint doesnâ€™t exist or resource doesnâ€™ t exist | [`ResponseHttp404Error`](../../doc/models/response-http-404-error.md) |
| 429 | Too Many Request. The API Token used for the request reached the 5000 API Calls per hour threshold | [`ApiV1OrgsNactags429Error`](../../doc/models/api-v1-orgs-nactags-429-error.md) |

