var obj = JSON.parse($response.body);

obj = 

{
  "request_date": "2022-11-19T21:30:58Z",
  "request_date_ms": 1668893458745,
  "subscriber": {
    "entitlements": {},
    "first_seen": "2022-04-14T21:54:46Z",
    "last_seen": "2022-11-19T21:30:58Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "f2e303ff-8e22-48c1-b1c0-632a97b53d93",
    "original_application_version": "2010",
    "original_purchase_date": "2021-05-07T08:17:44Z",
    "other_purchases": {},
    "subscriptions": {
      "com.neocortext.doublicatapp.subscription.bro.weekly": {
        "auto_resume_date": null,
        "billing_issues_detected_at": null,
        "expires_date": "2099-11-24T03:28:55Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-07-13T20:33:55Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2022-11-17T03:28:55Z",
        "refunded_at": null,
        "store": "app_store"
      },
      "com.neocortext.doublicatapp.subscription.promos.annual.50off": {
        "auto_resume_date": null,
        "billing_issues_detected_at": null,
        "expires_date": "2099-07-13T06:16:18Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-07-10T06:16:19Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2022-07-10T06:16:18Z",
        "refunded_at": null,
        "store": "app_store",
        "unsubscribe_detected_at": "2022-07-10T06:31:59Z"
      }
    }
  }
}
$done({body: JSON.stringify(obj)});