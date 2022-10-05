var obj = JSON.parse($response.body);

obj = 

{
  "request_date": "2022-10-05T01:54:43Z",
  "request_date_ms": 1664934883850,
  "subscriber": {
    "entitlements": {
      "pp.bmac": {
        "expires_date": null,
        "product_identifier": "com.nlokireddy.pdfphotos.buymeacoffee",
        "purchase_date": "2022-10-03T01:09:41Z"
      }
    },
    "first_seen": "2022-10-02T12:35:38Z",
    "last_seen": "2022-10-04T23:04:43Z",
    "management_url": null,
    "original_app_user_id": "$RCAnonymousID:dd6d20d5146a4873b9c578e6d9e91a5e",
    "original_application_version": "5",
    "original_purchase_date": "2022-02-15T23:07:25Z",
    "other_purchases": {},
    "non_subscriptions": {
      "com.nlokireddy.pdfphotos.buymeacoffee": {
        "billing_issues_detected_at": null,
        "expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-10-03T01:09:42Z",
        "ownership_type": "PURCHASED",
        "period_type": "Once",
        "purchase_date": "2022-10-03T01:09:41Z",
        "store": "app_store"
      }
    }
  }
}
$done({body: JSON.stringify(obj)});