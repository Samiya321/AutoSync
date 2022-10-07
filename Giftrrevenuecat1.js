var obj = JSON.parse($response.body);

obj = {


  "request_date_ms" : 1659018272302,
  "request_date" : "2022-07-28T14:24:32Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-07-28T14:19:25Z",
    "original_application_version" : "1205",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.Yooshr.Giftr.subscriptionPremium.Yearly" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "trial",
        "expires_date" : "2099-07-31T14:23:20Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : null,
        "original_purchase_date" : "2022-07-28T14:23:21Z",
        "purchase_date" : "2022-07-28T14:23:20Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "com.Yooshr.Giftr.subscriptionPremium" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-07-28T14:23:20Z",
        "product_identifier" : "com.Yooshr.Giftr.subscriptionPremium.Yearly",
        "expires_date" : "2099-07-31T14:23:20Z"
      }
    },
    "original_purchase_date" : "2022-04-09T22:46:51Z",
    "original_app_user_id" : "$RCAnonymousID:1951b3545dcb42e888a5aee66b68fcc7",
    "last_seen" : "2022-07-28T14:19:25Z"
  }
}
$done({body: JSON.stringify(obj)});