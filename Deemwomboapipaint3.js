var obj = JSON.parse($response.body);
obj['is_premium'] = true,
obj['expires_on'] = "2100-11-29T20:18:34",
$done({ body: JSON.stringify(obj) });
