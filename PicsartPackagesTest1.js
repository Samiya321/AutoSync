var obj = JSON.parse($response.body);

obj =
{
  "status" : "success",
  "data" : {
    "package_ids" : [
      "com.picsart.studio.subscription_plus_yearly",

      "com.picsart.studio.lifetime_v4",
      "com.picsart.studio.subscription_plus_monthly",
      "com.zeptolab.ctrbonus.superpower1"
    ]
  },
  "reason" : "ok"
}
$done({body: JSON.stringify(obj)});