var obj = JSON.parse($response.body);

obj = 

{
  "data": {
    "type": "adapty_analytics_profile",
    "id": "e7431e1a-6b67-45b7-9578-c0d43b6244fa",
    "attributes": {
      "app_id": "b93cecdb-a0a5-49a3-99ce-3d61e264d25f",
      "profile_id": "e7431e1a-6b67-45b7-9578-c0d43b6244fa",
      "customer_user_id": null,
      "paid_access_levels": {
        "premium": {
          "id": "premium",
          "is_active": true,
          "is_lifetime": false,
          "expires_at": "2023-09-14T06:00:13.000000+0000",
          "starts_at": null,
          "will_renew": true,
          "vendor_product_id": "com.abbyy.finescanner.premium.1month",
          "store": "app_store",
          "activated_at": "2022-09-07T06:00:14.000000+0000",
          "renewed_at": "2022-09-07T06:00:13.000000+0000",
          "unsubscribed_at": "2022-09-14T05:40:37.019875+0000",
          "billing_issue_detected_at": null,
          "is_in_grace_period": false,
          "active_introductory_offer_type": "free_trial",
          "active_promotional_offer_type": null,
          "active_promotional_offer_id": null,
          "cancellation_reason": null,
          "is_refund": false
        }
      },
      "subscriptions": {
        "com.abbyy.finescanner.premium.1month": {
          "is_active": true,
          "is_lifetime": false,
          "expires_at": "2023-09-14T06:00:13.000000+0000",
          "starts_at": null,
          "will_renew": true,
          "vendor_product_id": "com.abbyy.finescanner.premium.1month",
          "vendor_transaction_id": "300001214598242",
          "vendor_original_transaction_id": "300001214598242",
          "store": "app_store",
          "activated_at": "2022-09-07T06:00:14.000000+0000",
          "renewed_at": "2022-09-07T06:00:13.000000+0000",
          "unsubscribed_at": "2022-09-14T05:40:37.019875+0000",
          "billing_issue_detected_at": null,
          "is_in_grace_period": false,
          "active_introductory_offer_type": "free_trial",
          "active_promotional_offer_type": null,
          "active_promotional_offer_id": null,
          "cancellation_reason": null,
          "is_sandbox": false,
          "is_refund": false
        },
        "com.abbyy.finescanner.premium.1year.new.30Mar2020": {
          "is_active": true,
          "is_lifetime": false,
          "expires_at": "2023-09-04T04:44:29.000000+0000",
          "starts_at": null,
          "will_renew": false,
          "vendor_product_id": "com.abbyy.finescanner.premium.1year.new.30Mar2020",
          "vendor_transaction_id": "300001199628700",
          "vendor_original_transaction_id": "300001199628700",
          "store": "app_store",
          "activated_at": "2022-08-21T04:44:30.000000+0000",
          "renewed_at": "2022-08-21T04:44:29.000000+0000",
          "unsubscribed_at": "2022-09-04T04:44:29.000000+0000",
          "billing_issue_detected_at": "2022-09-04T04:44:29.000000+0000",
          "is_in_grace_period": false,
          "active_introductory_offer_type": "free_trial",
          "active_promotional_offer_type": null,
          "active_promotional_offer_id": null,
          "cancellation_reason": "voluntarily_cancelled",
          "is_sandbox": false,
          "is_refund": false
        }
      },
      "non_subscriptions": null,
      "promotional_offer_eligibility": false,
      "introductory_offer_eligibility": false,
      "custom_attributes": {
        "AppUpdated": 1.0,
        "ScansCount": 0.0,
        "SubscriptionDate": 1662530413.0,
        "UserAutorenewsCount": 1.0,
        "UserDidOpenStore": 1664325127.4915562,
        "UserDidPressBuy": 1664076311.435087,
        "UserHadTrial": 1.0,
        "UserTrialDate": 1663135214.0,
        "UserYearSubscriptionCount": 1.0
      },
      "total_revenue_usd": 0.0
    }
  }
}

$done({body: JSON.stringify(obj)});