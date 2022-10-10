var obj = JSON.parse($response.body);

obj = 

{
  "mobileProfileSpecVersion": "1.0",
  "mobileProfile": {
    "id": "292ff5be-64de-443f-b53d-4954c459d567",
    "previousProfileId": "3045c567-8d3b-48e1-a165-609a4f6e576c",
    "serverId": "lcs-mobile-cops",
    "profileStatus": "PROFILE_AVAILABLE",
    "appLicenseMode": "FREEMIUM",
    "legacyProfile": "{\"licenseId\":\"TEMP_LICENSE_PROD\",\"licenseType\":3,\"licenseVersion\":\"1.0\",\"effectiveEndTimestamp\":1760055276000,\"graceTime\":0,\"licensedFeatures\":[],\"enigmaData\":{\"productId\":598,\"serialKey\":\"719594172484074650698776\",\"clearSerialKey\":\"90970938077827684226\",\"locale\":\"ALL\",\"associatedLocales\":\"ALL\",\"platform\":0,\"isk\":5984006,\"customerId\":0,\"deliveryMethod\":3,\"pc\":true,\"rb\":true}}",
    "relationshipProfile": "[{\"profileGenerationTimestamp\":1665360322969,\"licenseId\":\"TEMP_LICENSE_PROD\",\"licenseExpiryTimestamp\":1760055276000,\"appEntitlementStatus\":\"SUBSCRIPTION\",\"activationType\":\"NAMED_USER\",\"billingStatus\":\"NORMAL\",\"usedForLegacyProfile\":true,\"licenseExpiryWarningControl\":{\"warningStartTimestamp\":1759364076000,\"warningInterval\":0}}]",
    "userProfile": "{\"userId\":\"313648DC507D03FB0A490D45@AdobeID\",\"firstName\":\"Carlos\",\"lastName\":\"Rodriguez%20Feijo\",\"email\":\"el_zari@hotmail.com\",\"countryCode\":\"ES\",\"displayName\":\"Carlos%20Rodriguez%20Feijo\",\"accountType\":\"type1\",\"authId\":\"313648DC507D03FB0A490D45@AdobeID\"}",
    "additionalLegacyProfiles": "{}",
    "appProfile": "{}",
    "controlProfile": {
      "cacheRefreshControl": {
        "appRefreshInterval": 99999999
      }
    }
  },
  "workflow": null
}
$done({body: JSON.stringify(obj)});