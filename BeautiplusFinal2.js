var obj = JSON.parse($response.body);

obj=  {
  "status": 0,
  "vip_expires_date": 2024-06-06 19:57:41
};
$done({body: JSON.stringify(obj)});

