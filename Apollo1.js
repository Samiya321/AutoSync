var obj = JSON.parse($response.body);

obj = 

{
  "products" : [
    {
      "name" : "ultra",
      "status" : "LIFETIME"
    },
    {
      "name" : "pro",
      "status" : "LIFETIME"
    },
    {
      "name" : "community_icons",
      "status" : "NO"
    },
    {
      "name" : "spca",
      "status" : "NO"
    }
  ]
}
$done({body: JSON.stringify(obj)});