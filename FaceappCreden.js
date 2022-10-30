var obj = JSON.parse($response.body);

obj = 

{
  "subscription_apple" : {
    "subscription_exp" : 1669788592,
    "product_id" : "1"
  },
  "subscription_google" : null,
  "user_token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJkZXZpY2VfaWQiOiI1NTA4RTlCMy04N0VELTQ2MDMtQjg4Qy05NEE3OTI3NkJCMjYiLCJleHAiOjE2NjcxOTMwNzcsInN1YnNjcmlwdGlvbiI6eyJzdWJzY3JpcHRpb25fZXhwIjoxNjY5Nzg4NTkyLCJjdXN0b21lcl9pZCI6ImlzNjIxODMzNCIsImluX2FwcF9pZCI6InByb19tb250aCIsInByb2R1Y3RfaWQiOiJtIn19.ZF-ks9FxJHzR43HR_Kadxozvwva_Ts6qk3EcZ3U6aIDwjBGBzOdfg0zgVdpBh815NgbBEXyIA_Sqqe1pHb_oOw",
  "user_token_lifetime" : 86400,
  "user" : null
}
$done({body: JSON.stringify(obj)});