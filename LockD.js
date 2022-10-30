var obj = JSON.parse($response.body);

obj = 

{
  "success": true,
  "data": {
    "timestamp": 1667077372,
    "uid": "QON_9f0c1aa6bff842828c78350023f46bb4",
    "products": [{
      "id": "lockd_lt_999",
      "store_id": "lockd_lt_999",
      "type": 2,
      "duration": null
    }, {
      "id": "lockd_1y_2999",
      "store_id": "lockd_1y_2999",
      "type": 1,
      "duration": 4
    }, {
      "id": "lockd_3m_1499",
      "store_id": "lockd_3m_1499",
      "type": 1,
      "duration": 2
    }, {
      "id": "lockd_lt_2999",
      "store_id": "lockd_lt_2999",
      "type": 2,
      "duration": null
    }, {
      "id": "lockd_lt_1999",
      "store_id": "lockd_lt_1999",
      "type": 2,
      "duration": null
    }],
    "user_products": [{
      "id": "lockd_lt_1999",
      "store_id": "lockd_lt_1999",
      "type": 2,
      "duration": null
    }],
    "permissions": [{
      "id": "Premium",
      "active": 1,
      "renew_state": -1,
      "associated_product": "lockd_lt_1999",
      "started_timestamp": 1667077357,
      "expiration_timestamp": null,
      "current_period_type": null,
      "source": "appstore"
    }],
    "offerings": [{
      "id": "offering_a",
      "tag": 0,
      "products": [{
        "id": "lockd_3m_1499",
        "store_id": "lockd_3m_1499",
        "type": 1,
        "duration": 2
      }, {
        "id": "lockd_1y_2999",
        "store_id": "lockd_1y_2999",
        "type": 1,
        "duration": 4
      }, {
        "id": "lockd_lt_2999",
        "store_id": "lockd_lt_2999",
        "type": 2,
        "duration": null
      }]
    }, {
      "id": "offering_b",
      "tag": 0,
      "products": [{
        "id": "lockd_lt_1999",
        "store_id": "lockd_lt_1999",
        "type": 2,
        "duration": null
      }]
    }],
    "apple_extra": {
      "original_application_version": "18"
    },
    "products_permissions": {
      "lockd_lt_999": ["Premium"],
      "lockd_1y_2999": ["Premium"],
      "lockd_3m_1499": ["Premium"],
      "lockd_lt_2999": ["Premium"],
      "lockd_lt_1999": ["Premium"]
    }
  }
}
$done({body: JSON.stringify(obj)});