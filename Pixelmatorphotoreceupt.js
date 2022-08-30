var obj = JSON.parse($response.body);

obj = 

  {
  "request_date_ms" : 1661845015863,
  "request_date" : "2022-08-30T07:36:55Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-08-23T06:12:25Z",
    "original_application_version" : "220812.1006",
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "pixelmator_photo_yearly_v1" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "trial",
        "expires_date" : "2025-08-30T06:19:55Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : "2022-08-23T06:50:05Z",
        "original_purchase_date" : "2022-08-23T06:19:56Z",
        "purchase_date" : "2022-08-23T06:19:55Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "pixelmator_photo_pro_access" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-08-23T06:19:55Z",
        "product_identifier" : "pixelmator_photo_yearly_v1",
        "expires_date" : "2025-08-30T06:19:55Z"
      }
    },
    "original_purchase_date" : "2022-08-23T06:08:47Z",
    "original_app_user_id" : "$RCAnonymousID:d61f2bd8cab24d18b1f2864cc768ce04",
    "last_seen" : "2022-08-29T23:23:27Z"
  }
}

$done({body: JSON.stringify(obj)});