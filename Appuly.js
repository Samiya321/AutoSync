var obj = JSON.parse($response.body);

obj = 

{
  "request_date": "2022-09-23T02:31:19Z",
  "request_date_ms": 1663900279169,
  "subscriber": {
    "entitlements": "pro",
    "first_seen": "2022-09-23T02:30:30Z",
    "last_seen": "2022-09-23T02:30:30Z",
    "management_url": null,
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:0f287d5dfb104a13ac702badbe13e35e",
    "original_application_version": "13",
    "original_purchase_date": "2022-08-23T02:36:49Z",
    "other_purchases": {},
    "subscriptions": {}
  }
}
$done({body: JSON.stringify(obj)});