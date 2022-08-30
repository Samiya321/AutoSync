var obj = JSON.parse($response.body);

obj = 

{
  "customerData" : {
    "activeSubscriptionPlatform" : "revenueCat",
    "stripe" : {
      "accountBalance" : 0,
      "isDelinquent" : false,
      "hasPaidNonzero" : false,
      "isSubscribed" : false
    },
    "revenueCat" : {
      "productId" : "notion.id.personal_pro_yearly",
      "original_app_user_id" : "$RCAnonymousID:18f7a9570e65451bb3c7f85cf0ca0721",
      "original_purchase_date" : "2013-08-01T07:00:00Z",
      "isSubscribed" : true,
      "hasPaidNonzero" : false,
      "non_subscriptions" : {

      },
      "other_purchases" : {

      },
      "entitlements" : {
        "notion.id.personal_pro" : {
          "grace_period_expires_date" : null,
          "purchase_date" : "2022-08-29T23:29:27Z",
          "product_identifier" : "notion.id.personal_pro_yearly",
          "expires_date" : "2030-08-30T00:29:27Z"
        }
      },
      "first_seen" : "2022-08-29T23:25:58Z",
      "last_seen" : "2022-08-29T23:25:58Z",
      "subscriptions" : {
        "notion.id.personal_pro_yearly" : {
          "is_sandbox" : false,
          "ownership_type" : "PURCHASED",
          "billing_issues_detected_at" : null,
          "period_type" : "normal",
          "expires_date" : "2030-08-30T00:29:27Z",
          "grace_period_expires_date" : null,
          "unsubscribe_detected_at" : null,
          "original_purchase_date" : "2022-08-29T23:29:30Z",
          "purchase_date" : "2022-08-29T23:29:27Z",
          "store" : "app_store"
        }
      },
      "original_application_version" : "1.0",
      "management_url" : "https://apps.apple.com/account/subscriptions"
    }
  },
  "revenueCatEnabled" : true,
  "credits" : [
    {
      "amount" : 500,
      "activated" : true,
      "id" : "b67927cb-0304-4601-828a-1cd0dc308253",
      "version" : 2,
      "user_id" : "7412da44-7a68-40cf-b098-a42f8f824f4f",
      "created_timestamp" : "1661815570802",
      "type" : "mobile_login"
    }
  ],
  "version" : "v2",
  "members" : [

  ],
  "users" : [
    {
      "userId" : "7412da44-7a68-40cf-b098-a42f8f824f4f",
      "role" : "editor"
    }
  ],
  "joinedMemberIds" : [
    "7412da44-7a68-40cf-b098-a42f8f824f4f"
  ],
  "hasPaidNonzero" : false,
  "type" : "subscribed_admin",
  "totalCredit" : 500,
  "spaceUsers" : [

  ],
  "userSimilarity" : {

  },
  "timelineViewUsage" : 0,
  "inviteLinkCode" : "ac217f51f8bbffe69057b663ff811591d2ad6366",
  "bots" : [

  ],
  "availableCredit" : 500,
  "creditEnabled" : true
}
$done({body: JSON.stringify(obj)});