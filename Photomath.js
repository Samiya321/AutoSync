var obj = JSON.parse($response.body);

obj = 

{
  "status": "ok",
  "content": {
    "userId": "6337d87d6b59c3342413b613",
    "iam": "Student",
    "pushConsent": true,
    "age": 48,
    "pushToken": "dI49r_1RqkbpgcpCYtLuNn:APA91bHMy6YRxUcpP3LrTbluNHEqZcu8fj0gsnOMJNZ02ahlviq6OLKiuvaXBP8aWUk1gKA3-Xr8XULO_54qag7Kw89AaF95wvHiZSgGavJ_PIV3MrJsyarcG7ZXAwglu_G_UBPQJqQO",
    "country": "ES",
    "type": "anonymous",
    "provider": "photomath",
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MzM3ZDg3ZDZiNTljMzM0MjQxM2I2MTMiLCJhdWQiOiJwaG90b21hdGgiLCJuYmYiOjE2NjQ2MDQ1NDcsInNjb3BlIjpbImZyZWU6c29sdXRpb24iLCJwYWlkOnNvbHV0aW9uIiwidHJpYWw6c29sdXRpb24iLCJ3aXA6YmFzaWMiXSwiaXNzIjoiaHR0cHM6XC9cL2xhcGkucGhvdG9tYXRoLm5ldFwvdjQiLCJyb2xlc0tleSI6InNjb3BlIiwiZXhwIjoxNjY1MjA5MzQ3LCJpYXQiOjE2NjQ2MDQ1NDd9.Lb47Hi7EZkqGNyJY9w0e0gOhOTZYq8UNLCypICC5ytA",
    "refreshToken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MzM3ZDg3ZDZiNTljMzM0MjQxM2I2MTMiLCJhdWQiOiJwaG90b21hdGgiLCJuYmYiOjE2NjQ2MDQ1NDcsInNjb3BlIjpbInJlZnJlc2giXSwiaXNzIjoiaHR0cHM6XC9cL2xhcGkucGhvdG9tYXRoLm5ldFwvdjQiLCJyb2xlc0tleSI6InNjb3BlIiwiZXhwIjoxNjgwMTU2NTQ3LCJpYXQiOjE2NjQ2MDQ1NDd9.Ju9pb72qg3P6dXKtuilOU9E1RKX5pYUaU79vsU00O7g",
    "scope": ["free:solution", "paid:solution", "trial:solution", "wip:basic"],
    "created": "2022-10-01T06:04:45.613Z",
    "updated": "2022-10-01T06:08:25.419Z",
    "providerIds": ["3D53EAD3-8E38-4787-AF3A-442A5350658C"],
    "status": "pending",
    "tier": {
      "level": "genius"
    },
    "region": "IB",
    "subscription": {
      "packageName": "com.microblink.PhotoMath",
      "productId": "com.microblink.PhotoMath.purchase.genius.one_year",
      "orderId": "300001235817060",
      "expiry": "2022-10-08T06:08:20.000Z",
      "started": "2022-10-01T06:08:20.000Z",
      "autoRenewing": true,
      "status": "active",
      "inGracePeriod": false,
      "isTrial": true
    },
    "binomialType": "NotationOne",
    "freeSundayVariant": "Disabled",
    "freeSunday": false,
    "subscriptionSharing": {
      "isOwner": false,
      "updatedAt": "1970-01-01T00:00:00Z",
      "isShareRequestValid": false
    }
  },
  "geo": {
    "age": 16,
    "eu": true,
    "americas": false,
    "region": "IB",
    "country": "ES"
  }
}
$done({body: JSON.stringify(obj)});