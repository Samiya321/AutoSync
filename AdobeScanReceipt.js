var obj = JSON.parse($response.body);

obj = 

{
  "app_id": "com.adobe.scan.ios",
  "offer_groups": [{
    "offer_group_id": "20892743",
    "offer_group_name": "Scan Tier 1 Premium",
    "group_store_ref": null,
    "products": [{
      "product_id": "com.adobe.scan.premium999.1month",
      "level": "1",
      "free_trial_consumed": false,
      "intro_offer_consumed": false,
      "product_active": true,
      "purchase_info": null,
      "product_store_ref": null
    }, {
      "product_id": "com.adobe.scan.premium6999.trial.1yr",
      "level": "1",
      "free_trial_consumed": false,
      "intro_offer_consumed": false,
      "product_active": true,
      "purchase_info": null,
      "product_store_ref": null
    }]
  }, {
    "offer_group_id": "20892744",
    "offer_group_name": "Scan Tier 2-3 Premium",
    "group_store_ref": null,
    "products": [{
      "product_id": "com.adobe.scan.premium399.1month",
      "level": "1",
      "free_trial_consumed": false,
      "intro_offer_consumed": false,
      "product_active": true,
      "purchase_info": null,
      "product_store_ref": null
    }, {
      "product_id": "com.adobe.scan.premium2999.trial.1yr",
      "level": "1",
      "free_trial_consumed": false,
      "intro_offer_consumed": false,
      "product_active": true,
      "purchase_info": null,
      "product_store_ref": null
    }]
  }, {
    "offer_group_id": "20703502",
    "offer_group_name": "Scan Premium Subscription",
    "group_store_ref": null,
    "products": [{
      "product_id": "com.adobe.scan.premium999.trial.1month",
      "level": "1",
      "free_trial_consumed": true,
      "intro_offer_consumed": false,
      "product_active": true,
      "purchase_info": {
        "subscription_status": "Active",
        "purchase_date": "2021-09-12T02:16:42.000+00:00",
        "expiry_date": "2029-11-15T00:08:58.000+00:00"
      },
      "product_store_ref": null
    }]
  }, {
    "offer_group_id": "20389085",
    "offer_group_name": "Adobe PDF Pack Subscription",
    "group_store_ref": null,
    "products": [{
      "product_id": "com.adobe.scan.createpdfbundle.1month",
      "level": "2",
      "free_trial_consumed": false,
      "intro_offer_consumed": false,
      "product_active": true,
      "purchase_info": null,
      "product_store_ref": null
    }, {
      "product_id": "com.adobe.scan.createpdfbundle.1yr",
      "level": "1",
      "free_trial_consumed": false,
      "intro_offer_consumed": false,
      "product_active": true,
      "purchase_info": null,
      "product_store_ref": null
    }]
  }]
}
$done({body: JSON.stringify(obj)});