var obj = JSON.parse($response.body);

obj = {

  "request_date_ms" : 1669266820727,
  "request_date" : "2022-11-24T05:13:40Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-04-14T21:54:46Z",
    "original_application_version" : "2010",
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "com.neocortext.doublicatapp.subscription.bro.weekly" : {
        "original_purchase_date" : "2022-07-13T20:33:55Z",
        "expires_date" : "2029-11-24T03:28:55Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "unsubscribe_detected_at" : "2022-11-18T02:00:20Z",
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2022-11-17T03:28:55Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      },
      "com.neocortext.doublicatapp.subscription.promos.annual.50off" : {
        "original_purchase_date" : "2022-07-10T06:16:19Z",
        "expires_date" : "2029-07-13T06:16:18Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "unsubscribe_detected_at" : "2022-07-10T06:31:59Z",
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2022-07-10T06:16:18Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
     "attributes" : {
    "subscription_type" : {
      "value" : "pro",
      "updated_at_ms" : 1669266819292
    },
 "subscription_plan_id" : {
      "value" : "com.neocortext.doublicatapp.subscription.bro.weekly",
      "updated_at_ms" : 1669266819291
    },
    "subscription_config_type" : {
      "value" : "Paid",
      "updated_at_ms" : 1669266817411
  },
    "original_purchase_date" : "2021-05-07T08:17:44Z",
    "original_app_user_id" : "f2e303ff-8e22-48c1-b1c0-632a97b53d93",
    "last_seen" : "2022-11-24T04:17:12Z"
  }
}
$done({body: JSON.stringify(obj)});