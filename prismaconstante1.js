let obj = JSON.parse($response.body);
let url = $request.url;
var cons = "receipt";
var cons1= "9BA2E5A6";
if(url.indexOf(cons) != -1)
{
obj= {
 "is_grace_period" : false,
  "is_valid" : true,
  "promotional_offer_id" : "",
  "is_in_billing_retry_period" : false,
  "is_introductory_used" : true,
  "device_user_info" : {
    "subscription_valid" : true,
    "auth_type" : "apple",
  },
  "subscription_type" : "annual",
  "platform" : "ios",
  "product_id" : "premium.discount.annual",
  "auto_renew_enabled" : true,
  "expiration_date_unix" : 1752553905,
  "expiration_date" : "2025-07-15T04:31:45Z",
  "is_trial" : false,
  "status" : "ok",
  "processing_count" : 0
};
}
if(url.indexOf(cons1) != -1)
{
obj["list"][0]["expires_date"]= "2099-11-13 05:55:51";
}

$done({body: JSON.stringify(obj)});
