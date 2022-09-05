var obj = JSON.parse($response.body);

obj = 

{
  "status": "success",
  "response": [{
    "status": "SUBSCRIPTION_RENEWED",
    "is_trial": false,
    "order_id": "2000000146141064",
    "plan_meta": {
      "id": "com.picsart.studio.subscription_plus_yearly",
      "frequency": "yearly",
      "type": "renewable",
      "scope_id": "full",
      "product_id": "subscription_plus_yearly",
      "description": "plus",
      "tier_id": "gold_old",
      "permissions": ["premium_tools_standard", "premium_tools_ai"],
      "level": 1500,
      "storage_limit_in_mb": 5120
    },
    "limitation": {
      "max_count": 10,
      "limits_exceeded": false
    },
    "expire_date": null,
    "purchase_date": 4092258647000,
    "subscription_id": "com.picsart.studio.subscription_plus_yearly",
    "original_order_id": "2000000122080861",
    "is_eligible_for_grant": false,
    "is_eligible_for_introductory": false,
    "reason": "ok"
  }]
}
$done({body: JSON.stringify(obj)});