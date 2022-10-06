var obj = JSON.parse($response.body);

obj =  

{
  "request_date": "2022-10-06T03:09:16Z",
  "request_date_ms": 1665025756403,
  "subscriber": {
    "entitlements": {},
    "first_seen": "2022-07-31T02:15:52Z",
    "last_seen": "2022-10-06T03:08:58Z",
    "management_url": null,
    "non_subscriptions": {},
    "original_app_user_id": "D665A20B-722F-43F8-A5A7-BCE0A3F81A5E",
    "original_application_version": "577",
    "original_purchase_date": "2015-07-02T17:31:46Z",
    "other_purchases": {},
    "subscriptions": {
      "com.tunein.TuneInRadio.TUNEIN_1_MONTH_7_DAY_9.99_versionA": {
        "billing_issues_detected_at": null,
        "expires_date": "2022-08-08T06:08:50Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-08-01T06:08:51Z",
        "original_transaction_id": "300001181864960",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-08-01T06:08:50Z",
        "store": "app_store"
      },
      "com.tunein.TuneInRadio.TUNEIN_1_MONTH_A": {
        "billing_issues_detected_at": null,
        "expires_date": "2026-06-18T21:43:21Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2021-06-11T21:43:21Z",
        "original_transaction_id": "300000854605304",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2021-06-11T21:43:21Z",
        "store": "app_store"
      },
      "com.tunein.TuneInRadio.TUNEIN_1_MONTH_C": {
        "billing_issues_detected_at": null,
        "expires_date": "2027-06-17T03:39:35Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-06-10T03:39:36Z",
        "original_transaction_id": "300001137121918",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-06-10T03:39:35Z",
        "store": "app_store"
      }
    }
  }
}
$done({body: JSON.stringify(obj)});