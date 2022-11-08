var obj = JSON.parse($response.body);
obj =

{
  "id": "SYj2LwQnQD",
  "name": "iPhone Max",
  "email": "iphonemaxpro@gmail.com",
  "token": "opRXQ6RYZkzfB77yN7cnoKCRAiQ",
  "groups": [
    "0-default"
  ],
  "is_hipaa_compliant": false,
  "created_at": "2022-04-15T22:16:16.058Z",
  "language": "en",
  "email_confirmation_status": "confirmed",
  "has_opted_in_limited_data_use": true,
  "subscription": {
    "type": "ios",
    "expires": "2099-11-14T20:40:49.000Z",
    "valid": true,
    "user_id": "SYj2LwQnQD",
    "id": "230001422257915",
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
    "began": "2022-11-07T20:40:49.000Z",
    "is_lifetime": false,
    "ios_details": {
      "id": "230001422257915",
      "expires": "2099-11-14T20:40:49.000Z",
      "began": "2022-11-07T20:40:49.000Z",
      "product_id": "com.calm.yearly_usa_60_not_usa_60",
      "is_free_trial": false,
      "is_canceled": false,
      "is_renewable": true,
      "plan_duration": "year",
      "original_transaction_id": "230001422257915",
      "purchaser_platform": "ios",
      "payment_processor": "itunes"
    }
  }
}


$done({body: JSON.stringify(obj)});