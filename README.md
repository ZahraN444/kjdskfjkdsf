
# Getting Started with Mist API

## Introduction

> Version: **2408.1.0**
> 
> Date: **August 1, 2024**

---


### Additional Documentation

* [Mist Automation Guide](https://www.juniper.net/documentation/us/en/software/mist/automation-integration/index.html)
* [Mist Location SDK](https://www.juniper.net/documentation/us/en/software/mist/location_services/topics/concept/mist-how-get-mist-sdk.html)
* [Mist Product Updates](https://www.mist.com/documentation/category/product-updates/)

---


### Helpful Resources

* [API Sandbox and Exercises](https://api-class.mist.com/)
* [Postman Collection, Runners and Webhook Samples](https://www.postman.com/juniper-mist/workspace/mist-systems-s-public-workspace)
* [API Demo Apps](https://apps.mist-lab.fr/)
* [Juniper Blog](https://blogs.juniper.net/)

---


## Install the Package

Run the following command from your project directory to install the package from npm:

```ts
npm install ptheyrye@4.5.6
```

For additional package details, see the [Npm page for the ptheyrye@4.5.6 npm](https://www.npmjs.com/package/ptheyrye/v/4.5.6).

## Test the SDK

To validate the functionality of this SDK, you can execute all tests located in the `test` directory. This SDK utilizes `Jest` as both the testing framework and test runner.

To run the tests, navigate to the root directory of the SDK and execute the following command:

```bash
npm run test
```

Or you can also run tests with coverage report:

```bash
npm run test:coverage
```

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/ZahraN444/kjdskfjkdsf/tree/4.5.6/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | `Environment` | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `apiTokenCredentials` | [`ApiTokenCredentials`](https://www.github.com/ZahraN444/kjdskfjkdsf/tree/4.5.6/doc/auth/custom-header-signature.md) | The credential object for apiToken |
| `basicAuthCredentials` | [`BasicAuthCredentials`](https://www.github.com/ZahraN444/kjdskfjkdsf/tree/4.5.6/doc/auth/basic-authentication.md) | The credential object for basicAuth |
| `csrfTokenCredentials` | [`CsrfTokenCredentials`](https://www.github.com/ZahraN444/kjdskfjkdsf/tree/4.5.6/doc/auth/custom-header-signature-1.md) | The credential object for csrfToken |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  apiTokenCredentials: {
    'Authorization': 'Authorization'
  },
  basicAuthCredentials: {
    username: 'Username',
    password: 'Password'
  },
  csrfTokenCredentials: {
    'X-CSRFToken': 'X-CSRFToken'
  },
  timeout: 0,
  environment: Environment.Production,
});
```

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| production | **Default** |
| environment2 | - |
| environment3 | - |
| environment4 | - |
| environment5 | - |
| environment6 | - |
| environment7 | - |
| environment8 | - |

## Authorization

This API uses the following authentication schemes.

* [`apiToken (Custom Header Signature)`](https://www.github.com/ZahraN444/kjdskfjkdsf/tree/4.5.6/doc/auth/custom-header-signature.md)
* [`basicAuth (Basic Authentication)`](https://www.github.com/ZahraN444/kjdskfjkdsf/tree/4.5.6/doc/auth/basic-authentication.md)
* [`csrfToken (Custom Header Signature)`](https://www.github.com/ZahraN444/kjdskfjkdsf/tree/4.5.6/doc/auth/custom-header-signature-1.md)

## List of APIs

* [Orgs NAC Tags](https://www.github.com/ZahraN444/kjdskfjkdsf/tree/4.5.6/doc/controllers/orgs-nac-tags.md)
* [Orgs NAC Portals](https://www.github.com/ZahraN444/kjdskfjkdsf/tree/4.5.6/doc/controllers/orgs-nac-portals.md)

## Classes Documentation

* [ApiResponse](https://www.github.com/ZahraN444/kjdskfjkdsf/tree/4.5.6/doc/api-response.md)
* [ApiError](https://www.github.com/ZahraN444/kjdskfjkdsf/tree/4.5.6/doc/api-error.md)

