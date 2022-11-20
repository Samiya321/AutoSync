var obj = JSON.parse($response.body);

obj = 
{
  "mobileProfileSpecVersion": "1.0",
  "mobileProfile": {
    "id": "37baba35-0565-43e5-8df6-0292f14827ac",
    "previousProfileId": "5d53ad7c-474b-460f-b004-d3bf070a6d89",
    "serverId": "lcs-mobile-cops",
    "profileStatus": "PROFILE_AVAILABLE",
    "appLicenseMode": "FREEMIUM",
    "legacyProfile": "{\"licenseId\":\"TEMP_LICENSE_PROD\",\"licenseType\":3,\"licenseVersion\":\"1.0\",\"effectiveEndTimestamp\":1965876127771,\"graceTime\":0,\"licensedFeatures\":[],\"enigmaData\":{\"productId\":598,\"serialKey\":\"719594172484074650698776\",\"clearSerialKey\":\"90970938077827684226\",\"locale\":\"ALL\",\"associatedLocales\":\"ALL\",\"platform\":0,\"isk\":5984006,\"customerId\":0,\"deliveryMethod\":3,\"pc\":true,\"rb\":true}}",
    "relationshipProfile": "[{\"profileGenerationTimestamp\":1665789728079,\"licenseId\":\"TEMP_LICENSE_PROD\",\"licenseExpiryTimestamp\":4665876127771,\"appEntitlementStatus\":\"SUBSCRIPTION\",\"activationType\":\"NAMED_USER\",\"billingStatus\":\"NORMAL\",\"usedForLegacyProfile\":true,\"licenseExpiryWarningControl\":{\"warningStartTimestamp\":3665271327771,\"warningInterval\":0}}]",
    "userProfile": "{\"userId\":\"313648DC507D03FB0A490D45@AdobeID\",\"firstName\":\"Carlos\",\"lastName\":\"Rodriguez%20Feijo\",\"email\":\"el_zari@hotmail.com\",\"countryCode\":\"ES\",\"displayName\":\"Carlos%20Rodriguez%20Feijo\",\"accountType\":\"type1\",\"authId\":\"313648DC507D03FB0A490D45@AdobeID\"}",
    "additionalLegacyProfiles": "{}",
    "appProfile": "{}",
    "controlProfile": {
      "cacheRefreshControl": {
        "appRefreshInterval": 87480000
      }
    }
  },
  "workflow": null
}
$done({body: JSON.stringify(obj)});