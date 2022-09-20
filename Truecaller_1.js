var obj = JSON.parse($response.body);
obj =

{
  "expire": "2099-09-10T22:30:34Z",
  "start": "2022-09-10T21:30:34Z",
  "paymentProvider": "Apple",
  "isExpired": false,
  "isGracePeriodExpired": false,
  "subscriptionStatus": "RenewalStatusOn",
  "inAppPurchaseAllowed": false,
  "tier": {
    "id": "gold",
    "feature": [{
      "id": "spam_blocking",
      "rank": -2147483648,
      "status": "Included"
    }, {
      "id": "caller_id",
      "rank": -2147483648,
      "status": "Included"
    }, {
      "id": "no_ads",
      "rank": 1,
      "status": "Included"
    }, {
      "id": "call_assistant",
      "rank": 2,
      "status": "Excluded"
    }, {
      "id": "extended_spam_blocking",
      "rank": 3,
      "status": "Included"
    }, {
      "id": "who_viewed_my_profile",
      "rank": 4,
      "status": "Included"
    }, {
      "id": "incognito_mode",
      "rank": 6,
      "status": "Included"
    }, {
      "id": "premium_badge",
      "rank": 10,
      "status": "Included"
    }, {
      "id": "premium_support",
      "rank": 11,
      "status": "Included"
    }, {
      "id": "gold_caller_id",
      "rank": 13,
      "status": "Included"
    }]
  }
}
$done({body: JSON.stringify(obj)});