var obj = JSON.parse($response.body);

obj = 

{

  "receipt": {
    "receipt_type": "Production",
    "adam_id": 488575683,
    "app_item_id": 488575683,
    "bundle_id": "com.mobilefootie.fotmobpro",
    "application_version": "8735",
    "download_id": 500973747764529182,
    "version_external_identifier": 852317279,
    "receipt_creation_date": "2022-10-07 01:44:11 Etc/GMT",
    "receipt_creation_date_ms": "1665107051000",
    "receipt_creation_date_pst": "2022-10-06 18:44:11 America/Los_Angeles",
    "request_date": "2022-10-07 01:44:23 Etc/GMT",
    "request_date_ms": "1665107063537",
    "request_date_pst": "2022-10-06 18:44:23 America/Los_Angeles",
    "original_purchase_date": "2021-12-15 03:34:48 Etc/GMT",
    "original_purchase_date_ms": "1639539288000",
    "original_purchase_date_pst": "2021-12-14 19:34:48 America/Los_Angeles",
    "original_application_version": "8047",
    "in_app": [
            "quantity" : "1",
        "purchase_date_ms" : "1665106908000",
        "expires_date" : "2099-10-07 02:41:48 Etc/GMT",
        "expires_date_pst" : "2099-10-06 19:41:48 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "2000000171576913",
        "is_trial_period" : "false",
        "original_transaction_id" : "2000000157351432",
        "purchase_date" : "2022-10-07 01:41:48 Etc/GMT",
        "product_id" : "fotmob_membership",
        "original_purchase_date_pst" : "2022-09-18 16:49:40 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1663544980000",
        "web_order_line_item_id" : "2000000011420853",
        "expires_date_ms" : "4102366089000",
        "purchase_date_pst" : "2022-10-06 18:41:48 America/Los_Angeles",
        "original_purchase_date" : "2022-09-18 23:49:40 Etc/GMT"
      ]
  },
  "environment": "Production",
  "status": 0
}
$done({body: JSON.stringify(obj)});