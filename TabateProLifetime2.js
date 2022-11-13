var obj = JSON.parse($response.body);

obj = 

{

  "request_date": "2022-11-12T06:59:52Z",
  "request_date_ms": 1668236392561,
  "subscriber": {
    "entitlements": {
      "tabata_pro_paid_user_entitlement": {
        "expires_date": null,
        "grace_period_expires_date": null,
        "product_identifier": "tp_2499_lifetime"
        "purchase_date": "2022-11-12T06:59:02Z"
      }
    },
    "first_seen": "2022-11-12T06:58:45Z",
    "last_seen": "2022-11-12T06:58:45Z",
    "management_url": null,
    "non_subscriptions": {
      "tp_2499_lifetime": [{
        "id": "d24cfda516",
        "is_sandbox": false,
        "original_purchase_date": "2022-11-12T06:59:02Z",
        "purchase_date": "2022-11-12T06:59:02Z",
        "store": "app_store"
      }]
    },
    "original_app_user_id": "$RCAnonymousID:3a2a35bd85cb44a2819fe8487d1f8631",
    "original_application_version": "9",
    "original_purchase_date": "2022-11-12T06:58:34Z",
    "other_purchases": {
      "tp_2499_lifetime": {
        "purchase_date": "2022-11-12T06:59:02Z"
      }
    },
    "subscriptions": {}
  }
}
$done({body: JSON.stringify(obj)});