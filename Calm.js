var obj = JSON.parse($response.body);
obj = {

  "type": "ios",
  "expires": "2099-06-06T00:11:43.000Z",
  "valid": true,
  "id": "300001133842520",
  "subscription_plan": "com.calm.yearly_usa_60_not_usa_60",
  "plan_duration": "year",
  "is_renewable": true,
  "is_canceled": false,
  "is_refunded": false,
  "in_free_trial_window": false,
  "purchaser_platform": "ios",
  "payment_processor": "itunes",
  "has_ever_done_free_trial": true,
  "has_ever_had_ios_subscription": true,
  "has_ever_had_android_subscription": false,
  "is_free": false,
  "began": "2022-06-06T00:11:43.000Z",
  "is_lifetime": false,
  "ios_details": {
    "id": "300001133842520",
    "expires": "2099-06-06T00:11:43.000Z",
    "began": "2022-06-06T00:11:43.000Z",
    "product_id": "com.calm.yearly_usa_60_not_usa_60",
    "is_free_trial": false,
    "is_canceled": false,
    "is_renewable": true,
    "plan_duration": "year",
    "original_transaction_id": "300001036398075",
    "purchaser_platform": "ios",
    "payment_processor": "itunes"
  },
  "conversion_value": 0
}

$done({body: JSON.stringify(obj)});l