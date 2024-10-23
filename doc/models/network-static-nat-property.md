
# Network Static Nat Property

## Structure

`NetworkStaticNatProperty`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `internalIp` | `string \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `wanName` | `string \| undefined` | Optional | If not set, we configure the nat policies against all WAN ports for simplicity |

## Example (as JSON)

```json
{
  "internal_ip": "192.168.70.3",
  "name": "pos_station-1",
  "wan_name": "wan0"
}
```

