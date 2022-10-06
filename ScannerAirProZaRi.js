var obj = JSON.parse($response.body);

obj = 

{
  "request_date": "2022-10-06T02:03:38Z",
  "request_date_ms": 1665021818918,
  "subscriber": {
    "entitlements": {
      "AirAppsOne": {
        "expires_date": "2099-10-09T02:00:32Z",
        "grace_period_expires_date": null,
        "product_identifier": "co.airapps.scannerapp.year",
        "purchase_date": "2022-10-06T02:00:32Z"
      }
    },
    "first_seen": "2022-10-05T23:41:12Z",
    "last_seen": "2022-10-05T23:41:12Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "A3AFAD60-416A-43F5-B025-5401D97C77F5",
    "original_application_version": "2.13.0.1002",
    "original_purchase_date": "2022-10-05T23:40:32Z",
    "other_purchases": {},
    "subscriptions": {
      "co.airapps.scannerapp.year": {
        "billing_issues_detected_at": null,
        "expires_date": "2099-10-09T02:00:32Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-10-06T02:00:33Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-10-06T02:00:32Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
}
$done({body: JSON.stringify(obj)});