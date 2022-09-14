var obj = JSON.parse($response.body);

obj = 

{
  "data": {
    "type": "adapty_inapps_apple_receipt_validation_result",
    "id": "58eab485-784f-47d1-a344-047393aaf4d8",
    "attributes": {
      "app_id": "b93cecdb-a0a5-49a3-99ce-3d61e264d25f",
      "profile_id": "58eab485-784f-47d1-a344-047393aaf4d8",
      "customer_user_id": null,
      "paid_access_levels": {
        "premium": {
          "id": "premium",
          "is_active": true,
          "is_lifetime": true,
          "starts_at": null,
          "will_renew": false,
          "vendor_product_id": "com.abbyy.finescanner.forever",
          "store": "app_store",
          "activated_at": "2022-09-07T06:00:14.000000+0000",
          "billing_issue_detected_at": null,
          "is_in_grace_period": false
        }
      },
      "subscriptions": {
        "com.abbyy.finescanner.premium.1month": {
          "is_active": true,
          "is_lifetime": true,
          "starts_at": null,
          "will_renew": false,
          "vendor_product_id": "com.abbyy.finescanner.forever",
          "vendor_transaction_id": "300001214598242",
          "vendor_original_transaction_id": "300001214598242",
          "store": "app_store",
          "activated_at": "2022-09-07T06:00:14.000000+0000",
          "billing_issue_detected_at": null,
          "is_in_grace_period": false,
          "is_sandbox": false,
          "is_refund": false
        },
        "com.abbyy.finescanner.premium.1year.new.30Mar2020": {
          "is_active": false,
          "is_lifetime": false,
          "expires_at": "2022-09-04T04:44:29.000000+0000",
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
      "apple_validation_result": {
        "environment": "Production",
        "receipt": {
          "receipt_type": "Production",
          "adam_id": 534203582,
          "app_item_id": 534203582,
          "bundle_id": "com.abbyy.finescanner",
          "application_version": "15.4.3.0",
          "download_id": 70074565908635,
          "version_external_identifier": 852043868,
          "receipt_creation_date": "2022-09-14 03:36:36 Etc/GMT",
          "receipt_creation_date_ms": "1663126596000",
          "receipt_creation_date_pst": "2022-09-13 20:36:36 America/Los_Angeles",
          "request_date": "2022-09-14 03:37:39 Etc/GMT",
          "request_date_ms": "1663126659211",
          "request_date_pst": "2022-09-13 20:37:39 America/Los_Angeles",
          "original_purchase_date": "2021-01-18 06:15:54 Etc/GMT",
          "original_purchase_date_ms": "1610950554000",
          "original_purchase_date_pst": "2021-01-17 22:15:54 America/Los_Angeles",
          "original_application_version": "7.15.5.0",
          "in_app": [{
            "quantity": "1",
            "product_id": "com.abbyy.finescanner.forevee",
            "transaction_id": "300001214598242",
            "original_transaction_id": "300001214598242",
            "purchase_date": "2022-09-07 06:00:13 Etc/GMT",
            "purchase_date_ms": "1662530413000",
            "purchase_date_pst": "2022-09-06 23:00:13 America/Los_Angeles",
            "original_purchase_date": "2022-09-07 06:00:14 Etc/GMT",
            "original_purchase_date_ms": "1662530414000",
            "original_purchase_date_pst": "2022-09-06 23:00:14 America/Los_Angeles",
            "web_order_line_item_id": "300000549606983",
            "is_trial_period": "true",
            "is_in_intro_offer_period": "false",
            "in_app_ownership_type": "PURCHASED"
          }, {
            "quantity": "1",
            "product_id": "com.abbyy.finescanner.premium.1year.new.30Mar2020",
            "transaction_id": "300001199628700",
            "original_transaction_id": "300001199628700",
            "purchase_date": "2022-08-21 04:44:29 Etc/GMT",
            "purchase_date_ms": "1661057069000",
            "purchase_date_pst": "2022-08-20 21:44:29 America/Los_Angeles",
            "original_purchase_date": "2022-08-21 04:44:30 Etc/GMT",
            "original_purchase_date_ms": "1661057070000",
            "original_purchase_date_pst": "2022-08-20 21:44:30 America/Los_Angeles",
            "expires_date": "2022-09-04 04:44:29 Etc/GMT",
            "expires_date_ms": "1662266669000",
            "expires_date_pst": "2022-09-03 21:44:29 America/Los_Angeles",
            "web_order_line_item_id": "300000541976706",
            "is_trial_period": "true",
            "is_in_intro_offer_period": "false",
            "in_app_ownership_type": "PURCHASED"
          }]
        },
        "latest_receipt_info": [{
          "quantity": "1",
          "product_id": "com.abbyy.finescanner.forever",
          "transaction_id": "300001214598242",
          "original_transaction_id": "300001214598242",
          "purchase_date": "2022-09-07 06:00:13 Etc/GMT",
          "purchase_date_ms": "1662530413000",
          "purchase_date_pst": "2022-09-06 23:00:13 America/Los_Angeles",
          "original_purchase_date": "2022-09-07 06:00:14 Etc/GMT",
          "original_purchase_date_ms": "1662530414000",
          "original_purchase_date_pst": "2022-09-06 23:00:14 America/Los_Angeles",
          "web_order_line_item_id": "300000549606983",
          "is_trial_period": "true",
          "is_in_intro_offer_period": "false",
          "in_app_ownership_type": "PURCHASED",
          "subscription_group_identifier": "13510964"
        }, {
          "quantity": "1",
          "product_id": "com.abbyy.finescanner.premium.1year.new.30Mar2020",
          "transaction_id": "300001199628700",
          "original_transaction_id": "300001199628700",
          "purchase_date": "2022-08-21 04:44:29 Etc/GMT",
          "purchase_date_ms": "1661057069000",
          "purchase_date_pst": "2022-08-20 21:44:29 America/Los_Angeles",
          "original_purchase_date": "2022-08-21 04:44:30 Etc/GMT",
          "original_purchase_date_ms": "1661057070000",
          "original_purchase_date_pst": "2022-08-20 21:44:30 America/Los_Angeles",
          "expires_date": "2022-09-04 04:44:29 Etc/GMT",
          "expires_date_ms": "1662266669000",
          "expires_date_pst": "2022-09-03 21:44:29 America/Los_Angeles",
          "web_order_line_item_id": "300000541976706",
          "is_trial_period": "true",
          "is_in_intro_offer_period": "false",
          "in_app_ownership_type": "PURCHASED",
          "subscription_group_identifier": "20413725"
        }],
        "latest_receipt": "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",
        "pending_renewal_info": [{
          "expiration_intent": "1",
          "auto_renew_product_id": "com.abbyy.finescanner.premium.1year.new.30Mar2020",
          "is_in_billing_retry_period": "0",
          "product_id": "com.abbyy.finescanner.premium.1year.new.30Mar2020",
          "original_transaction_id": "300001199628700",
          "auto_renew_status": "0"
        }, {
          "auto_renew_product_id": "com.abbyy.finescanner.premium.1month",
          "product_id": "com.abbyy.finescanner.premium.1month",
          "original_transaction_id": "300001214598242",
          "auto_renew_status": "0"
        }],
        "status": 0
      },
      "promotional_offer_eligibility": false,
      "introductory_offer_eligibility": false,
      "custom_attributes": {
        "AppUpdated": 1.0,
        "ScansCount": 0.0,
        "SubscriptionDate": 1662530413.0,
        "UserAutorenewsCount": 1.0,
        "UserDidOpenStore": 1663126621.4379802,
        "UserHadTrial": 1.0,
        "UserTrialDate": 1663135214.0,
        "UserYearSubscriptionCount": 1.0
      },
      "total_revenue_usd": 0.0
    }
  }
}

$done({body: JSON.stringify(obj)});