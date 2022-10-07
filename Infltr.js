var obj = JSON.parse($response.body);

obj = 

{
  "request_date": "2022-10-07T04:57:06Z",
  "request_date_ms": 1665118626208,
  "subscriber": {
    "entitlements": {
      "com.Yooshr.infltr.subscriptionPremium": {
        "expires_date": null,
        "grace_period_expires_date": null,
        "product_identifier": "com.Yooshr.infltr.everythingForever",
        "purchase_date": "2022-04-30T00:37:07Z"
      }
    },
    "first_seen": "2022-04-05T23:41:20Z",
    "last_seen": "2022-10-07T04:57:06Z",
    "management_url": null,
    "non_subscriptions": {
      "com.Yooshr.infltr.everythingForever": [{
        "id": "9b884e2505",
        "is_sandbox": true,
        "original_purchase_date": "2022-04-30T00:37:07Z",
        "purchase_date": "2022-04-30T00:37:07Z",
        "store": "app_store"
      }]
    },
    "original_app_user_id": "$RCAnonymousID:1a5e3da3968f4433af236dc4a87d6792",
    "original_application_version": "1.0",
    "original_purchase_date": "2013-08-01T07:00:00Z",
    "other_purchases": {
      "com.Yooshr.infltr.everythingForever": {
        "purchase_date": "2022-04-30T00:37:07Z"
      }
    },
    "subscriptions": {}
  }
}
$done({body: JSON.stringify(obj)});