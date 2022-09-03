var obj = JSON.parse($response.body);

obj =

{
  "status": "success",
  "data": {
    "count": 3
  }
}
$done({body: JSON.stringify(obj)});