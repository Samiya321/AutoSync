var obj = JSON.parse($response.body);

obj = 
{
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 952050883,
    "app_item_id": 952050883,
    "bundle_id": "com.darinsoft.vimo",
    "application_version": "8",
    "download_id": 501253041924133869,
    "version_external_identifier": 852508646,
    "receipt_creation_date": "2022-10-01 19:30:26 Etc/GMT",
    "receipt_creation_date_ms": "1664652626000",
    "receipt_creation_date_pst": "2022-10-01 12:30:26 America/Los_Angeles",
    "request_date": "2022-10-01 19:32:06 Etc/GMT",
    "request_date_ms": "1664652726181",
    "request_date_pst": "2022-10-01 12:32:06 America/Los_Angeles",
    "original_purchase_date": "2022-03-23 19:11:14 Etc/GMT",
    "original_purchase_date_ms": "1648062674000",
    "original_purchase_date_pst": "2022-03-23 12:11:14 America/Los_Angeles",
    "original_application_version": "6",
    "in_app": [{
        "quantity": "1",
        "product_id": "com.vimosoft.EVERYTHING",
        "transaction_id": "300001207454933",
        "original_transaction_id": "300001074612302",
        "purchase_date": "2022-08-30 05:06:13 Etc/GMT",
        "purchase_date_ms": "1661835973000",
        "purchase_date_pst": "2022-08-29 22:06:13 America/Los_Angeles",
        "original_purchase_date": "2022-03-23 23:01:27 Etc/GMT",
        "original_purchase_date_ms": "1648076487000",
        "original_purchase_date_pst": "2022-03-23 16:01:27 America/Los_Angeles",
        "expires_date": null,
        "expires_date_ms": null,
        "expires_date_pst": null,
        "web_order_line_item_id": "300000477950588",
        "is_trial_period": "false",
        "is_in_intro_offer_period": "false",
        "in_app_ownership_type": "PURCHASED",
         "status": 0
      }
$done({body: JSON.stringify(objc)});