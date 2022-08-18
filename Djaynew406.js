var obj = JSON.parse($response.body);

obj =  {
  "request_date": "2022-08-18T13:41:02Z",
  "request_date_ms": 1660830062804,
  "subscriber": {
    "entitlements": {
      "pro": {
        "expires_date": "2023-08-25T13:40:58Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.algoriddim.djay_iphone_free.pro.yearly",
        "purchase_date": "2022-08-18T13:40:58Z"
      }
    },
    "first_seen": "2022-08-18T13:40:25Z",
    "last_seen": "2022-08-18T13:40:25Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:55c80e20306e4e75a30875545cab38b1",
    "original_application_version": "49404",
    "original_purchase_date": "2022-08-18T13:40:01Z",
    "other_purchases": {},
    "subscriptions": {
      "com.algoriddim.djay_iphone_free.pro.yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2022-08-25T13:40:58Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-08-18T13:40:59Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-08-18T13:40:58Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
}
$done({body: JSON.stringify(obj)});