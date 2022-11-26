var obj = JSON.parse($response.body);

obj =  {
  "request_date": "2022-11-12T06:59:52Z",
  "request_date_ms": 1668236392561,
  "subscriber": {
    "entitlements": {
      "dreampremium": {
        "expires_date": null,
        "grace_period_expires_date": null,
        "product_identifier": "dream_lifetime",
        "purchase_date": "2022-11-12T06:59:02Z"
      }
    },
    "first_seen": "2022-11-12T06:58:45Z",
    "last_seen": "2022-11-12T06:58:45Z",
    "management_url": null,
    "non_subscriptions": {
      "dream_lifetime": [{
        "is_sandbox": false,
        "original_purchase_date": "2022-11-12T06:59:02Z",
        "purchase_date": "2022-11-12T06:59:02Z",
        "store": "app_store"
      }]
    },
    "original_app_user_id": "$RCAnonymousID:76fa71df83394020bdf3385499d6531f",
    "original_application_version": "1",
    "original_purchase_date": "2022-11-12T06:58:34Z",
    "other_purchases": {
      "dream_lifetime": {
        "purchase_date": "2022-11-12T06:59:02Z"
      }
    },
    "subscriptions": {}
  }
}
$done({body: JSON.stringify(obj)});