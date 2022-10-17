var obj = JSON.parse($response.body);

obj = {

  "iap-300001249221451" : {
    "tier" : "pro",
    "expiresAt" : 4095893124000,
    "id" : "iap-300001249221451",
    "type" : "iap"
  }
}
$done({body: JSON.stringify(obj)});