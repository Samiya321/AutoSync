let obj = JSON.parse($response.body);
let url = $request.url;
var cons = "users";
var cons1= "sync";
if(url.indexOf(cons) != -1)
{
obj= {
  "is_premium": true,
};
}
if(url.indexOf(cons1) != -1)
{
obj["list"][0]["expires_on"]= "2099-11-13 05:55:51";
}

$done({body: JSON.stringify(obj)});
