var obj = JSON.parse($response.body);

obj = 

{
  "request_date": "2022-09-22T23:04:11Z",
  "request_date_ms": 1663887851407,
  "subscriber": {
    "entitlements": {
      "pro": {
        "expires_date": "2099-09-29T02:38:53Z",
        "grace_period_expires_date": null,
        "product_identifier": "pro.sub.annual",
        "purchase_date": "2022-09-22T02:38:53Z"
      }
    },
    "first_seen": "2022-09-22T02:35:36Z",
    "last_seen": "2022-09-22T02:39:15Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:178ca0dbdd114beb8c17b019372f57cb",
    "original_application_version": "35",
    "original_purchase_date": "2022-09-22T02:35:13Z",
    "other_purchases": {},
    "subscriptions": {
      "pro.sub.annual": {
        "billing_issues_detected_at": null,
        "expires_date": "2099-09-29T02:38:53Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-09-22T02:38:54Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-09-22T02:38:53Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
}
$done({body: JSON.stringify(obj)});