var obj = JSON.parse($response.body);

obj = 

{
  "version": "v2",
  "type": "subscribed_admin",
  "users": [{
    "userId": "7412da44-7a68-40cf-b098-a42f8f824f4f",
    "role": "editor"
  }],
  "members": [],
  "spaceUsers": [],
  "bots": [],
  "joinedMemberIds": ["7412da44-7a68-40cf-b098-a42f8f824f4f"],
  "userSimilarity": {},
  "credits": [{
    "id": "b67927cb-0304-4601-828a-1cd0dc308253",
    "version": 2,
    "user_id": "7412da44-7a68-40cf-b098-a42f8f824f4f",
    "amount": 500,
    "activated": true,
    "created_timestamp": "1661815570802",
    "type": "mobile_login"
  }],
  "totalCredit": 500,
  "availableCredit": 500,
  "creditEnabled": true,
  "timelineViewUsage": 0,
  "inviteLinkCode": "ac217f51f8bbffe69057b663ff811591d2ad6366",
  "hasPaidNonzero": true,
  "customerData": {
    "stripe": {
      "isSubscribed": false,
      "isDelinquent": false,
      "accountBalance": 0,
      "hasPaidNonzero": false
    },
    "revenueCat": {
      "isSubscribed": true,
      "hasPaidNonzero": true,
      "productId": "notion.id.personal_pro_yearly",
      "entitlements": {
        "notion.id.personal_pro": {
          "expires_date": "2099-08-30T00:29:27Z",
          "grace_period_expires_date": null,
          "product_identifier": "notion.id.personal_pro_yearly",
          "purchase_date": "2022-08-29T23:29:27Z"
        }
      },
      "first_seen": "2022-08-29T23:25:58Z",
      "last_seen": "2022-08-29T23:25:58Z",
      "management_url": "https://apps.apple.com/account/subscriptions",
      "non_subscriptions": {},
      "original_app_user_id": "$RCAnonymousID:18f7a9570e65451bb3c7f85cf0ca0721",
      "original_application_version": "1.0",
      "original_purchase_date": "2013-08-01T07:00:00Z",
      "other_purchases": {},
      "subscriptions": {
        "notion.id.personal_pro_yearly": {
          "billing_issues_detected_at": null,
          "expires_date": "2099-08-30T00:29:27Z",
          "grace_period_expires_date": null,
          "is_sandbox": true,
          "original_purchase_date": "2022-08-29T23:29:30Z",
          "ownership_type": "PURCHASED",
          "period_type": "normal",
          "purchase_date": "2022-08-29T23:29:27Z",
          "store": "app_store",
          "unsubscribe_detected_at": null
        }
      }
    },
    "activeSubscriptionPlatform": "revenueCat"
  },
  "revenueCatEnabled": false
}
$done({body: JSON.stringify(obj)});