let obj = JSON.parse($response.body);

obj = 

{
  "app_id" : "99761cd9-e27d-46b7-875a-e8e6e660a918",
  "net_type" : 0,
  "ios_bundle" : "com.abbyy.finescanner-pro",
  "timezone_id" : "Europe/Madrid",
  "tags" : {
    "fs.IsPremium" : 0,
    "AnalyticsEnabled" : 0,
    "com.abbyy.finescanner.premium.1year.promo" : false,
    "com.abbyy.textgrabber" : 0,
    "com.abbyy.bcrfree" : 0,
    "fs.BookScan_User" : 0,
    "com.abbyy.finescanner.premium.1year.promo.29Apr2020" : false,
    "com.abbyy.finescanner.bookscan" : false,
    "fs.OCRUser" : 0,
    "com.abbyy.finescanner" : 0,
    "fs.PagesLeft" : 999,
    "fs.PagesScanned" : 0,
    "com.abbyy.finescanner.forever.promo.1Jul2021" : true,
    "com.abbyy.bcr2" : 1,
    "com.abbyy.finescanner.forever.const.30Mar2020" : true,
    "com.abbyy.finescanner.forever.30Mar2020" : true,
    "isTestVersion" : 0,
    "com.abbyy.finescanner-pro" : 1,
    "com.abbyy.finescanner.premium.1year.new.30Mar2020" : false,
    "com.abbyy.finescanner.premium.1month.new.30Mar2020" : false,
    "com.abbyy.finescanner.premium.1month.promo.29Apr2020" : false
  },
  "device_type" : 0,
  "sdk_type" : "031101",
  "sdk" : "031101",
  "identifier" : "5f661b024fc9e425bd03997b9c6a7e1e6c6d0f30a15a55c6f980576fddf915da",
  "language" : "es-ES",
  "device_os" : "16.1.1",
  "game_version" : "15.5.2",
  "timezone" : 3600,
  "notification_types" : -18,
  "device_model" : "iPhone13,4",
  "carrier" : "Vodafone"
}
$done({body: JSON.stringify(obj)});