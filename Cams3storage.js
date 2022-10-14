var obj = JSON.parse($response.body);

obj =

{
  "storage": "68246690\/28366563840"
}

$done({body: JSON.stringify(obj)});