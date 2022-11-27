var obj = JSON.parse($response.body);

obj =  

{
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 653031147,
    "app_item_id": 653031147,
    "bundle_id": "com.waterminder.waterminder",
    "application_version": "790",
    "download_id": 501957141896007662,
    "version_external_identifier": 852911555,
    "receipt_creation_date": "2022-11-27 13:34:13 Etc/GMT",
    "receipt_creation_date_ms": "1669556053000",
    "receipt_creation_date_pst": "2022-11-27 05:34:13 America/Los_Angeles",
    "request_date": "2022-11-27 13:36:10 Etc/GMT",
    "request_date_ms": "1669556170509",
    "request_date_pst": "2022-11-27 05:36:10 America/Los_Angeles",
    "original_purchase_date": "2022-11-27 11:54:19 Etc/GMT",
    "original_purchase_date_ms": "1669550059000",
    "original_purchase_date_pst": "2022-11-27 03:54:19 America/Los_Angeles",
    "original_application_version": "790",
    "in_app": [{
      "quantity": "1",
      "product_id": "waterminder.premiumMonthly",
      "transaction_id": "300001285318872",
      "original_transaction_id": "300001285318872",
      "purchase_date": "2022-11-27 12:00:02 Etc/GMT",
      "purchase_date_ms": "1669550402000",
      "purchase_date_pst": "2022-11-27 04:00:02 America/Los_Angeles",
      "original_purchase_date": "2022-11-27 12:00:03 Etc/GMT",
      "original_purchase_date_ms": "1669550403000",
      "original_purchase_date_pst": "2022-11-27 04:00:03 America/Los_Angeles",
      "expires_date": "2029-11-30 12:00:02 Etc/GMT",
      "expires_date_ms": "1890767705000",
      "expires_date_pst": "2029-11-30 04:00:02 America/Los_Angeles",
      "web_order_line_item_id": "300000588111220",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "waterminder.premiumMonthly",
    "transaction_id": "300001285318872",
    "original_transaction_id": "300001285318872",
    "purchase_date": "2022-11-27 12:00:02 Etc/GMT",
    "purchase_date_ms": "1669550402000",
    "purchase_date_pst": "2022-11-27 04:00:02 America/Los_Angeles",
    "original_purchase_date": "2022-11-27 12:00:03 Etc/GMT",
    "original_purchase_date_ms": "1669550403000",
    "original_purchase_date_pst": "2022-11-27 04:00:03 America/Los_Angeles",
    "expires_date": "2029-11-30 12:00:02 Etc/GMT",
    "expires_date_ms": "1890767705000",
    "expires_date_pst": "2029-11-30 04:00:02 America/Los_Angeles",
    "web_order_line_item_id": "300000588111220",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "21006599"
  }],
  "latest_receipt": "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",
  "pending_renewal_info": [{
    "auto_renew_product_id": "waterminder.premiumMonthly",
    "product_id": "waterminder.premiumMonthly",
    "original_transaction_id": "300001285318872",
    "auto_renew_status": "1"
  }],
  "status": 0
}
$done({body: JSON.stringify(obj)});