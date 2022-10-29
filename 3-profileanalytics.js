var obj = JSON.parse($response.body);

obj = 

{
  "data" : {
    "type" : "adapty_analytics_profile",
    "id" : "98875d41-1b89-479e-baec-d87b21920917",
    "attributes" : {
      "app_id" : "b93cecdb-a0a5-49a3-99ce-3d61e264d25f",
      "total_revenue_usd" : 9.9367884975953764,
      "customer_user_id" : null,
      "subscriptions" : {
        "com.abbyy.finescanner.premium.1year.new.30Mar2020" : {
          "vendor_transaction_id" : "300001199628700",
          "billing_issue_detected_at" : null,
          "is_lifetime" : false,
          "store" : "app_store",
          "vendor_product_id" : "com.abbyy.finescanner.premium.1year.new.30Mar2020",
          "vendor_original_transaction_id" : "300001199628700",
          "will_renew" : true,
          "renewed_at" : "2022-08-21T04:44:29.000000+0000",
          "cancellation_reason" : null,
          "active_promotional_offer_id" : null,
          "active_promotional_offer_type" : null,
          "unsubscribed_at" : null,
          "is_active" : false,
          "activated_at" : "2022-08-21T04:44:30.000000+0000",
          "is_refund" : false,
          "is_in_grace_period" : false,
          "active_introductory_offer_type" : "free_trial",
          "expires_at" : "2022-09-04T04:44:29.000000+0000",
          "starts_at" : null,
          "is_sandbox" : false
        },
        "com.abbyy.finescanner.premium.1month.new.30Mar2020" : {
          "vendor_transaction_id" : "300001259925459",
          "billing_issue_detected_at" : null,
          "is_lifetime" : false,
          "store" : "app_store",
          "vendor_product_id" : "com.abbyy.finescanner.premium.1month.new.30Mar2020",
          "vendor_original_transaction_id" : "300001199628700",
          "will_renew" : true,
          "renewed_at" : "2022-10-29T03:00:36.000000+0000",
          "cancellation_reason" : null,
          "active_promotional_offer_id" : null,
          "active_promotional_offer_type" : null,
          "unsubscribed_at" : null,
          "is_active" : true,
          "activated_at" : "2022-08-21T04:44:30.000000+0000",
          "is_refund" : false,
          "is_in_grace_period" : false,
          "active_introductory_offer_type" : null,
          "expires_at" : "2022-11-29T04:00:36.000000+0000",
          "starts_at" : null,
          "is_sandbox" : false
        },
        "com.abbyy.finescanner.premium.1month" : {
          "vendor_transaction_id" : "300001214598242",
          "billing_issue_detected_at" : "2022-09-14T06:00:13.000000+0000",
          "is_lifetime" : false,
          "store" : "app_store",
          "vendor_product_id" : "com.abbyy.finescanner.premium.1month",
          "vendor_original_transaction_id" : "300001214598242",
          "will_renew" : false,
          "renewed_at" : "2022-09-07T06:00:13.000000+0000",
          "cancellation_reason" : "voluntarily_cancelled",
          "active_promotional_offer_id" : null,
          "active_promotional_offer_type" : null,
          "unsubscribed_at" : "2022-09-14T06:00:13.000000+0000",
          "is_active" : false,
          "activated_at" : "2022-09-07T06:00:14.000000+0000",
          "is_refund" : false,
          "is_in_grace_period" : false,
          "active_introductory_offer_type" : "free_trial",
          "expires_at" : "2022-09-14T06:00:13.000000+0000",
          "starts_at" : null,
          "is_sandbox" : false
        }
      },
      "promotional_offer_eligibility" : false,
      "custom_attributes" : {
        "UserDidOpenStore" : 1667017621.007653,
        "UserTrialDate" : 1663135214,
        "SubscriptionDate" : 1662530413,
        "UserHadTrial" : 1,
        "AppUpdated" : 1,
        "ScansCount" : 0,
        "UserAutorenewsCount" : 1,
        "UserYearSubscriptionCount" : 1
      },
      "profile_id" : "98875d41-1b89-479e-baec-d87b21920917",
      "paid_access_levels" : {
        "premium" : {
          "id" : "premium",
          "is_lifetime" : true,
          "vendor_product_id" : "com.abbyy.finescanner.forever"
          "active_promotional_offer_type" : null,
          "is_active" : true,
          "active_promotional_offer_id" : null,
          "is_in_grace_period" : false,
          "activated_at" : "2022-08-21T04:44:30.000000+0000",
          "renewed_at" : "2022-10-29T03:00:36.000000+0000",
          "is_refund" : false,
          "active_introductory_offer_type" : null,
          "store" : "app_store",
          "starts_at" : null
        }
      },
      "introductory_offer_eligibility" : false,
      "non_subscriptions" : "com.abbyy.finescanner.forever"
    }
  }
}
$done({body: JSON.stringify(obj)});