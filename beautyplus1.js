var obj = JSON.parse($response.body);

var timesp = obj.timestamp;

obj = {"status":0,"subStatus":1,"vip_expires_date_ms":"4097881021000","vip_product_id":"com.commsource.beautyplus.subscription.1year.25discount.new.users.1205testA","timestamp":1571765082000};

obj.timestamp = timesp;

$done({body: JSON.stringify(obj)});
