var obj = JSON.parse($response.body);

obj = 

{
  "data": {
    "results": {
      "id": "28deb68c-ed9d-4882-8fd1-6475e28d3934",
      "user_id": "wHo2IJ9dOr",
      "locale": "en_ES",
      "created_at": "2022-11-05T15:30:07.902Z",
      "currency": {
        "id": "d0cb35d7-7fa4-4a69-866a-539ea241718b",
        "code": "EUR",
        "country_code": "ES"
      },
      "subscriptions": [{
        "id": "685da75c-14c9-4c90-a968-12876bde332c",
        "autorenew_enabled": true,
        "in_retry_billing": false,
        "expires_at": "2099-11-08T18:43:32.000Z",
        "cancelled_at": null,
        "retries_count": 0,
        "started_at": "2022-11-05T17:43:33.000Z",
        "unit": "year",
        "units_count": 1,
        "next_check_at": "2035-11-08T18:50:32.000Z",
        "product_id": "YearSubscription",
        "introductory_activated": true,
        "kind": "autorenewable",
        "platform": "ios",
        "environment": "production",
        "local": false,
        "status": "trial",
        "group_id": "5ba42db1"
      }],
      "devices": [],
      "swizzle_disabled": 1,
      "paywalls": [{
        "id": "215058f2",
        "json": null,
        "name": "No lifetime",
        "identifier": "DefaultPayWall",
        "default": true,
        "experiment_id": null,
        "experiment_name": null,
        "from_paywall": null,
        "variation_identifier": null,
        "variation_name": null,
        "items": [{
          "id": "fca33ee3",
          "name": "Product 1",
          "product_id": "MonthSubscription",
          "store": "app_store"
        }, {
          "id": "ac6a0482",
          "name": "Product 2",
          "product_id": "ThreeMonthsSubscription",
          "store": "app_store"
        }, {
          "id": "fba86a49",
          "name": "Product 3",
          "product_id": "YearSubscription",
          "store": "app_store"
        }]
      }, {
        "id": "e63f971e",
        "json": null,
        "name": "With lifetime",
        "identifier": "lifeTime",
        "default": false,
        "experiment_id": null,
        "experiment_name": null,
        "from_paywall": null,
        "variation_identifier": null,
        "variation_name": null,
        "items": [{
          "id": "fca33ee3",
          "name": "Product 1",
          "product_id": "MonthSubscription",
          "store": "app_store"
        }, {
          "id": "fba86a49",
          "name": "Product 3",
          "product_id": "YearSubscription",
          "store": "app_store"
        }, {
          "id": "7723c519",
          "name": "Lifetime access",
          "product_id": "LifetimePurchase",
          "store": "app_store"
        }]
      }, {
        "id": "9f690530",
        "json": null,
        "name": "All inn app product ",
        "identifier": "allProductsPayWall",
        "default": false,
        "experiment_id": null,
        "experiment_name": null,
        "from_paywall": null,
        "variation_identifier": null,
        "variation_name": null,
        "items": [{
          "id": "fca33ee3",
          "name": "Product 1",
          "product_id": "MonthSubscription",
          "store": "app_store"
        }, {
          "id": "ac6a0482",
          "name": "Product 2",
          "product_id": "ThreeMonthsSubscription",
          "store": "app_store"
        }, {
          "id": "fba86a49",
          "name": "Product 3",
          "product_id": "YearSubscription",
          "store": "app_store"
        }, {
          "id": "7723c519",
          "name": "Lifetime access",
          "product_id": "LifetimePurchase",
          "store": "app_store"
        }, {
          "id": "7e51e6da",
          "name": "LifetimePurchase2",
          "product_id": "LifetimePurchase2",
          "store": "app_store"
        }]
      }, {
        "id": "452405bd",
        "json": null,
        "name": "Ru lang paywall",
        "identifier": "ruLangPaywall",
        "default": false,
        "experiment_id": null,
        "experiment_name": null,
        "from_paywall": null,
        "variation_identifier": null,
        "variation_name": null,
        "items": [{
          "id": "fca33ee3",
          "name": "Product 1",
          "product_id": "MonthSubscription",
          "store": "app_store"
        }, {
          "id": "fba86a49",
          "name": "Product 3",
          "product_id": "YearSubscription",
          "store": "app_store"
        }, {
          "id": "7723c519",
          "name": "Lifetime access",
          "product_id": "LifetimePurchase",
          "store": "app_store"
        }]
      }, {
        "id": "a4f5c369",
        "json": null,
        "name": "Not ru lang paywall",
        "identifier": "notRuLangPaywall",
        "default": false,
        "experiment_id": null,
        "experiment_name": null,
        "from_paywall": null,
        "variation_identifier": null,
        "variation_name": null,
        "items": [{
          "id": "fca33ee3",
          "name": "Product 1",
          "product_id": "MonthSubscription",
          "store": "app_store"
        }, {
          "id": "fba86a49",
          "name": "Product 3",
          "product_id": "YearSubscription",
          "store": "app_store"
        }, {
          "id": "7e51e6da",
          "name": "LifetimePurchase2",
          "product_id": "LifetimePurchase2",
          "store": "app_store"
        }]
      }]
    },
    "meta": null
  },
  "errors": null
}
$done({body: JSON.stringify(obj)});