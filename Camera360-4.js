var obj = JSON.parse($response.body);

obj = 

{
  "status" : 200,
  "data" : {
    "sandbox" : 0,
    "purchaseTime" : 26350935,
    "isTrialPeriod" : 1,
    "originalTransactionId" : "300001272922206",
    "appleExpireTime" : 4668552002,
    "productId" : "VIP_yearly_29.99",
    "appleVip" : 1,
    "expireTime" : 4668552002,
    "giftVip" : 0,
    "operationVip" : 0,
    "errorCode" : 0
  },
  "message" : "ok",
  "exetime" : "1668295739242-1668295740310",
  "serverTime" : 1668295740.3102
}

$done({body: JSON.stringify(obj)});