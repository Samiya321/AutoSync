var obj = JSON.parse($response.body);

obj =

{
  "version": "paid",
  "time": "2025-09-02 03:45:19",
  "timestamp": 1756784719,
  "expire_timestamp": 0,
"sig": 27883863
}

$done({body: JSON.stringify(obj)});