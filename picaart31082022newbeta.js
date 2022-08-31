var obj = JSON.parse($response.body);

obj = {
  "status": "success",
  "response": [{
    "status": "enabled",
    "order_id": "2000000140160747",
    "plan_meta": {
      "id": "com.picsart.studio.lifetime_v4",
      "frequency": "P1L",
      "type": "non_consumable",
      "scope_id": "full",
      "product_id": "lifetime_v4",
      "tier_id": "gold_old",
      "permissions": ["premium_tools_standard", "premium_tools_ai"],
      "level": 1500,
      "storage_limit_in_mb": 5000
    },
    "limitation": {
      "max_count": 10,
      "limits_exceeded": false
    },
    "purchase_date": 1661561789000,
    "original_order_id": "2000000122080861",
    "is_eligible_for_grant": false,
    "is_eligible_for_introductory": false,
    "reason": "ok"
  }]
}
$done({body: JSON.stringify(obj)});