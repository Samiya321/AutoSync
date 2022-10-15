let obj = JSON.parse($response.body);

obj= 

{
  "request_date": "2022-10-15T07:25:49Z",
  "request_date_ms": 1665818749364,
  "subscriber": {
    "entitlements": {
      "business": {
        "expires_date": "2022-07-14T03:31:23Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.background.business.monthly",
        "purchase_date": "2022-07-14T03:26:23Z"
      },
      "pro": {
        "expires_date": "2099-07-14T03:27:56Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.background.pro.yearly",
        "purchase_date": "2022-07-14T02:27:56Z"
      }
    },
    "first_seen": "2022-06-30T03:17:49Z",
    "last_seen": "2022-08-15T07:02:02Z",
    "management_url": null,
    "non_subscriptions": {},
    "original_app_user_id": "Jx2s15BPbPXTVqeK6G5X8KbO80v2",
    "original_application_version": "1.0",
    "original_purchase_date": "2013-08-01T07:00:00Z",
    "other_purchases": {},
    "subscriptions": {
      "com.background.business.monthly": {
        "billing_issues_detected_at": null,
        "expires_date": "2022-07-14T03:31:23Z",
        "grace_period_expires_date": null,
        "is_sandbox": true,
        "original_purchase_date": "2022-05-21T23:58:50Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2022-07-14T03:26:23Z",
        "store": "app_store",
        "unsubscribe_detected_at": "2022-07-14T03:27:20Z"
      },
      "com.background.pro.yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2022-07-14T03:27:56Z",
        "grace_period_expires_date": null,
        "is_sandbox": true,
        "original_purchase_date": "2022-05-21T23:58:50Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2022-07-14T02:27:56Z",
        "store": "app_store",
        "unsubscribe_detected_at": "2022-07-14T03:27:20Z"
      }
    }
  }
}
$done({body: JSON.stringify(obj)});