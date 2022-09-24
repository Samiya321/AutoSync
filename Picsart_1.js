var obj = JSON.parse($response.body);

obj =

{
  "status": "success",
  "response": [{
    "status": "SUBSCRIPTION_PURCHASED",
    "is_trial": true,
    "order_id": "160001326559771",
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
    "expire_date": 4093902846000,
    "purchase_date": 1663982350000,
    "subscription_id": "com.picsart.studio.subscription_plus_yearly",
    "original_order_id": "160001326559771",
    "is_eligible_for_grant": true,
    "is_eligible_for_introductory": false,
    "reason": "ok"
  }]
}
$done({body: JSON.stringify(obj)});