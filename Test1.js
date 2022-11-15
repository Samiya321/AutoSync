var obj = JSON.parse($response.body);

obj = 

{
  "message" : "success",
  "data" : {
    "needSubmitProductInfo" : 1,
    "appUserId" : "2572224876",
    "server" : ""
  },
  "code" : 0
}
$done({body: JSON.stringify(obj)});