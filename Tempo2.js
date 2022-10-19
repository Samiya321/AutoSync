var obj = JSON.parse($response.body);

obj = 

{
  "code" : 200,
  "data" : {
    "hasIntroOfferProds" : [

    ],
    "list" : [
      {
        "startTime" : 1659655705000,
        "orderId" : "300001185193469",
        "isTrialPeriod" : false,
        "endTime" : 4089570097000,
        "productId" : "All_Tempo_Access_Yearly_sub",
        "productType" : 3,
        "orderStatus" : 1,
        "autoRenewStatus" : false,
        "originalOrderId" : "300001185193469",
        "sign" : "4816e1c7a66b4bc031f3354e81d08960"
      }
    ],
    "hasFreedTrialProds" : [
      "All_Tempo_Access_Yearly_sub"
    ],
    "systemDate" : 1666144965849,
    "hasPurchasedProds" : [
      "All_Tempo_Access_Yearly_sub"
    ]
  },
  "message" : "successful",
  "success" : true
}
$done({body: JSON.stringify(obj)});
