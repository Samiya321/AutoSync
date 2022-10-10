var obj = JSON.parse($response.body);

obj = 

{
  "userId": "313648DC507D03FB0A490D45@AdobeID",
  "countryCode": "ES",
  "emailVerified": true,
  "displayName": "Carlos Rodriguez Feijo",
  "phoneNumber": null,
  "email": "el_zari@hotmail.com",
  "name": "Carlos Rodriguez Feijo",
  "utcOffset": "null",
  "isEnterprise": false,
  "licenseStatus": "UNKNOWN",
  "endpoints": [{
    "id": "00000000-0000-0000-0000-000000000000",
    "etag": "\"1111111111111\"",
    "status": "ONLINE",
    "private": false,
    "name": "My Files",
    "description": "Public Cloud",
    "iconUrl": "https://color.adobe.com/rss/png/generateThemePng.cfm?themeid=5642630",
    "region": "eu-west-1",
    "features": {
      "assets": {
        "view": {
          "uri": "https://assets.adobe.com"
        },
        "storage": {
          "uri": "https://cc-api-storage.adobe.io"
        }
      },
      "files": {
        "sync": {
          "uri": "https://scss.adobesc.com"
        },
        "view": {
          "uri": "https://assets.adobe.com"
        },
        "storage": {
          "uri": "https://cc-api-storage.adobe.io"
        }
      },
      "imageservices": {
        "service": {
          "uri": "https://cc-api-image.adobe.io"
        }
      },
      "libraries": {
        "view": {
          "uri": "https://assets.adobe.com"
        },
        "storage": {
          "uri": "https://cc-api-storage.adobe.io"
        }
      }
    },
    "parameters": {
      "quota": true,
      "jump": true
    }
  }],
  "first_name": "Carlos",
  "last_name": "Rodriguez Feijo",
  "preferred_languages": ["es-es"],
  "services": {
    "preview": {
      "entitled": true,
      "allow_private_endpoint": false
    },
    "image": {
      "entitled": true,
      "allow_private_endpoint": true
    },
    "sync_settings": {
      "entitled": true,
      "allow_private_endpoint": false
    },
    "sync_metadata": {
      "entitled": true,
      "allow_private_endpoint": false
    },
    "phonegap_build": {
      "entitled": false,
      "allow_private_endpoint": false
    },
    "color": {
      "entitled": true,
      "allow_private_endpoint": false
    },
    "edge_inspect": {
      "entitled": true,
      "allow_private_endpoint": false
    },
    "libraries": {
      "entitled": true,
      "allow_private_endpoint": true
    },
    "storage": {
      "entitled": true,
      "allow_private_endpoint": true
    },
    "project_1324": {
      "entitled": false,
      "allow_private_endpoint": false
    },
    "design_assets": {
      "entitled": true,
      "allow_private_endpoint": false
    },
    "extract": {
      "entitled": true,
      "allow_private_endpoint": false
    },
    "file_sync": {
      "entitled": true,
      "allow_private_endpoint": true
    },
    "spark": {
      "entitled": true,
      "allow_private_endpoint": false,
      "service_level": "FREE_BASIC"
    },
    "portfolio": {
      "entitled": false,
      "allow_private_endpoint": false
    },
    "rush_cc": {
      "entitled": true,
      "allow_private_endpoint": true,
      "service_level": "FREE_BASIC"
    },
    "collaboration": {
      "entitled": true,
      "allow_private_endpoint": true
    },
    "behance": {
      "entitled": true,
      "allow_private_endpoint": false,
      "service_level": "FREE_BASIC"
    },
    "typekit": {
      "entitled": true,
      "allow_private_endpoint": false,
      "service_level": "FREE_BASIC"
    },
    "stock": {
      "entitled": true,
      "allow_private_endpoint": true,
      "service_level": "FREE_BASIC"
    },
    "lightroom": {
      "entitled": true,
      "allow_private_endpoint": false
    },
    "story": {
      "entitled": false,
      "allow_private_endpoint": false
    }
  },
  "allow_mobile": true,
  "public_cloud": true,
  "private_cloud": false,
  "devices": []
}
$done({body: JSON.stringify(obj)});