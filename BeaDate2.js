let body = $request.body;

body = body.replace(/&timeStamp=\d+/&timeStamp=1667791591);

console.log(body)

$done({body});