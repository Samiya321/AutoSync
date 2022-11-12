let obj = JSON.parse($response.body);

obj =

{
  "code": 0,
  "data": {
    "latestReceiptInfo": [{
      "productId": "com.magicv.AirBrush.unlockLifetime",
      "quantity": 1,
      "originalTransactionId": "300001261544935",
      "transactionId": "300001261544935",
      "purchaseDateMs": "1667173619000",
      "expiresDateMs": "",
      "promotionalOfferId": "",
      "autoRenewStatus": "",
      "offerCodeRefName": "",
      "gracePeriodExpiresDateMs": "",
      "isTrialPeriod": false,
      "isInIntroOfferPeriod": false,
      "originalPurchaseDateMs": "1667173620000",
      "inAppOwnershipType": "PURCHASED",
      "productType": "",
      "status": 1
    }, {
      "productId": "com.magicv.AirBrush.sub.allAccess.1year.discount",
      "quantity": 1,
      "originalTransactionId": "1300000000948626",
      "transactionId": "1300000000948626",
      "purchaseDateMs": "1652307705000",
      "expiresDateMs": "1652566905000",
      "promotionalOfferId": "",
      "autoRenewStatus": false,
      "offerCodeRefName": "",
      "gracePeriodExpiresDateMs": "",
      "isTrialPeriod": true,
      "isInIntroOfferPeriod": false,
      "originalPurchaseDateMs": "1652307706000",
      "inAppOwnershipType": "PURCHASED",
      "productType": "",
      "status": 2
    }],
    "inApp": []
  },
  "message": "success",
  "update": ""
}
$done({body: JSON.stringify(obj)});
