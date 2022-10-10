var obj = JSON.parse($response.body);

obj = 

{
  "subscriptions": [{
    "subscription_name": "PDFPack",
    "subscription_level": "Plus",
    "subscription_state": "ACTIVE",
    "sub_ref": null,
    "biz_source": "",
    "billing_term": null
  }, {
    "subscription_name": "Review",
    "subscription_level": "Free",
    "subscription_state": "ACTIVE",
    "sub_ref": "18947E18C114B17444DA",
    "biz_source": "",
    "billing_term": null
  }]
}
$done({body: JSON.stringify(obj)});