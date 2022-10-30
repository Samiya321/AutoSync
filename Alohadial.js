let obj = JSON.parse($response.body);

obj = 

{
  "tiles" : [

  ],
  "offset" : null
}
$done({body: JSON.stringify(obj)});