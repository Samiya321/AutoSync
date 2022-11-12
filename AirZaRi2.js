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
      "promotionalOfferId": "",
      "offerCodeRefName": "",
      "isTrialPeriod": false,
     "isInIntroOfferPeriod": false,
      "originalPurchaseDateMs": "1667173620000",
      "inAppOwnershipType": "PURCHASED",
      "productType": "",
      "status": 1
    }],
    "inApp": []
  },
  "message": "success",
  "update": ""
}
$done({body: JSON.stringify(obj)});