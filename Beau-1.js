var obj = JSON.parse($response.body);

obj =  

{
  "status": 0,
  "subs_status": 2,
  "vip_expires_date_ms": "1699584856000",
  "vip_product_id": "com.commsource.BeautyPlus.subscription.1year.newuser.tier2",
  "timestamp": 1668048041000
}
$done({body: JSON.stringify(obj)});