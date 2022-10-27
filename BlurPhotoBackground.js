var obj = JSON.parse($response.body);

obj = 

{
  "request_date": "2022-10-27T21:35:39Z",
  "request_date_ms": 1666906539346,
  "subscriber": {
    "entitlements": {
      "Pro": {
        "expires_date": "2099-10-30T21:29:53Z",
        "grace_period_expires_date": null,
        "product_identifier": "subs_year_1",
        "purchase_date": "2022-10-27T21:29:53Z"
      }
    },
    "first_seen": "2022-10-27T21:29:27Z",
    "last_seen": "2022-10-27T21:29:27Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:99a174fbef1340eda173f08f84984eae",
    "original_application_version": "1",
    "original_purchase_date": "2022-10-27T21:02:17Z",
    "other_purchases": {},
    "subscriptions": {
      "subs_year_1": {
        "billing_issues_detected_at": null,
        "expires_date": "2099-10-30T21:29:53Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-10-27T21:29:54Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2022-10-27T21:29:53Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
}
$done({body: JSON.stringify(obj)});