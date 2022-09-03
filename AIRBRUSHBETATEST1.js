var obj = JSON.parse($response.body);
obj =

{
  "code": 0,
  "data": {
    "activityInfos": [{
      "abTesting": 0,
      "activityName": "defaultSKU",
      "activityType": 0,
      "description": "",
      "endTime": 1712309220,
      "id": 128,
      "materialInfos": [],
      "periodicFreeFeatureInfos": [],
      "productInfos": [{
        "activityProduct": {},
        "defaultProduct": {
          "productId": "com.magicv.AirBrush.sub.allAccess.1year.newgeo10.fullPrice",
          "promotionalOfferId": ""
        },
        "isSubscription": true,
        "productType": "year"
      }, {
        "activityProduct": {},
        "defaultProduct": {
          "productId": "com.magicv.AirBrush.sub.allAccess.1month.newgeo10.fullPrice",
          "promotionalOfferId": ""
        },
        "isSubscription": true,
        "productType": "month"
      }, {
        "activityProduct": {},
        "defaultProduct": {
          "productId": "com.magicv.AirBrush.unlockLifetime",
          "promotionalOfferId": ""
        },
        "isSubscription": false,
        "productType": "Lifetime"
      }],
      "startTime": 1599989220,
      "title": ""
    }]
  },
  "message": "success"
}
$done({body: JSON.stringify(obj)});