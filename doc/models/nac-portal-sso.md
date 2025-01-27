
# Nac Portal Sso

## Structure

`NacPortalSso`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idpCert` | `string \| undefined` | Optional | - |
| `idpSignAlgo` | `string \| undefined` | Optional | - |
| `idpSsoUrl` | `string \| undefined` | Optional | - |
| `issuer` | `string \| undefined` | Optional | - |
| `nameidFormat` | `string \| undefined` | Optional | - |
| `ssoRoleMatching` | [`NacPortalSsoRoleMatching[] \| undefined`](../../doc/models/nac-portal-sso-role-matching.md) | Optional | - |
| `useSsoRoleForCert` | `boolean \| undefined` | Optional | if it's desired to inject a role into Cert's Subject (so it can be used later on in policy) |

## Example (as JSON)

```json
{
  "idp_cert": "-----BEGIN CERTIFICATE-----\\nMIIFZjCCA06gAwIBAgIIP61/1qm/uDowDQYJKoZIhvcNAQELBQE\\n-----END CERTIFICATE-----",
  "idp_sign_algo": "sha256",
  "idp_sso_url": "https://yourorg.onelogin.com/trust/saml2/http-post/sso/138130",
  "issuer": "https://app.onelogin.com/saml/metadata/138130",
  "nameid_format": "email"
}
```

