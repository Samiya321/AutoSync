let obj = JSON.parse($response.body);
let url = $request.url;
var cons = "vipVerifyReceipt";
var cons1= "verifyReceipt";
if(url.indexOf(cons) != -1)
{
obj= {
    "autoRenewProductId": "premium_platinum_yearly",
  "isTrialPeriod": true,
  "endTime": 4081109070000,
  "platform": 2,
  "vipType": "premium_platinum_yearly",
  "duidDgest": "DIIe86X35",
  "autoRenewStatus": 1,
  "startTime": 1556241871000,
  "systemDate": 1556965441014
};
}
if(url.indexOf(cons1) != -1)
{
obj["list"][0]["expires_date"]= "2099-11-13 05:55:51";
}

$done({body: JSON.stringify(obj)});
