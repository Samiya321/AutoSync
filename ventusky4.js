var obj = JSON.parse($response.body);

obj =

{
  "timestamp" : 1662085538,
  "time" : "2022-09-02 02:25:38",
  "version" : "paid"
}
$done({body: JSON.stringify(obj)});