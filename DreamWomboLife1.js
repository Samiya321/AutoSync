var obj = JSON.parse($response.body);

obj =  {
  "request_date": "2022-11-27T01:08:37Z",
  "request_date_ms": 1669511317296,
  "subscriber": {
    "entitlements": {
      "dreampremium": {
        "expires_date": null,
        "product_identifier": "dream_lifetime",
        "purchase_date": "2022-11-26T20:18:34Z"
      }
    },
    "first_seen": "2022-11-26T23:50:38Z",
    "last_seen": "2022-11-26T23:51:39Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:6d69c84d0b4f4bf7b8dd4ac81bcc6c10",
    "original_application_version": "1",
    "original_purchase_date": "2022-11-26T14:01:52Z",
    "other_purchases": {},
    "subscriptions": {
      "dream_lifetime": {
        "auto_resume_date": null,
        "billing_issues_detected_at": null,
        "expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-11-26T20:18:35Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2022-11-26T20:18:34Z",
        "refunded_at": null,
        "store": "app_store"
      }
    }
  }
}
$done({body: JSON.stringify(obj)});