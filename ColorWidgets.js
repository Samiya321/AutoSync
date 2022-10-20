var obj = JSON.parse($response.body);

obj =

{
  "request_date": "2022-10-20T01:06:35Z",
  "request_date_ms": 1666227995784,
  "subscriber": {
    "entitlements": {
      "pro": {
        "expires_date": null,
        "grace_period_expires_date": null,
        "product_identifier": "cw_1999_1y_3d0",
        "purchase_date": "2022-10-20T01:06:31Z"
      }
    },
    "first_seen": "2022-10-20T01:06:10Z",
    "last_seen": "2022-10-20T01:06:10Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:d17edf912fab413fba547b4df9134838",
    "original_application_version": "1",
    "original_purchase_date": "2020-10-26T16:46:34Z",
    "other_purchases": {},
    "subscriptions": {
      "cw_1999_1y_3d0": {
        "billing_issues_detected_at": null,
        "expires_date": "2099-10-23T01:06:31Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-10-20T01:06:32Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-10-20T01:06:31Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
}
$done({body: JSON.stringify(obj)});