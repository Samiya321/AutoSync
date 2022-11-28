var obj = JSON.parse($response.body);

obj =  {


  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 653031147,
    "receipt_creation_date" : "2022-11-28 00:25:07 Etc/GMT",
    "bundle_id" : "com.waterminder.waterminder",
    "original_purchase_date" : "2022-11-27 11:54:19 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1669550402000",
        "expires_date" : "2022-11-30 12:00:02 Etc/GMT",
        "expires_date_pst" : "2022-11-30 04:00:02 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "300001285318872",
        "is_trial_period" : "true",
        "original_transaction_id" : "300001285318872",
        "purchase_date" : "2022-11-27 12:00:02 Etc/GMT",
        "product_id" : "waterminder.premiumMonthly",
        "original_purchase_date_pst" : "2022-11-27 04:00:03 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1669550403000",
        "web_order_line_item_id" : "300000588111220",
        "expires_date_ms" : "1669809602000",
        "purchase_date_pst" : "2022-11-27 04:00:02 America/Los_Angeles",
        "original_purchase_date" : "2022-11-27 12:00:03 Etc/GMT"
      }
    ],
    "adam_id" : 653031147,
    "receipt_creation_date_pst" : "2022-11-27 16:25:07 America/Los_Angeles",
    "request_date" : "2022-11-28 02:05:46 Etc/GMT",
    "request_date_pst" : "2022-11-27 18:05:46 America/Los_Angeles",
    "version_external_identifier" : 852911555,
    "request_date_ms" : "1669601146286",
    "original_purchase_date_pst" : "2022-11-27 03:54:19 America/Los_Angeles",
    "application_version" : "790",
    "original_purchase_date_ms" : "1669550059000",
    "receipt_creation_date_ms" : "1669595107000",
    "original_application_version" : "790",
    "download_id" : 501957141896007662
  },
  "pending_renewal_info" : [
    {
      "product_id" : "waterminder.premiumMonthly",
      "original_transaction_id" : "300001285318872",
      "auto_renew_product_id" : "waterminder.premiumMonthly",
      "auto_renew_status" : "0"
    }
  ],
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1669550402000",
      "expires_date" : "2022-11-30 12:00:02 Etc/GMT",
      "expires_date_pst" : "2022-11-30 04:00:02 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "300001285318872",
      "is_trial_period" : "true",
      "original_transaction_id" : "300001285318872",
      "purchase_date" : "2022-11-27 12:00:02 Etc/GMT",
      "product_id" : "waterminder.premiumMonthly",
      "original_purchase_date_pst" : "2022-11-27 04:00:03 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "21006599",
      "original_purchase_date_ms" : "1669550403000",
      "web_order_line_item_id" : "300000588111220",
      "expires_date_ms" : "1669809602000",
      "purchase_date_pst" : "2022-11-27 04:00:02 America/Los_Angeles",
      "original_purchase_date" : "2022-11-27 12:00:03 Etc/GMT"
    }
  ],
  "latest_receipt" : "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"
}
$done({body: JSON.stringify(obj)});