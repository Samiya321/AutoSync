var obj = JSON.parse($response.body);

obj = 

{
  "request_date_ms" : 1664243018,
  "request_date" : "2022-09-27T21:01:04Z",
  "subscriber" : {
    "last_seen" : "2022-10-27T21:01:03Z",
    "first_seen" : "2020-05-31T15:06:02Z",
    "original_application_version" : null,
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "com.neocortext.doublicatapp.subscription.bro.weekly" : {
        "period_type" : "active",
        "store" : "app_store",
        "is_sandbox" : false,
        "purchase_date" : "2019-10-31T02:51:32Z",
        "original_purchase_date" : "2019-10-31T02:51:33Z",
        "expires_date" : "2099-12-01T03:51:32Z"
      }
    },
    "entitlements" : {
      "pro" : {
        "expires_date" : "2099-12-01T03:51:32Z",
        "product_identifier" : "com.neocortext.doublicatapp.subscription.bro.weekly",
        "purchase_date" : "2019-10-31T02:51:32Z"
      }
    },
    "original_purchase_date" : null,
    "original_app_user_id" : "XAMefyrah5UmeDQiHBUU5oPbbdT2",
    "non_subscriptions" : {

    }
  }
}
$done({body: JSON.stringify(obj)});