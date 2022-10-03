var obj = JSON.parse($response.body);

obj = 

{
  "request_date": "2022-10-03T04:37:46Z",
  "request_date_ms": 1664771866032,
  "subscriber": {
    "entitlements": {
      "pp.uaf.premiumaccess": {
        "expires_date": "2099-10-06T01:09:41Z",
        "grace_period_expires_date": null,
        "product_identifier": "pp_uaf_1_month_3t",
        "purchase_date": "2022-10-03T01:09:41Z"
      }
    },
    "first_seen": "2022-10-02T12:35:38Z",
    "last_seen": "2022-10-02T12:35:38Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:dd6d20d5146a4873b9c578e6d9e91a5e",
    "original_application_version": "5",
    "original_purchase_date": "2022-02-15T23:07:25Z",
    "other_purchases": {},
    "subscriptions": {
      "pp_uaf_1_month_3t": {
        "billing_issues_detected_at": null,
        "expires_date": "2099-10-06T01:09:41Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-10-03T01:09:42Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-10-03T01:09:41Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
}
$done({body: JSON.stringify(obj)});