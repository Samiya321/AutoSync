var obj = JSON.parse($response.body);

obj = 

{
  "environment": "Production",
  "status": ok
}
$done({body: JSON.stringify(obj)});