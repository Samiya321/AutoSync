var obj = JSON.parse($response.body);

obj = 

{
  "code" : 0,
  "data" : {
    "remoteTime" : 1667342949
  },
  "message" : "success",
  "update" : ""
}
$done({body: JSON.stringify(obj)});