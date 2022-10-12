var obj = JSON.parse($response.body);

obj = 

{
  "request_date": "2022-10-12T06:23:15Z",
  "request_date_ms": 1665555795451,
  "subscriber": {
    "entitlements": {
      "unlimited": {
        "expires_date": "2029-07-20T03:10:29Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.tickettothemoon.video.persona.unlimited.yearly.2022",
        "purchase_date": "2022-07-17T03:10:29Z"
      }
    },
    "first_seen": "2022-07-17T02:44:14Z",
    "last_seen": "2022-10-12T05:37:28Z",
    "management_url": null,
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:a98b3f3215384c3abdc2af212a153a37",
    "original_application_version": "1020",
    "original_purchase_date": "2022-06-23T01:02:59Z",
    "other_purchases": {},
    "subscriptions": {
      "com.tickettothemoon.video.persona.unlimited.yearly.2022": {
        "billing_issues_detected_at": null,
        "expires_date": "2029-07-20T03:10:29Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-07-17T03:10:29Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-07-17T03:10:29Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
}
$done({body: JSON.stringify(obj)});
