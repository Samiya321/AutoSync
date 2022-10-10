var obj = JSON.parse($response.body);

obj = 
{
  "error_code" : "ERR_ALREADY_ACTIVE_SUBSCRIPTION",
  "message" : "Already active subscription for this user"
}
$done({body: JSON.stringify(obj)});