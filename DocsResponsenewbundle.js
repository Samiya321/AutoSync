var obj = JSON.parse($response.body);

obj = 

{
  "bundleId": "com.readdle.ReaddleDocsIPad",
  "chargingPlatform": "iOS AppStore",
  "receiptId": 1498123252000,
  "originalTransactionId": 300000595747282,
  "inAppStates": [{
    "type": "subscription",
    "productId": "com.readdle.ReaddleDocsIPad.subscription.month12new",
    "originalTransactionId": 300000595747282,
    "productName": "subscription",
    "isEligibleForIntroPeriod": false,
    "subscriptionExpirationDate": "02:43 18/08/2023",
    "subscriptionState": "active",
    "subscriptionAutoRenewStatus": "autoRenewOff",
    "isInGracePeriod": false,
    "isInBillingRetryPeriod": false,
    "entitlements": []
  }, {
    "type": "custom purchase",
    "productId": "documents6-user",
    "originalTransactionId": "0000",
    "entitlements": []
  }],
  "receiptStatus": "ok",
  "statisticsInfo": {
    "events": []
  }
}
$done({body: JSON.stringify(obj)});