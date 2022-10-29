var obj = JSON.parse($response.body);

obj = 

{
  "data": {
    "type": "adapty_analytics_profile",
    "id": "12feef90-1285-44ba-8a74-29e9c5012cd2",
    "attributes": {
      "app_id": "b93cecdb-a0a5-49a3-99ce-3d61e264d25f",
      "profile_id": "12feef90-1285-44ba-8a74-29e9c5012cd2",
      "customer_user_id": null,
      "total_revenue_usd": 0.0,
      "paid_access_levels": premium,
      "subscriptions": "com.abbyy.finescanner.premium.1month",
      "non_subscriptions": null,
      "custom_attributes": {
        "AppUpdated": 1.0,
        "ScansCount": 0.0,
        "SubscriptionDate": 1698543648.0,
        "UserAutorenewsCount": 0.0,
        "UserHadTrial": 0.0,
        "UserTrialDate": 1667007665.0,
        "UserYearSubscriptionCount": 0.0
      },
      "promotional_offer_eligibility": false,
      "introductory_offer_eligibility": false
    }
  }
}
$done({body: JSON.stringify(obj)});