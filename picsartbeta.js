var obj = JSON.parse($response.body);

obj = 

{
  "status": "success",
  "response": [{
    "status": "SUBSCRIPTION_PURCHASED",
    "is_trial": false,
    "order_id": "2000000140160747",
    "plan_meta": {
      "id": "com.picsart.studio.subscription_plus_yearly",
      "frequency": "yearly",
      "type": "renewable",
      "scope_id": "full",
      "product_id": "subscription_plus_yearly",
      "tier_id": "gold_old",
      "permissions": ["premium_tools_standard", "premium_tools_ai"],
      "level": 1500,
      "storage_limit_in_mb": 20
    },
    "limitation": {
      "max_count": 10,
      "limits_exceeded": false
    },
    "expire_date": 4121920029000,
    "purchase_date": 1661561789000,
    "subscription_id": "com.picsart.studio.subscription_plus_yearly",
    "original_order_id": "2000000122080861",
    "is_eligible_for_grant": false,
    "is_eligible_for_introductory": false,
    "reason": "ok"
  }]
}
$done({body: JSON.stringify(obj)});