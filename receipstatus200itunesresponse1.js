var obj = JSON.parse($response.body);

obj = 

{
  "environment": "Production",
  "status": 0
}
$done({body: JSON.stringify(obj)});