var obj = JSON.parse($response.body);

obj =

{
  "version": "paid",
  "time": "2022-09-02 03:45:19",
  "timestamp": 1662090319,
  "expire_timestamp": 0
}


$done({body: JSON.stringify(obj)});