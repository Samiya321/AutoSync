let obj = JSON.parse($response.body);

obj = 

{
  "profile": {
    "id": "",
    "email_verified": true,
    "end_of_premium": 4095873016,
    "_end_of_premium": "2099-10-16  22:30:16",
    "email": "",
    "is_premium": true,
    "token": "",
    "can_mint": false
  },
  "error": null
}
$done({body: JSON.stringify(obj)});