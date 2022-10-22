var obj = JSON.parse($response.body);

obj = 

{
  "lifetime_membership": 1,
  "one_month_membership": 0,
  "version": "v1",
  "lifetime_subscription_threshold": 0,
  "accepted_referrals": 100,
  "referral_code": "MMK29",
  "referral_link": "https://flexinternal.page.link/FNhi2VMEKLyU9rk68"
}
$done({body: JSON.stringify(obj)});