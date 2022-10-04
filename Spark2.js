var obj = JSON.parse($response.body);
obj= 

{
  "request_date": "2022-10-04T21:47:15Z",
  "request_date_ms": 1664920035263,
  "subscriber": {
    "entitlements": {
      "premium": {
        "expires_date": "2099-10-11T21:42:30Z",
        "grace_period_expires_date": null,
        "product_identifier": "spark_5999_1y_1w0",
        "purchase_date": "2022-10-04T21:42:30Z"
      }
    },
    "first_seen": "2022-10-04T18:09:46Z",
    "last_seen": "2022-10-04T18:10:06Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:7478cda31c7b4d8bb73370dda050f957",
    "original_application_version": "2.9.23.402",
    "original_purchase_date": "2021-06-16T06:47:10Z",
    "other_purchases": {},
    "subscriptions": {
      "spark_5999_1y_1w0": {
        "billing_issues_detected_at": null,
        "expires_date": "2099-10-11T21:42:30Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-10-04T21:42:31Z",
        "ownership_type": "PURCHASED",
        "period_type": "subscription",
        "tpurchase_date": "2022-10-04T21:42:30Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
}
$done({body: JSON.stringify(obj)});