var obj = JSON.parse($response.body);

obj = 

{
  "request_date": "2022-11-09T02:43:17Z",
  "request_date_ms": 1667961797221,
  "subscriber": {
    "entitlements": {
      "unlimited": {
        "expires_date": "2025-10-15T07:25:36Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.tickettothemoon.gradient.unlimited.yearly.35",
        "purchase_date": "2022-10-12T07:25:36Z"
      }
    },
    "first_seen": "2022-10-12T03:57:12Z",
    "last_seen": "2022-11-09T01:31:20Z",
    "management_url": null,
    "non_subscriptions": {},
    "original_app_user_id": "e5692a39-9963-4d92-824c-8af9d9301d7d",
    "original_application_version": "1038",
    "original_purchase_date": "2021-09-24T23:20:05Z",
    "other_purchases": {},
    "subscriptions": {
      "com.tickettothemoon.gradient.unlimited.yearly.35": {
        "auto_resume_date": null,
        "billing_issues_detected_at": null,
        "expires_date": "2025-10-15T07:25:36Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-10-12T07:25:38Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-10-12T07:25:36Z",
        "refunded_at": null,
        "store": "app_store",
        "unsubscribe_detected_at": "2022-10-14T07:32:20Z"
      }
    }
  }
}

$done({body: JSON.stringify(obj)});

