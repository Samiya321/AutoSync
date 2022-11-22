var obj = JSON.parse($response.body);

obj =  

{
  "request_date_ms" : 1669089190029,
  "request_date" : "2022-11-22T03:53:10Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-11-04T21:54:14Z",
    "original_application_version" : "577",
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "com.tunein.TuneInRadio.TUNEIN_1_MONTH_C" : {
        "original_purchase_date" : "2022-06-10T03:39:36Z",
        "expires_date" : "2032-06-17T03:39:35Z",
        "is_sandbox" : false,
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "original_transaction_id" : "300001137121918",
        "purchase_date" : "2022-06-10T03:39:35Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      },
      "com.tunein.TuneInRadio.TUNEIN_1_MONTH_7_DAY_9.99_versionA" : {
        "original_purchase_date" : "2022-08-01T06:08:51Z",
        "expires_date" : "2089-08-08T06:08:50Z",
        "is_sandbox" : false,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "original_transaction_id" : "300001181864960",
        "purchase_date" : "2022-08-01T06:08:50Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      },
      "com.tunein.TuneInRadio.TUNEIN_1_MONTH_A" : {
        "original_purchase_date" : "2021-06-11T21:43:21Z",
        "expires_date" : "2100-11-06T04:13:52Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "original_transaction_id" : "300000854605304",
        "purchase_date" : "2022-10-06T04:13:52Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {

    },
    "original_purchase_date" : "2015-07-02T17:31:46Z",
    "original_app_user_id" : "D665A20B-722F-43F8-A5A7-BCE0A3F81A5E",
    "last_seen" : "2022-11-22T03:50:50Z"
  }
}
$done({body: JSON.stringify(obj)});