var obj = JSON.parse($response.body); 
obj['will_renew_subscription'] = true; 
obj['is_subscribed_from_SM'] = true; 
$done({body: JSON.stringify(obj)});