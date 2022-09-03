var obj = JSON.parse($response.body);

obj =
{
  "status": "success",
  "reason": "ok",
  "data": {
    "package_ids": ["com.picsart.studio.lifetime_v4", "Universe3MonthsFree_monthly_1625674568053", "com.zeptolab.ctrbonus.superpower1"]
  }
}
$done({body: JSON.stringify(obj)});