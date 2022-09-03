var obj = JSON.parse($response.body);

obj = 

{
  "status": "ok",
  "version": "v2.0.0",
  "data": {
    "subscribed": true,
    "product": "",
    "subscriptionId": 0,
    "productId": 0,
    "selfRenewable": false,
    "status": "",
    "canEndSubscription": false,
    "endSubscriptionUrl": "",
    "type": "",
    "productRole": "",
    "orderType": "",
    "isUpgradable": false,
    "isUpgradableUrl": "",
    "canChangeCard": false,
    "changeCardUrl": "",
    "bonding": "escaparate-web"
  }
}
$done({body: JSON.stringify(obj)});