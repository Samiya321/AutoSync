let obj = JSON.parse($response.body);

obj =

{
  "message" : "success",
  "data" : {
    "remote_time" : 1666237994
  },
  "code" : 0
}

$done({body: JSON.stringify(obj)});