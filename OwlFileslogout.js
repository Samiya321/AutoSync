var obj = JSON.parse($response.body);

obj = 

{
  "externalUid" : "",
  "uid" : 11114,
  "memberLevel" : 2,
  "succ" : true,
  "errorMessage" : "",
  "email" : "",
  "expireAt" : 4097006564000,
  "errorCode" : 0
}
$done({body: JSON.stringify(obj)});