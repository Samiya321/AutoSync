var obj = JSON.parse($response.body);

obj = 

{
  "data": {
    "errorCode": 0,
    "sandbox": 0,
    "isTrialPeriod": 0,
    "purchaseTime": 1668292802,
    "expireTime": 4102526763,
    "appleExpireTime": 4102526763,
    "originalTransactionId": "300001272922206",
    "productId": "VIP_yearly_29.99",
    "appleVip": 1,
    "operationVip": 1,
    "giftVip": 1
  },
  "status": 200,
  "message": "ok",
  "serverTime": 1668292833.0958,
  "exetime": "1668292832059-1668292833095"
}
$done({body: JSON.stringify(obj)});