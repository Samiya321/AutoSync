var objc = JSON.parse($response.body);
objc = 

{
  "result": {
    "id": "ecae3452-afe4-4017-879f-cb66efa6cf41",
    "type": "i",
    "model": "iPhone13,4",
    "name": "",
    "key": "O1WgjFmVQubyU/PWF9wnSXM8iAtKZHjeCpfqHW9J5zw=",
    "account": {
      "id": "333f6718-831c-4001-a795-3aee6f8639ea",
      "account_type": "unlimited",
      "created": "2022-03-20T06:56:17.176487Z",
      "updated": "2022-09-21T23:32:11.514988658Z",
      "premium_data": 0,
      "quota": 0,
      "warp_plus": true,
      "referral_count": 0,
      "referral_renewal_countdown": 0,
      "role": "child",
      "license": "gl054sE8-67SZ3E4M-1R9J48qj"
    },
    "config": {
      "client_id": "8W8J",
      "peers": [{
        "public_key": "bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=",
        "endpoint": {
          "v4": "162.159.195.9:2408",
          "v6": "[2606:4700:d1::a29f:c009]:2408",
          "host": "engage.cloudflareclient.com:2408",
          "ports": [854, 859, 864, 878, 880, 890, 891, 894, 903, 908, 928, 934, 939, 942, 943, 945, 946, 955, 968, 987, 988, 1002, 1010, 1014, 1018, 1070, 1074, 1180, 1387, 1843, 2371, 2506, 3138, 3476, 3581, 3854, 4177, 4198, 4233, 5279, 5956, 7103, 7152, 7156, 7281, 7559, 8319, 8742, 8854, 8886]
        }
      }],
      "interface": {
        "addresses": {
          "v4": "172.16.0.2",
          "v6": "2606:4700:110:8d14:cd70:5f67:20b:7b8"
        }
      },
      "services": {
        "http_proxy": "172.16.0.1:2480"
      },
      "metrics": {
        "ping": 900,
        "report": 900
      }
    },
    "warp_enabled": false,
    "waitlist_enabled": false,
    "created": "2022-07-22T21:50:41.704489Z",
    "updated": "2022-09-21T23:26:53.92113Z",
    "tos": "2099-09-22T01:22:57.852Z",
    "place": 0,
    "locale": "es-ES",
    "enabled": true,
    "install_id": "",
    "fcm_token": ""
  },
  "success": true,
  "errors": [],
  "messages": []
}
$done({body: JSON.stringify(obj)});