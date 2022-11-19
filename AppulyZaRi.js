let obj = JSON.parse($response.body);
obj= {
  "request_date": "2022-11-12T06:59:52Z",
  "request_date_ms": 1668236392561,
  "subscriber": {
    "entitlements": {
      "pro": {
        "expires_date": null,
        "grace_period_expires_date": null,
        "product_identifier": "early_bird_lifetime_deal",
        "purchase_date": "2022-11-12T06:59:02Z"
      }
    },
    "first_seen": "2022-11-12T06:58:45Z",
    "last_seen": "2022-11-12T06:58:45Z",
    "management_url": null,
    "non_subscriptions": {
      "early_bird_lifetime_deal": [{
        "is_sandbox": false,
        "original_purchase_date": "2022-11-12T06:59:02Z",
        "purchase_date": "2022-11-12T06:59:02Z",
        "store": "app_store"
      }]
    },
    "original_purchase_date": "2022-11-12T06:58:34Z",
    "other_purchases": {
      "early_bird_lifetime_deal": {
        "purchase_date": "2022-11-12T06:59:02Z"
      }
    },
    "subscriptions": {}
  }
}
$done({body: JSON.stringify(obj)});