# Orgs NAC Portals

```ts
const orgsNACPortalsController = new OrgsNACPortalsController(client);
```

## Class Name

`OrgsNACPortalsController`

## Methods

* [List Org Nac Portals](../../doc/controllers/orgs-nac-portals.md#list-org-nac-portals)
* [Create Org Nac Portal](../../doc/controllers/orgs-nac-portals.md#create-org-nac-portal)
* [Delete Org Nac Portal](../../doc/controllers/orgs-nac-portals.md#delete-org-nac-portal)
* [Get Org Nac Portal](../../doc/controllers/orgs-nac-portals.md#get-org-nac-portal)
* [Update Org Nac Portal](../../doc/controllers/orgs-nac-portals.md#update-org-nac-portal)
* [List Org Nac Portal Sso Latest Failures](../../doc/controllers/orgs-nac-portals.md#list-org-nac-portal-sso-latest-failures)
* [Delete Org Nac Portal Image](../../doc/controllers/orgs-nac-portals.md#delete-org-nac-portal-image)
* [Upload Org Nac Portal Image](../../doc/controllers/orgs-nac-portals.md#upload-org-nac-portal-image)
* [Update Org Nac Portal Tempalte](../../doc/controllers/orgs-nac-portals.md#update-org-nac-portal-tempalte)


# List Org Nac Portals

List Org NAC Portals

```ts
async listOrgNacPortals(  orgId: string,
  page?: number,
  limit?: number,
requestOptions?: RequestOptions): Promise<ApiResponse<NacPortal[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `page` | `number \| undefined` | Query, Optional | **Default**: `1`<br>**Constraints**: `>= 1` |
| `limit` | `number \| undefined` | Query, Optional | **Default**: `100`<br>**Constraints**: `>= 0` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`NacPortal[]`](../../doc/models/nac-portal.md)

## Example Usage

```ts
const orgId = '000000ab-00ab-00ab-00ab-0000000000ab';

const page = 1;

const limit = 100;

try {
  const { result, ...httpResponse } = await orgsNACPortalsController.listOrgNacPortals(
  orgId,
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

## Example Response *(as JSON)*

```json
[
  {
    "access_type": "wireless",
    "cert_expire_time": 365,
    "enable_telemetry": true,
    "expiry_notification_time": 2,
    "name": "get-wifi",
    "notify_expiry": true,
    "ssid": "Corp",
    "sso": {
      "idp_cert": "-----BEGIN CERTIFICATE-----\nMIIFZjCCA06gAwIBAgIIP61/1qm/uDowDQYJKoZIhvcNAQELBQE\n-----END CERTIFICATE-----",
      "idp_sign_algo": "sha256",
      "idp_sso_url": "https://yourorg.onelogin.com/trust/saml2/http-post/sso/138130",
      "issuer": "https://app.onelogin.com/saml/metadata/138130",
      "nameid_format": "email",
      "sso_role_matching": [
        {
          "assigned": "user",
          "match": "Student"
        }
      ],
      "use_sso_role_for_cert": true
    }
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Syntax | [`ApiV1OrgsNacportals400Error`](../../doc/models/api-v1-orgs-nacportals-400-error.md) |
| 401 | Unauthorized | [`ApiV1OrgsNacportals401Error`](../../doc/models/api-v1-orgs-nacportals-401-error.md) |
| 403 | Permission Denied | [`ApiV1OrgsNacportals403Error`](../../doc/models/api-v1-orgs-nacportals-403-error.md) |
| 404 | Not found. The API endpoint doesnâ€™t exist or resource doesnâ€™ t exist | [`ResponseHttp404Error`](../../doc/models/response-http-404-error.md) |
| 429 | Too Many Request. The API Token used for the request reached the 5000 API Calls per hour threshold | [`ApiV1OrgsNacportals429Error`](../../doc/models/api-v1-orgs-nacportals-429-error.md) |


# Create Org Nac Portal

Create Org NAC Portal

```ts
async createOrgNacPortal(  orgId: string,
  body?: NacPortal,
requestOptions?: RequestOptions): Promise<ApiResponse<NacPortal>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `body` | [`NacPortal \| undefined`](../../doc/models/nac-portal.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`NacPortal`](../../doc/models/nac-portal.md)

## Example Usage

```ts
const orgId = '000000ab-00ab-00ab-00ab-0000000000ab';

const body: NacPortal = {
  certExpireTime: 365,
  name: 'get-wifi',
  ssid: 'Corp',
};

try {
  const { result, ...httpResponse } = await orgsNACPortalsController.createOrgNacPortal(
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
  "access_type": "wireless",
  "cert_expire_time": 365,
  "enable_telemetry": true,
  "expiry_notification_time": 2,
  "name": "get-wifi",
  "notify_expiry": true,
  "ssid": "Corp",
  "sso": {
    "idp_cert": "-----BEGIN CERTIFICATE-----\nMIIFZjCCA06gAwIBAgIIP61/1qm/uDowDQYJKoZIhvcNAQELBQE\n-----END CERTIFICATE-----",
    "idp_sign_algo": "sha256",
    "idp_sso_url": "https://yourorg.onelogin.com/trust/saml2/http-post/sso/138130",
    "issuer": "https://app.onelogin.com/saml/metadata/138130",
    "nameid_format": "email",
    "sso_role_matching": [
      {
        "assigned": "user",
        "match": "Student"
      }
    ],
    "use_sso_role_for_cert": true
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Syntax | [`ApiV1OrgsNacportals400Error`](../../doc/models/api-v1-orgs-nacportals-400-error.md) |
| 401 | Unauthorized | [`ApiV1OrgsNacportals401Error`](../../doc/models/api-v1-orgs-nacportals-401-error.md) |
| 403 | Permission Denied | [`ApiV1OrgsNacportals403Error`](../../doc/models/api-v1-orgs-nacportals-403-error.md) |
| 404 | Not found. The API endpoint doesnâ€™t exist or resource doesnâ€™ t exist | [`ResponseHttp404Error`](../../doc/models/response-http-404-error.md) |
| 429 | Too Many Request. The API Token used for the request reached the 5000 API Calls per hour threshold | [`ApiV1OrgsNacportals429Error`](../../doc/models/api-v1-orgs-nacportals-429-error.md) |


# Delete Org Nac Portal

Delete Org NAC Portal

```ts
async deleteOrgNacPortal(  orgId: string,
  nacportalId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `nacportalId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const orgId = '000000ab-00ab-00ab-00ab-0000000000ab';

const nacportalId = '000000ab-00ab-00ab-00ab-0000000000ab';

try {
  const { result, ...httpResponse } = await orgsNACPortalsController.deleteOrgNacPortal(
  orgId,
  nacportalId
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
| 400 | Bad Syntax | [`ApiV1OrgsNacportals400Error`](../../doc/models/api-v1-orgs-nacportals-400-error.md) |
| 401 | Unauthorized | [`ApiV1OrgsNacportals401Error`](../../doc/models/api-v1-orgs-nacportals-401-error.md) |
| 403 | Permission Denied | [`ApiV1OrgsNacportals403Error`](../../doc/models/api-v1-orgs-nacportals-403-error.md) |
| 404 | Not found. The API endpoint doesnâ€™t exist or resource doesnâ€™ t exist | [`ResponseHttp404Error`](../../doc/models/response-http-404-error.md) |
| 429 | Too Many Request. The API Token used for the request reached the 5000 API Calls per hour threshold | [`ApiV1OrgsNacportals429Error`](../../doc/models/api-v1-orgs-nacportals-429-error.md) |


# Get Org Nac Portal

Get Org NAC Portal

```ts
async getOrgNacPortal(  orgId: string,
  nacportalId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<NacPortal>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `nacportalId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`NacPortal`](../../doc/models/nac-portal.md)

## Example Usage

```ts
const orgId = '000000ab-00ab-00ab-00ab-0000000000ab';

const nacportalId = '000000ab-00ab-00ab-00ab-0000000000ab';

try {
  const { result, ...httpResponse } = await orgsNACPortalsController.getOrgNacPortal(
  orgId,
  nacportalId
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
  "access_type": "wireless",
  "cert_expire_time": 365,
  "enable_telemetry": true,
  "expiry_notification_time": 2,
  "name": "get-wifi",
  "notify_expiry": true,
  "ssid": "Corp",
  "sso": {
    "idp_cert": "-----BEGIN CERTIFICATE-----\nMIIFZjCCA06gAwIBAgIIP61/1qm/uDowDQYJKoZIhvcNAQELBQE\n-----END CERTIFICATE-----",
    "idp_sign_algo": "sha256",
    "idp_sso_url": "https://yourorg.onelogin.com/trust/saml2/http-post/sso/138130",
    "issuer": "https://app.onelogin.com/saml/metadata/138130",
    "nameid_format": "email",
    "sso_role_matching": [
      {
        "assigned": "user",
        "match": "Student"
      }
    ],
    "use_sso_role_for_cert": true
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Syntax | [`ApiV1OrgsNacportals400Error`](../../doc/models/api-v1-orgs-nacportals-400-error.md) |
| 401 | Unauthorized | [`ApiV1OrgsNacportals401Error`](../../doc/models/api-v1-orgs-nacportals-401-error.md) |
| 403 | Permission Denied | [`ApiV1OrgsNacportals403Error`](../../doc/models/api-v1-orgs-nacportals-403-error.md) |
| 404 | Not found. The API endpoint doesnâ€™t exist or resource doesnâ€™ t exist | [`ResponseHttp404Error`](../../doc/models/response-http-404-error.md) |
| 429 | Too Many Request. The API Token used for the request reached the 5000 API Calls per hour threshold | [`ApiV1OrgsNacportals429Error`](../../doc/models/api-v1-orgs-nacportals-429-error.md) |


# Update Org Nac Portal

Update Org NAC Portal

```ts
async updateOrgNacPortal(  orgId: string,
  nacportalId: string,
  body?: NacPortal,
requestOptions?: RequestOptions): Promise<ApiResponse<NacPortal>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `nacportalId` | `string` | Template, Required | - |
| `body` | [`NacPortal \| undefined`](../../doc/models/nac-portal.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`NacPortal`](../../doc/models/nac-portal.md)

## Example Usage

```ts
const orgId = '000000ab-00ab-00ab-00ab-0000000000ab';

const nacportalId = '000000ab-00ab-00ab-00ab-0000000000ab';

const body: NacPortal = {
  certExpireTime: 365,
  name: 'get-wifi',
  ssid: 'Corp',
};

try {
  const { result, ...httpResponse } = await orgsNACPortalsController.updateOrgNacPortal(
  orgId,
  nacportalId,
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
  "access_type": "wireless",
  "cert_expire_time": 365,
  "enable_telemetry": true,
  "expiry_notification_time": 2,
  "name": "get-wifi",
  "notify_expiry": true,
  "ssid": "Corp",
  "sso": {
    "idp_cert": "-----BEGIN CERTIFICATE-----\nMIIFZjCCA06gAwIBAgIIP61/1qm/uDowDQYJKoZIhvcNAQELBQE\n-----END CERTIFICATE-----",
    "idp_sign_algo": "sha256",
    "idp_sso_url": "https://yourorg.onelogin.com/trust/saml2/http-post/sso/138130",
    "issuer": "https://app.onelogin.com/saml/metadata/138130",
    "nameid_format": "email",
    "sso_role_matching": [
      {
        "assigned": "user",
        "match": "Student"
      }
    ],
    "use_sso_role_for_cert": true
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Syntax | [`ApiV1OrgsNacportals400Error`](../../doc/models/api-v1-orgs-nacportals-400-error.md) |
| 401 | Unauthorized | [`ApiV1OrgsNacportals401Error`](../../doc/models/api-v1-orgs-nacportals-401-error.md) |
| 403 | Permission Denied | [`ApiV1OrgsNacportals403Error`](../../doc/models/api-v1-orgs-nacportals-403-error.md) |
| 404 | Not found. The API endpoint doesnâ€™t exist or resource doesnâ€™ t exist | [`ResponseHttp404Error`](../../doc/models/response-http-404-error.md) |
| 429 | Too Many Request. The API Token used for the request reached the 5000 API Calls per hour threshold | [`ApiV1OrgsNacportals429Error`](../../doc/models/api-v1-orgs-nacportals-429-error.md) |


# List Org Nac Portal Sso Latest Failures

Get List of Org NAC Portal SSO Latest Failures

```ts
async listOrgNacPortalSsoLatestFailures(  orgId: string,
  nacportalId: string,
  page?: number,
  limit?: number,
  start?: number,
  end?: number,
  duration?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ResponseSsoFailureSearch>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `nacportalId` | `string` | Template, Required | - |
| `page` | `number \| undefined` | Query, Optional | **Default**: `1`<br>**Constraints**: `>= 1` |
| `limit` | `number \| undefined` | Query, Optional | **Default**: `100`<br>**Constraints**: `>= 0` |
| `start` | `number \| undefined` | Query, Optional | start datetime, can be epoch or relative time like -1d, -1w; -1d if not specified |
| `end` | `number \| undefined` | Query, Optional | end datetime, can be epoch or relative time like -1d, -2h; now if not specified |
| `duration` | `string \| undefined` | Query, Optional | duration like 7d, 2w<br>**Default**: `'1d'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseSsoFailureSearch`](../../doc/models/response-sso-failure-search.md)

## Example Usage

```ts
const orgId = '000000ab-00ab-00ab-00ab-0000000000ab';

const nacportalId = '000000ab-00ab-00ab-00ab-0000000000ab';

const page = 1;

const limit = 100;

const duration = '10m';

try {
  const { result, ...httpResponse } = await orgsNACPortalsController.listOrgNacPortalSsoLatestFailures(
  orgId,
  nacportalId,
  page,
  limit,
  undefined,
  undefined,
  duration
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
  "results": [
    {
      "detail": "string",
      "saml_assertion_xml": "string",
      "timestamp": 0
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Syntax | [`ApiV1OrgsNacportalsFailures400Error`](../../doc/models/api-v1-orgs-nacportals-failures-400-error.md) |
| 401 | Unauthorized | [`ApiV1OrgsNacportalsFailures401Error`](../../doc/models/api-v1-orgs-nacportals-failures-401-error.md) |
| 403 | Permission Denied | [`ApiV1OrgsNacportalsFailures403Error`](../../doc/models/api-v1-orgs-nacportals-failures-403-error.md) |
| 404 | Not found. The API endpoint doesnâ€™t exist or resource doesnâ€™ t exist | [`ResponseHttp404Error`](../../doc/models/response-http-404-error.md) |
| 429 | Too Many Request. The API Token used for the request reached the 5000 API Calls per hour threshold | [`ApiV1OrgsNacportalsFailures429Error`](../../doc/models/api-v1-orgs-nacportals-failures-429-error.md) |


# Delete Org Nac Portal Image

Delete background image for NAC Portal

If image is not uploaded or is deleted, NAC Portal will use default image.

```ts
async deleteOrgNacPortalImage(  orgId: string,
  nacportalId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `nacportalId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const orgId = '000000ab-00ab-00ab-00ab-0000000000ab';

const nacportalId = '000000ab-00ab-00ab-00ab-0000000000ab';

try {
  const { result, ...httpResponse } = await orgsNACPortalsController.deleteOrgNacPortalImage(
  orgId,
  nacportalId
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
| 400 | Bad Syntax | [`ApiV1OrgsNacportalsPortalImage400Error`](../../doc/models/api-v1-orgs-nacportals-portal-image-400-error.md) |
| 401 | Unauthorized | [`ApiV1OrgsNacportalsPortalImage401Error`](../../doc/models/api-v1-orgs-nacportals-portal-image-401-error.md) |
| 403 | Permission Denied | [`ApiV1OrgsNacportalsPortalImage403Error`](../../doc/models/api-v1-orgs-nacportals-portal-image-403-error.md) |
| 404 | Not found. The API endpoint doesnâ€™t exist or resource doesnâ€™ t exist | [`ResponseHttp404Error`](../../doc/models/response-http-404-error.md) |
| 429 | Too Many Request. The API Token used for the request reached the 5000 API Calls per hour threshold | [`ApiV1OrgsNacportalsPortalImage429Error`](../../doc/models/api-v1-orgs-nacportals-portal-image-429-error.md) |


# Upload Org Nac Portal Image

Upload background image for NAC Portal

```ts
async uploadOrgNacPortalImage(  orgId: string,
  nacportalId: string,
  file?: FileWrapper,
  json?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `nacportalId` | `string` | Template, Required | - |
| `file` | `FileWrapper \| undefined` | Form, Optional | Binary file |
| `json` | `string \| undefined` | Form, Optional | JSON string describing the upload |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const orgId = '000000ab-00ab-00ab-00ab-0000000000ab';

const nacportalId = '000000ab-00ab-00ab-00ab-0000000000ab';

try {
  const { result, ...httpResponse } = await orgsNACPortalsController.uploadOrgNacPortalImage(
  orgId,
  nacportalId
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
| 400 | Bad Syntax | [`ApiV1OrgsNacportalsPortalImage400Error`](../../doc/models/api-v1-orgs-nacportals-portal-image-400-error.md) |
| 401 | Unauthorized | [`ApiV1OrgsNacportalsPortalImage401Error`](../../doc/models/api-v1-orgs-nacportals-portal-image-401-error.md) |
| 403 | Permission Denied | [`ApiV1OrgsNacportalsPortalImage403Error`](../../doc/models/api-v1-orgs-nacportals-portal-image-403-error.md) |
| 404 | Not found. The API endpoint doesnâ€™t exist or resource doesnâ€™ t exist | [`ResponseHttp404Error`](../../doc/models/response-http-404-error.md) |
| 429 | Too Many Request. The API Token used for the request reached the 5000 API Calls per hour threshold | [`ApiV1OrgsNacportalsPortalImage429Error`](../../doc/models/api-v1-orgs-nacportals-portal-image-429-error.md) |


# Update Org Nac Portal Tempalte

Update Org NAC Portal Template

```ts
async updateOrgNacPortalTempalte(  orgId: string,
  nacportalId: string,
  body?: NacPortalTemplate,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `nacportalId` | `string` | Template, Required | - |
| `body` | [`NacPortalTemplate \| undefined`](../../doc/models/nac-portal-template.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const orgId = '000000ab-00ab-00ab-00ab-0000000000ab';

const nacportalId = '000000ab-00ab-00ab-00ab-0000000000ab';

const body: NacPortalTemplate = {
  color: '#1074bc',
  poweredBy: false,
};

try {
  const { result, ...httpResponse } = await orgsNACPortalsController.updateOrgNacPortalTempalte(
  orgId,
  nacportalId,
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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Syntax | [`ApiV1OrgsNacportalsPortalTemplate400Error`](../../doc/models/api-v1-orgs-nacportals-portal-template-400-error.md) |
| 401 | Unauthorized | [`ApiV1OrgsNacportalsPortalTemplate401Error`](../../doc/models/api-v1-orgs-nacportals-portal-template-401-error.md) |
| 403 | Permission Denied | [`ApiV1OrgsNacportalsPortalTemplate403Error`](../../doc/models/api-v1-orgs-nacportals-portal-template-403-error.md) |
| 404 | Not found. The API endpoint doesnâ€™t exist or resource doesnâ€™ t exist | [`ResponseHttp404Error`](../../doc/models/response-http-404-error.md) |
| 429 | Too Many Request. The API Token used for the request reached the 5000 API Calls per hour threshold | [`ApiV1OrgsNacportalsPortalTemplate429Error`](../../doc/models/api-v1-orgs-nacportals-portal-template-429-error.md) |

