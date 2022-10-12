var obj = JSON.parse($response.body);

obj = 

{
  "request_date": "2022-10-07T00:25:43Z",
  "request_date_ms": 1665102343696,
  "subscriber": {
    "entitlements": {
      "unlimited": {
        "expires_date": null,
        "grace_period_expires_date": null,
        "product_identifier": "com.tickettothemoon.gradient.unlimited.one.time.2022",
        "purchase_date": "2019-02-05T23:58:38Z"
      }
    },
    "first_seen": "2020-01-26T13:20:16Z",
    "last_seen": "2022-10-07T00:25:02Z",
    "management_url": null,
    "non_subscriptions": {
      "com.tickettothemoon.gradient.unlimited.one.time.2022": [{
        "id": "80d26af000",
        "is_sandbox": false,
        "original_purchase_date": "2019-02-05T23:58:38Z",
        "purchase_date": "2019-02-05T23:58:38Z",
        "store": "app_store"
      }]
    },
    "original_app_user_id": "ZariPhone - 93ee762e27674e4c8499c29d500c13e2",
    "original_application_version": "1.0",
    "original_purchase_date": "2013-08-01T07:00:00Z",
    "other_purchases": {
      "com.tickettothemoon.gradient.unlimited.one.time.2022": {
        "purchase_date": "2019-02-05T23:58:38Z"
      }
    },
    "subscriptions": {}
  }
}
$done({body: JSON.stringify(obj)});