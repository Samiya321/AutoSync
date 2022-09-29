let obj = JSON.parse($response.body);
obj =

{
  "subscriber": {"com.background.business.monthly"
    "entitlements": {"business"}
  }
}
$done({body: JSON.stringify(obj)});