var obj = JSON.parse($response.body);

obj = {

  "subscrib_type" : "2",
  "retCode" : 1,
  "current_date" : "2022-09-27 03:39:09",
  "isUpdateUuid" : 0,
  "retMsg" : "success",
  "isUsedPromocode" : 0,
  "isDiscount" : 1,
  "product_id" : "vip_privilege_yearly_3",
  "renew_status" : 0,
  "label_type" : 1,
  "list" : [
    {
      "current_date" : "2022-09-27 03:39:09",
      "original_transaction_id" : "300001231930163",
      "order_status" : 1,
      "product_id" : "vip_privilege_yearly_3",
      "expires_date" : "2099-30 02:24:22"
    }
  ],
  "recallLabelType" : 1
}
$done({body: JSON.stringify(obj)});