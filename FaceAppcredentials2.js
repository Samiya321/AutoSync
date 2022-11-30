var obj = JSON.parse($response.body);

obj = 

{

  "subscription_apple" : {
    "subscription_exp" : 4131243523,
    "product_id" : "m"
  },
  "subscription_google" : null,
  "user_token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJkZXZpY2VfaWQiOiJFRTI0OUJFOS1DQkMzLTQ0QkItODRENi01RjhCQkZBMDdBNjEiLCJleHAiOjE2NTg3MzU2MTUsInN1YnNjcmlwdGlvbiI6eyJzdWJzY3JpcHRpb25fZXhwIjoxNjYwMDk4NDk0LCJjdXN0b21lcl9pZCI6ImlzNjIxODMzNCIsImluX2FwcF9pZCI6InByb19tb250aCIsInByb2R1Y3RfaWQiOiJtIn19.Il0jpnwe4tw4B6tnaFYwcurYBUiwHDT98RMXhnzAM35VhyvuWOgJnMjLg8SgorqM8szWx362Z0bh5T3JBYvAzg",
  "user_token_lifetime" : 86400,
  "user" : null
}

$done({body: JSON.stringify(obj)});