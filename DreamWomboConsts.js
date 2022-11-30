let obj = JSON.parse($response.body);
let url = $request.url;
var cons = "users";
var cons1= "sync";
if(url.indexOf(cons) != -1)
{
obj= {
  "is_premium": true,
  "expires_on": "2100-11-29T20:18:34"
};
}
if(url.indexOf(cons1) != -1)
{
obj["list"][0]["expires_on"]= "2100-11-29T20:18:34";
}

$done({body: JSON.stringify(obj)});
