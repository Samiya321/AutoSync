var obj = JSON.parse($response.body);

obj = 

{
  "fullRefundDateMs": null,
  "isExpired": false,
  "latestExpirationDateMs": 4094428374000,
  "latestProductId": "com.lightricks.EnlightVideo_V2.PA.1Y.SA_1Y.SA_TRIAL.1W",
  "latestPurchaseDateMs": 1654729095000,
  "latestTransactionId": "300001136145947",
  "originalPurchaseDateMs": 1644053844000,
  "originalTransactionId": "300001036435612",
  "pendingRenewalInfo": {
    "expirationIntent": null,
    "isAutoRenewEnabled": true,
    "nextProductId": "com.lightricks.EnlightVideo_V2.PA.1Y.SA_1Y.SA_TRIAL.1W"
  }
}
$done({body: JSON.stringify(obj)});