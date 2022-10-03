var obj = JSON.parse($response.body);

obj = 


{
  "request_date": "2022-10-03T02:52:01Z",
  "request_date_ms": 1664765521225,
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
    "original_app_user_id": "$RCAnonymousID:c610687e22754b0d83b80ddb3ca4316a",
    "original_application_version": "5",
    "original_purchase_date": "2022-02-15T23:07:25Z",
    "other_purchases": {
   "com.nlokireddy.pdfphotos.unlockAllFeatures" : {
        "purchase_date": "2022-04-28T17:15:19Z"
      }
    },
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