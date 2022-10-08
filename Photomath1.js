var obj = JSON.parse($response.body);

obj = 

{
  "status": "ok",
  "content": {
    "userId": "61a994b2c843a22fa5ab1d08",
    "email": "el_zari@hotmail.com",
    "name": "Federico Munoz Fernandez",
    "locale": "es",
    "iam": "Student",
    "emailConsent": true,
    "pushConsent": true,
    "age": 25,
    "imageUrl": "http://graph.facebook.com/10224360548585433/picture",
    "pushToken": "f1y7LUi7M00Uo7SJXLonp-:APA91bFmZSHBmEEDV1I4t4ylyT7isyveqCO1e6id_DmLT67QG_rjeSSYf8_Jecm-gdYHVkxF6IPpwepei59M5ZtMKpFdhFfpmBxGDL0t78-eVlhZyce-SRZjsgkKWrxvA5EX5N60y6tT",
    "divisionType": "DIV_RU",
    "multiplicationType": "MUL_US",
    "decimalSeparator": "comma",
    "country": "ES",
    "type": "user",
    "provider": "facebook",
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MWE5OTRiMmM4NDNhMjJmYTVhYjFkMDgiLCJhdWQiOiJmYWNlYm9vayIsIm5iZiI6MTY2NTIxMTM4MCwic2NvcGUiOlsiZnJlZTpzb2x1dGlvbiIsInBhaWQ6cmVzdWx0IiwidHJpYWw6cmVzdWx0Iiwid2lwOmJhc2ljIl0sImlzcyI6Imh0dHBzOlwvXC9sYXBpLnBob3RvbWF0aC5uZXRcL3Y0Iiwicm9sZXNLZXkiOiJzY29wZSIsImV4cCI6MTY2NTgxNjE4MCwiaWF0IjoxNjY1MjExMzgwfQ.Vg3YEkQvCfLrjSNWTg1jngpTeY5Y3ilA2eI1ci5Mir4",
    "refreshToken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MWE5OTRiMmM4NDNhMjJmYTVhYjFkMDgiLCJhdWQiOiJmYWNlYm9vayIsIm5iZiI6MTY2NTIxMTM4MCwic2NvcGUiOlsicmVmcmVzaCJdLCJpc3MiOiJodHRwczpcL1wvbGFwaS5waG90b21hdGgubmV0XC92NCIsInJvbGVzS2V5Ijoic2NvcGUiLCJleHAiOjE2ODA3NjMzODAsImlhdCI6MTY2NTIxMTM4MH0.kUqmb58VkMA2KnPKfiJRdRj0DU_veCnUTgIQ1JmPs7I",
    "scope": ["free:solution", "paid:result", "trial:result", "wip:basic"],
    "created": "2021-12-03T03:53:22.482Z",
    "updated": "2022-10-08T06:42:57.025Z",
    "confirmed": "2021-12-03T03:53:22.482Z",
    "loggedIn": "2022-10-08T06:42:56.809Z",
    "providerIds": ["facebook:1:a7995bd30a5adcafad2f62e661af59217120de1ebfa30a02c3c335c70b1311ef"],
    "status": "active",
    "tier": {
      "level": "basic"
    },
    "region": "AN",
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
    "region": "AN",
    "country": "ES"
  }
}
$done({body: JSON.stringify(obj)});