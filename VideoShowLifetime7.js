var obj = JSON.parse($response.body);

obj = {

  "subscrib_type" : "2",
  "retCode" : 1,
  "current_date" : "2022-09-27 03:39:09",
  "isUpdateUuid" : 1,
  "retMsg" : "success",
  "isUsedPromocode" : 0,
  "isDiscount" : 1,
  "product_id" : "VideoShow_Product_id33",
  "renew_status" : 0,
  "label_type" : 1,
  "list" : [
    {
      "current_date" : "2022-09-27 03:39:09",
      "original_transaction_id" : "300001231930163",
      "order_status" : 1,
      "product_id" : "VideoShow_Product_id33",
      "expires_date" : "2099-30 02:24:22"
    }
  ],
  "recallLabelType" : 0
}
$done({body: JSON.stringify(obj)});