var obj = JSON.parse($response.body);

obj =  

{
  "request_date": "2022-08-25T05:26:42Z",
  "request_date_ms": 1661405202251,
  "subscriber": {
    "entitlements": {},
    "first_seen": "2022-07-31T02:15:52Z",
    "last_seen": "2022-08-25T04:45:27Z",
    "management_url": null,
    "non_subscriptions": {},
    "original_app_user_id": "D665A20B-722F-43F8-A5A7-BCE0A3F81A5E",
    "original_application_version": "577",
    "original_purchase_date": "2015-07-02T17:31:46Z",
    "other_purchases": {},
    "subscriptions": {
      "com.tunein.TuneInRadio.TUNEIN_1_MONTH_7_DAY_9.99_versionA": {
        "billing_issues_detected_at": null,
        "expires_date": "2023-08-08T06:08:50Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-08-01T06:08:51Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-08-01T06:08:50Z",
        "store": "app_store",
        "unsubscribe_detected_at": "2022-08-04T22:52:09Z"
      },
      "com.tunein.TuneInRadio.TUNEIN_1_MONTH_A": {
        "billing_issues_detected_at": null,
        "expires_date": "2021-06-18T21:43:21Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2021-06-11T21:43:21Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2021-06-11T21:43:21Z",
        "store": "app_store",
        "unsubscribe_detected_at": "2022-01-23T19:45:33Z"
      },
      "com.tunein.TuneInRadio.TUNEIN_1_MONTH_C": {
        "billing_issues_detected_at": null,
        "expires_date": "2023-06-17T03:39:35Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-06-10T03:39:36Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-06-10T03:39:35Z",
        "store": "app_store",
        "unsubscribe_detected_at": "2022-06-12T03:45:35Z"
      }
    }
  }
}

$done({body: JSON.stringify(obj)});