
# Nac Portal

## Structure

`NacPortal`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accessType` | [`NacPortalAccessTypeEnum \| undefined`](../../doc/models/nac-portal-access-type-enum.md) | Optional | - |
| `bgImageUrl` | `string \| undefined` | Optional | background image |
| `certExpireTime` | `number \| undefined` | Optional | in days |
| `enableTelemetry` | `boolean \| undefined` | Optional | model, version, fingering, events (connecting, disconnect, roaming), which ap |
| `expiryNotificationTime` | `number \| undefined` | Optional | in days |
| `guestPortalConfig` | [`NacPortalSso \| undefined`](../../doc/models/nac-portal-sso.md) | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `notifyExpiry` | `boolean \| undefined` | Optional | phase 2 |
| `ssid` | `string \| undefined` | Optional | - |
| `sso` | [`NacPortalSso \| undefined`](../../doc/models/nac-portal-sso.md) | Optional | - |
| `templateUrl` | `string \| undefined` | Optional | - |
| `thumbnailUrl` | `string \| undefined` | Optional | - |
| `tos` | `string \| undefined` | Optional | - |
| `type` | [`NacPortalTypeEnum \| undefined`](../../doc/models/nac-portal-type-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "cert_expire_time": 365,
  "name": "get-wifi",
  "ssid": "Corp",
  "access_type": "wireless",
  "bg_image_url": "bg_image_url2",
  "enable_telemetry": false,
  "expiry_notification_time": 2
}
```

