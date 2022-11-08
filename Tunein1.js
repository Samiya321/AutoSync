var obj = JSON.parse($response.body);

obj =  

{
  "data": {
    "user": {
      "userId": "u143025943",
      "userName": "elzari",
      "email": "el_zari@hotmail.com",
      "firstName": "Federico",
      "lastName": "Fernandez",
      "isOnboarded": true,
      "isRegistered": true,
      "subscriptions": {
        "edges": [{
          "node": {
            "expiresOn": "2099-11-06T04:13:52Z"
          }
        }, {
          "node": {
            "expiresOn": "2099-11-06T04:13:52Z"
          }
        }]
      }
    }
  }
}
$done({body: JSON.stringify(obj)});