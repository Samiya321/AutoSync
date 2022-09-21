var obj = JSON.parse($response.body);

obj = 

{
  "code": 0,
  "message": "success",
  "data": {
    "taskId": 0,
    "ABTestCode": "",
    "distributeTime": 0,
    "validTerm": 0,
    "userPopupStatus": 0
  }
}
$done({body: JSON.stringify(obj)});