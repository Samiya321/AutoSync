var obj = JSON.parse($response.body);

obj = 

{
  "originalTransactionId" : 520000532982729,
  "inAppStates" : [
    {
      "originalTransactionId" : 520000532982729,
      "productId" : "com.readdle.ReaddleDocsIPad.subscription.month12new",
      "subscriptionState" : "active",
      "productName" : "subscription",
      "subscriptionExpirationDate" : "07:07 03/03/2023",
      "isEligibleForIntroPeriod" : false,
      "subscriptionAutoRenewStatus" : "autoRenewOff",
      "type" : "subscription",
      "isInGracePeriod" : false,
      "isInBillingRetryPeriod" : false,
      "entitlements" : [

      ]
    }
  ],
  "chargingPlatform" : "iOS AppStore",
  "receiptStatus" : "ok",
  "bundleId" : "com.readdle.ReaddleDocsIPad",
  "receiptId" : 1579694237000,
  "statisticsInfo" : {
    "events" : [

    ]
  }
}
$done({body: JSON.stringify(obj)});