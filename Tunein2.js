var obj = JSON.parse($response.body);

obj =  

{
  "Header": {
    "Title": "Perfil"
  },
  "Item": {
    "GuideId": "u143025943",
    "Index": 0,
    "Type": "User",
    "ContainerType": "Undefined",
    "Image": "http://cdn-profiles.tunein.com/u143025943/images/logoq.jpg?t=637814388000000000",
    "AccessibilityTitle": "Federico Fernandez",
    "Title": "Federico Fernandez",
    "Subtitle": "elzari",
    "Actions": {
      "Follow": {
        "CanFollow": false,
        "IsFollowing": false,
        "FollowerCount": 0,
        "GuideId": "u143025943",
        "FollowText": "0 Favoritos"
      },
      "Profile": {
        "CanViewProfile": true,
        "IsMyProfile": true,
        "Url": "https://api.radiotime.com/profiles/u143025943/follows?viewModel=true&serial=C51D53E9-E1FD-47EA-93C2-8CAA80F1FB2C&partnerId=M2t9wS30&version=24.3&latlon=38.875526230717824%2c-6.979621037680047&device=phone&itemToken=BgUFAAAAAAAAAAAAAAAOF2eGCAEFDhdnhggOF2eGCA",
        "DestinationInfo": {
          "Id": "u143025943",
          "SeoName": "elzari",
          "RequestType": "Profile"
        }
      },
      "Share": {
        "CanShare": true,
        "ShareUrl": "http://tun.in/ujUqF7",
        "ShareText": "Echa un vistazo a Federico Fernandez en TuneIn",
        "CanShareOnFacebook": true,
        "CanShareOnTwitter": true
      }
    },
    "IsTitleVisible": true,
    "IsSubtitleVisible": true,
    "IsDescriptionVisible": true,
    "Pivots": {
      "Follows": {
        "DisplayName": "Siguiendo",
        "Count": 7,
        "CountText": "7",
        "Url": "https://api.radiotime.com/profiles/me/follows?serial=C51D53E9-E1FD-47EA-93C2-8CAA80F1FB2C&partnerId=M2t9wS30&version=24.3&latlon=38.875526230717824%2c-6.979621037680047&device=phone&itemToken=BgUFAAAAAAAAAAAAAAAOF2eGCAEFDhdnhggOF2eGCA",
        "RequiresAuth": false
      },
      "FollowedBy": {
        "DisplayName": "Seguidores",
        "Count": 0,
        "CountText": "0",
        "Url": "https://api.radiotime.com/profiles/me/followedby?serial=C51D53E9-E1FD-47EA-93C2-8CAA80F1FB2C&partnerId=M2t9wS30&version=24.3&latlon=38.875526230717824%2c-6.979621037680047&device=phone&itemToken=BgUFAAAAAAAAAAAAAAAOF2eGCAEFDhdnhggOF2eGCA",
        "RequiresAuth": false
      }
    },
    "Behaviors": {
      "Default": {
        "ActionName": "Profile"
      }
    },
    "Properties": {
      "UserInfo": {
        "Username": "elzari",
        "Email": "el_zari@hotmail.com",
        "IsOnboarded": true,
        "SubscriptionStatus": "Active",
        "SubscriptionExpiresOn": "2022-11-06T04:13:52",
        "SubscriptionProviderId": 3,
        "SubscriptionProviderName": "apple.free",
        "SubscriptionKey": "300000854605304",
        "SubscriptionAccessRestricted": false,
        "IsRegisteredUser": true,
        "IsVerifiedUser": false
      },
      "Profile": {
        "IsProfileVerified": false,
        "IsFollowingListPublic": false
      },
      "Logo": {
        "IsCustom": true
      },
      "SEOInfo": {
        "GuideId": "u143025943",
        "Title": "elzari",
        "Path": "radio"
      }
    },
    "Context": {
      "Token": "BgUFAAAAAAAAAAAAAAAOF2eGCAEFDhdnhggOF2eGCA"
    }
  },
  "Metadata": {
    "Properties": {
      "Ads": {
        "AdEligible": false
      }
    }
  }
}
$done({body: JSON.stringify(obj)});