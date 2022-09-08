var obj = JSON.parse($response.body);

obj =  

{
  "time": "2022-09-08 13:12:08.541213749 +0900 JST m=+675681.487537232",
  "timestamp": 1662610328
}

$done({body: JSON.stringify(obj)});