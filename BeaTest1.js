var obj = JSON.parse($response.body);

obj = 

{
  "timestamp" : 1667878811,
  "time" : "2022-11-08 13:05:10.094434289 +0900 JST m=+2609362.396263865",
  "region_code" : "ES"
}
$done({body: JSON.stringify(obj)});