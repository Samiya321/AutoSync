let obj = JSON.parse($response.body);
obj =

{
  "subscriber": {
    "entitlements": {"pro"}
  }
}
$done({body: JSON.stringify(obj)});