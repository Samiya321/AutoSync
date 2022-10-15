var obj = JSON.parse($response.body);

obj = 

{
  "success": true,
  "data": {
    "user_id": "smallpdf|cae9c942-9ec8-4aa9-b9e3-ecf41fbf0e6a",
    "identities": [{
      "connection": "Username-Password-Authentication",
      "user_id": "cae9c942-9ec8-4aa9-b9e3-ecf41fbf0e6a",
      "provider": "smallpdf",
      "isSocial": false
    }],
    "email_verified": true,
    "created_at": "2022-10-15T20:21:26Z",
    "app_metadata": {
      "signedUp": true,
      "expirationDate": "2099-10-21",
      "app_store": {
        "plan_id": "desktop-monthly-usd",
        "original_transaction_id": "300001242948971",
        "country_geoip": "ES"
      },
      "free_trial_series_sent_at": "2022-10-15T20:26:44",
      "free_trial_series": "email_trial_original",
      "mobile_user": true,
      "subscription_platform": "ios",
      "free_trial_user": true,
      "trial_duration": "99999",
      "lock": "0001-01-01T00:00:00Z",
      "grace_period": 16,
      "disputes": {},
      "subscription": {
        "previous_platforms": {}
      }
    },
    "user_metadata": {
      "address": {},
      "language": "es"
    },
    "email": "fedemf35@gmail.com"
  }
}
$done({body: JSON.stringify(obj)});