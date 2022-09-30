var obj = JSON.parse($response.body);

obj = 

{
  "data": {
    "results": {
      "id": "6dc82710-9799-4d7a-86c9-ea336d628b70",
      "user_id": "KCH-4E7D2504-84D0-4565-976C-7A4271C8F4F6",
      "locale": "es_ES",
      "created_at": "2022-08-07T03:30:30.817Z",
      "currency": {
        "id": "d0cb35d7-7fa4-4a69-866a-539ea241718b",
        "code": "EUR",
        "country_code": "ES"
      },
      "subscriptions": [{
        "id": "300bb1f3-31f1-43eb-b947-fe0acd877370",
        "autorenew_enabled": true,
        "in_retry_billing": false,
        "expires_at": "2023-08-10T03:31:37.000Z",
        "cancelled_at": null,
        "retries_count": 0,
        "started_at": "2022-08-07T03:31:38.000Z",
        "unit": "day",
        "units_count": 997,
        "next_check_at": "2122-09-30T23:37:34.580Z",
        "product_id": "com.aiarlabs.prequel.subscription.weekly",
        "introductory_activated": true,
        "kind": "autorenewable",
        "platform": "ios",
        "environment": "production",
        "local": false,
        "status": "trial",
        "group_id": "e9359adb"
      }],
      "devices": []
    },
    "meta": null
  },
  "errors": null
}
$done({body: JSON.stringify(obj)});