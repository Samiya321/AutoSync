let obj = JSON.parse($response.body);
obj= {
  "request_date_ms" : 1664243018,
  "request_date" : "2022-09-27T21:01:04Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2020-05-31T15:06:02Z",
    "original_application_version" : null,
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "com.background.pro.monthly" : {
        "is_sandbox" : false,
        "period_type" : "active",
        "expires_date" : "2099-12-01T03:51:32Z",
        "original_purchase_date" : "2019-10-31T02:51:33Z",
        "purchase_date" : "2019-10-31T02:51:32Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "pro" : {
        "expires_date" : "2099-12-01T03:51:32Z",
        "product_identifier" : "com.background.pro.monthly",
        "purchase_date" : "2019-10-31T02:51:32Z"
      }
    },
    "original_purchase_date" : null,
    "original_app_user_id" : "XAMefyrah5UmeDQiHBUU5oPbbdT2",
    "last_seen" : "2022-10-27T21:01:03Z"
  }
};
$done({body: JSON.stringify(obj)});