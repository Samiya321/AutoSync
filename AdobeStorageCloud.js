var obj = JSON.parse($response.body);

obj = 
{
 "storage_slop" : 0,
  "storage_quota" : 20,
  "storage_remaining" : 19.884239999999998,
  "storage_used" : 0.115761
}
$done({body: JSON.stringify(obj)});