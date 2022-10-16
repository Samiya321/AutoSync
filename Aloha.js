let obj = JSON.parse($response.body);

obj = 

{
  "profile": {
    "id": 2128981,
    "email_verified": true,
    "end_of_premium": 4095873016,
    "_end_of_premium": "2099-10-16  22:30:16",
    "email": "fedemf38@icloud.com",
    "is_premium": true,
    "token": "2beeb667a3d625a842b25d38a89d6954",
    "can_mint": true
  },
  "error": null
}
$done({body: JSON.stringify(obj)});