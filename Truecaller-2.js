var obj = JSON.parse($response.body);
obj =

{
  "tier": [{
    "id": "gold",
    "rank": 4,
    "product": [{
      "id": "renewable.premiumgold.annual",
      "sku": "renewable.premiumgold.annual",
      "contentType": "subscription",
      "productType": "GoldYearly",
      "paymentProvider": "Apple",
      "rank": 6,
      "clientProductMetadata": {
        "selectionRank": 5,
        "displayOrder": 5
      }
    }],
    "feature": [{
      "id": "no_ads",
      "rank": 1,
      "status": "Included"
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
  }]
}
$done({body: JSON.stringify(obj)});