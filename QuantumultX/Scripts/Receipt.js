var obj = JSON.parse($response.body);
var bundle_id = obj.receipt["bundle_id"];

if(bundle_id == "co.bazaart.app"){
obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 515094775,
    "app_item_id": 515094775,
    "bundle_id": "co.bazaart.app",
    "application_version": "741",
    "download_id": 501353368408839240,
    "version_external_identifier": 848185411,
    "receipt_creation_date": "2022-04-28 07:16:38 Etc/GMT",
    "receipt_creation_date_ms": "1651130198000",
    "receipt_creation_date_pst": "2022-04-28 00:16:38 America/Los_Angeles",
    "request_date": "2022-04-28 07:24:35 Etc/GMT",
    "request_date_ms": "1651130675869",
    "request_date_pst": "2022-04-28 00:24:35 America/Los_Angeles",
    "original_purchase_date": "2022-04-28 05:39:07 Etc/GMT",
    "original_purchase_date_ms": "1651124347000",
    "original_purchase_date_pst": "2022-04-27 22:39:07 America/Los_Angeles",
    "original_application_version": "741",
    "in_app": [{
      "quantity": "1",
      "product_id": "Bazaart_Premium_Monthly_v9",
      "transaction_id": "190001277264068",
      "original_transaction_id": "190001277264068",
      "purchase_date": "2022-04-28 07:16:28 Etc/GMT",
      "purchase_date_ms": "1651130188000",
      "purchase_date_pst": "2022-04-28 00:16:28 America/Los_Angeles",
      "original_purchase_date": "2022-04-28 07:16:29 Etc/GMT",
      "original_purchase_date_ms": "1651130189000",
      "original_purchase_date_pst": "2022-04-28 00:16:29 America/Los_Angeles",
      "expires_date": "2029-04-26 17:54:33 Etc/GMT",
      "expires_date_ms": "1871891673000",
      "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
      "web_order_line_item_id": "190000554353099",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "Bazaart_Premium_Monthly_v9",
    "transaction_id": "190001277264068",
    "original_transaction_id": "190001277264068",
    "purchase_date": "2022-04-28 07:16:28 Etc/GMT",
    "purchase_date_ms": "1651130188000",
    "purchase_date_pst": "2022-04-28 00:16:28 America/Los_Angeles",
    "original_purchase_date": "2022-04-28 07:16:29 Etc/GMT",
    "original_purchase_date_ms": "1651130189000",
    "original_purchase_date_pst": "2022-04-28 00:16:29 America/Los_Angeles",
    "expires_date": "2029-04-26 17:54:33 Etc/GMT",
    "expires_date_ms": "1871891673000",
    "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
    "web_order_line_item_id": "190000554353099",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20528408"
  }],
  "latest_receipt": "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",
  "pending_renewal_info": [{
    "auto_renew_product_id": "Bazaart_Premium_Monthly_v9",
    "product_id": "Bazaart_Premium_Monthly_v9",
    "original_transaction_id": "190001277264068",
    "auto_renew_status": "1"
  }],
  "status": 0
}
}

if(bundle_id == "com.heliang.super.widget"){
obj = {
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1569291816,
    "receipt_creation_date" : "2022-01-26 02:55:19 Etc/GMT",
    "bundle_id" : "com.heliang.super.widget",
    "original_purchase_date" : "2021-12-01 19:01:34 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1637860065000",
        "expires_date" : "2099-09-09 17:07:45 Etc/GMT",
        "expires_date_pst" : "2099-09-09 09:07:45 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "730000766600650",
        "is_trial_period" : "false",
        "original_transaction_id" : "730000766600650",
        "purchase_date" : "2021-11-25 17:07:45 Etc/GMT",
        "product_id" : "com.focoslive",
        "original_purchase_date_pst" : "2021-11-25 09:07:48 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1637860068000",
        "web_order_line_item_id" : "730000330755327",
        "expires_date_ms" : "4092647115000",
        "purchase_date_pst" : "2021-11-25 09:07:45 America/Los_Angeles",
        "original_purchase_date" : "2021-11-25 17:07:48 Etc/GMT"
      }
    ],
    "adam_id" : 1569291816,
    "receipt_creation_date_pst" : "2022-01-25 18:55:19 America/Los_Angeles",
    "request_date" : "2022-02-05 17:13:48 Etc/GMT",
    "request_date_pst" : "2022-02-05 09:13:48 America/Los_Angeles",
    "version_external_identifier" : 846821007,
    "request_date_ms" : "1644081228639",
    "original_purchase_date_pst" : "2021-12-01 11:01:34 America/Los_Angeles",
    "application_version" : "40",
    "original_purchase_date_ms" : "1638385294000",
    "receipt_creation_date_ms" : "1643165719000",
    "original_application_version" : "22",
    "download_id" : 500935934584949200
  },
  "pending_renewal_info" : [
    {
      "product_id" : "com.focoslive",
      "original_transaction_id" : "730000766600650",
      "auto_renew_product_id" : "com.focoslive",
      "auto_renew_status" : "1"
    }
  ],
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1637860065000",
      "expires_date" : "2099-09-09 17:07:45 Etc/GMT",
      "expires_date_pst" : "2099-09-09 09:07:45 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "730000766600650",
      "is_trial_period" : "false",
      "original_transaction_id" : "730000766600650",
      "purchase_date" : "2021-11-25 17:07:45 Etc/GMT",
      "product_id" : "com.focoslive",
      "original_purchase_date_pst" : "2021-11-25 09:07:48 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "20902245",
      "original_purchase_date_ms" : "1637860068000",
      "web_order_line_item_id" : "730000330755327",
      "expires_date_ms" : "4092647115000",
      "purchase_date_pst" : "2021-11-25 09:07:45 America/Los_Angeles",
      "original_purchase_date" : "2021-11-25 17:07:48 Etc/GMT"
    }
  ],
  "latest_receipt" : ""
}
}

if(bundle_id == "com.loveyouchenapps.knockout")
{
obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 944665061,
    "app_item_id": 944665061,
    "bundle_id": "com.loveyouchenapps.knockout",
    "application_version": "7.38",
    "download_id": 501371116553047653,
    "version_external_identifier": 848703603,
    "receipt_creation_date": "2022-05-04 12:11:38 Etc/GMT",
    "receipt_creation_date_ms": "1651666298000",
    "receipt_creation_date_pst": "2022-05-04 05:11:38 America/Los_Angeles",
    "request_date": "2022-05-04 12:11:39 Etc/GMT",
    "request_date_ms": "1651666299863",
    "request_date_pst": "2022-05-04 05:11:39 America/Los_Angeles",
    "original_purchase_date": "2022-05-04 12:06:29 Etc/GMT",
    "original_purchase_date_ms": "1651665989000",
    "original_purchase_date_pst": "2022-05-04 05:06:29 America/Los_Angeles",
    "original_application_version": "7.38",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.knockout.7daysplus",
      "transaction_id": "190001282772956",
      "original_transaction_id": "190001282772956",
      "purchase_date": "2022-05-04 12:11:15 Etc/GMT",
      "purchase_date_ms": "1651666275000",
      "purchase_date_pst": "2022-05-04 05:11:15 America/Los_Angeles",
      "original_purchase_date": "2022-05-04 12:11:16 Etc/GMT",
      "original_purchase_date_ms": "1651666276000",
      "original_purchase_date_pst": "2022-05-04 05:11:16 America/Los_Angeles",
      "expires_date": "2029-04-26 17:54:33 Etc/GMT",
      "expires_date_ms": "1871891673000",
      "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
      "web_order_line_item_id": "190000557319569",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "com.knockout.7daysplus",
    "transaction_id": "190001282772956",
    "original_transaction_id": "190001282772956",
    "purchase_date": "2022-05-04 12:11:15 Etc/GMT",
    "purchase_date_ms": "1651666275000",
    "purchase_date_pst": "2022-05-04 05:11:15 America/Los_Angeles",
    "original_purchase_date": "2022-05-04 12:11:16 Etc/GMT",
    "original_purchase_date_ms": "1651666276000",
    "original_purchase_date_pst": "2022-05-04 05:11:16 America/Los_Angeles",
    "expires_date": "2029-04-26 17:54:33 Etc/GMT",
    "expires_date_ms": "1871891673000",
    "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
    "web_order_line_item_id": "190000557319569",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20386379"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "auto_renew_product_id": "com.knockout.7daysplus",
    "product_id": "com.knockout.7daysplus",
    "original_transaction_id": "190001282772956",
    "auto_renew_status": "1"
  }],
  "status": 0
}
}

$done({body:JSON.stringify(obj)});
