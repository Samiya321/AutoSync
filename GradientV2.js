var obj = JSON.parse($response.body);

obj = 

{
  "request_date": "2022-10-17T02:56:51Z",
  "request_date_ms": 1665975411248,
  "subscriber": {
    "entitlements": {
      "unlimited": {
        "expires_date": null,
        "grace_period_expires_date": null,
        "product_identifier": "com.tickettothemoon.gradient.unlimited.yearly.35",
        "purchase_date": "2022-10-12T07:25:36Z"
      }
    },
    "first_seen": "2022-10-12T03:57:12Z",
    "last_seen": "2022-10-17T02:25:06Z",
    "management_url": null,
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:85ab5bfea293484f862251aad186a7d3",
    "original_application_version": "1038",
    "original_purchase_date": "2021-09-24T23:20:05Z",
    "other_purchases": {},
    "subscriptions": {
      "com.tickettothemoon.gradient.unlimited.yearly.35": {
        "billing_issues_detected_at": null,
        "expires_date": null,
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-10-12T07:25:38Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2022-10-12T07:25:36Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
}


$done({body: JSON.stringify(obj)});

