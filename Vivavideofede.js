var obj = JSON.parse($response.body);
obj = 

{
  "autoRenewStatus" : 1,
  "originalTransactionId" : "300001040354135",
  "duidDgest" : "DIzjfUIvln",
  "hasIntroOfferProds" : [

  ],
  "iosDeviceProductVo" : {
    "newVipMonthly" : 3,
    "premiumVipWeekly" : 3,
    "premiumPlatinumQuarterly" : 3,
    "premiumGoldMonthly" : 3,
    "premiumPlatinumMonthly" : 3,
    "newVipYearly" : 3,
    "premiumVipYearly" : 3,
    "newVipWeekly" : 3,
    "nonOrganicVipMonthly" : 3,
    "premiumPlatinumHalfYearly" : 3,
    "nonOrganicVipWeekly" : 3,
    "premiumGoldYearly" : 3,
    "nonOrganicVipYearly" : 3,
    "premiumPlatinumYearly" : 2
  },
  "platform" : 3,
  "endTime" : 4073275762000,
  "systemDate" : 1657508792501,
  "productList" : [
    {
      "isRenew" : true,
      "vipType" : "premium_gold_yearly"
    },
    {
      "isRenew" : true,
      "vipType" : "premium_gold_yearly"
    }
  ],
  "hasFreedTrialProds" : [
    "premium_gold_yearly"
  ],
  "isTrialPeriod" : false,
  "transactionId" : "300001162730793",
  "startTime" : 1657441810000,
  "vipType" : "premium_gold_yearly",
  "sign" : "d61e1aa80648c37ed9cc02178ec19845"
}

$done({body: JSON.stringify(obj)});
