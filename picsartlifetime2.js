var obj = JSON.parse($response.body);

obj={
  "status": "success",
  "response": [
    {
      "status": "PURCHASED",
      "enabled": true,
      "order_id": "450001131447088",
      "plan_meta": {
        "id": "com.picsart.studio.lifetime_v4",
        "frequency": "P1L",
        "type": "non_consumable",
        "scope_id": "full",
        "product_id": "lifetime_v4",
        "description": "plus",
      "purchase_date": 1653670630000,
      "original_order_id": "450001131447088",
      "reason": "ok"
    }
  ]
}
$done({body: JSON.stringify(obj)});