var obj = JSON.parse($response.body);

obj = 

{
  "accountRegistTime" : 0,
  "connectedWeixin" : false,
  "externalUid" : "",
  "uid" : 11114,
  "expireAt" : 2869770090000,
  "memberLevel" : 2,
  "connectedGoogle" : false,
  "dispName" : "fedemf38@icloud.com",
  "errorMessage" : "",
  "connectedApple" : true,
  "errorCode" : 0,
  "withoutPasswd" : true,
  "email" : "000806.9d1490b5e25140ef97dfdc85489600ec.2336",
  "succ" : true,
  "lastPasswordModifiedTime" : 1667086616470
}
$done({body: JSON.stringify(obj)});