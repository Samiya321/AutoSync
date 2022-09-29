var obj = JSON.parse($response.body);

obj = 

{
  "request_date_ms" : 1663887851407,
  "request_date" : "2022-09-22T23:04:11Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-09-22T02:35:36Z",
    "original_application_version" : "35",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "pro.sub.annual" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "trial",
        "expires_date" : "2099-09-29T02:38:53Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : null,
        "original_purchase_date" : "2022-09-22T02:38:54Z",
        "purchase_date" : "2022-09-22T02:38:53Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-09-22T02:38:53Z",
        "product_identifier" : "pro.sub.annual",
        "expires_date" : "2099-09-29T02:38:53Z"
      }
    },
    "original_purchase_date" : "2022-09-22T02:35:13Z",
    "original_app_user_id" : "$RCAnonymousID:178ca0dbdd114beb8c17b019372f57cb",
    "last_seen" : "2022-09-22T02:39:15Z"
  }
}
$done({body: JSON.stringify(obj)});