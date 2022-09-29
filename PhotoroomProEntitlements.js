et obj = JSON.parse($response.body);
obj =

{
  "subscriber": {"com.background.pro.monthly"
    "entitlements": {"pro"}
  }
}
$done({body: JSON.stringify(obj)});