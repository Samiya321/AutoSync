const res = $response;
const req = $request;

if (res.body && req.method == "PUT") {
  $done({
    body: JSON.stringify({
      "app": "REFACE",
      "isBro": true,
      "hasWatermark": "false"
    }),
    status: sta,
    headers: res.headers
  });
} else {
  $done({});
}
