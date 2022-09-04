var obj = JSON.parse($response.body);

obj={
  "status": "success",
  "response": [
    {
      "status": "SUBSCRIPTION_PURCHASED",
      "order_id": "450001131447088",
      "productID": {
        "com.picsart.studio.lifetime_v4",
        "period": "P1L",
        "type": "non_consumable",
        "scope_id": "full",
        "package": "lifetime_v4",
        "enabled": true,
        "isPurchased": true,
      "purchase_date": 1653670630000,
      "original_order_id": "450001131447088",
      "reason": "ok"
    }
  ]
}
$done({body: JSON.stringify(obj)});