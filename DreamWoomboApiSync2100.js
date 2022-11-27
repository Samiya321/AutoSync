var obj = JSON.parse($response.body);

obj = 

{
  "is_premium": true,
  "expires_on": "2100-11-29T20:18:34",
  "discord_id": null,
  "premium_code": "EQNGX3I4"
}

$done({body: JSON.stringify(obj)});