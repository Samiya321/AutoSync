var obj = JSON.parse($response.body);

obj =  

{
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 545993260,
    "app_item_id": 545993260,
    "bundle_id": "de.wetteronline.WetterApp",
    "application_version": "208228",
    "download_id": 501406463825958018,
    "version_external_identifier": 851928611,
    "receipt_creation_date": "2022-09-14 23:39:44 Etc/GMT",
    "receipt_creation_date_ms": "1663198784000",
    "receipt_creation_date_pst": "2022-09-14 16:39:44 America/Los_Angeles",
    "request_date": "2022-09-14 23:40:23 Etc/GMT",
    "request_date_ms": "1663198823285",
    "request_date_pst": "2022-09-14 16:40:23 America/Los_Angeles",
    "original_purchase_date": "2022-05-16 23:45:35 Etc/GMT",
    "original_purchase_date_ms": "1652744735000",
    "original_purchase_date_pst": "2022-05-16 16:45:35 America/Los_Angeles",
    "original_application_version": "176229",
    "in_app": [{
      "quantity": "1",
      "product_id": "de.wetteronline.wetapp_std.sub.premium.one_month",
      "transaction_id": "300001117684330",
      "original_transaction_id": "300001117684330",
      "purchase_date": "2022-05-16 23:54:24 Etc/GMT",
      "purchase_date_ms": "1652745264000",
      "purchase_date_pst": "2022-05-16 16:54:24 America/Los_Angeles",
      "original_purchase_date": "2022-05-16 23:54:25 Etc/GMT",
      "original_purchase_date_ms": "1652745265000",
      "original_purchase_date_pst": "2022-05-16 16:54:25 America/Los_Angeles",
      "expires_date": "2099-05-30 23:54:24 Etc/GMT",
      "expires_date_ms": "4083868011000",
      "expires_date_pst": "2099-05-30 16:54:24 America/Los_Angeles",
      "web_order_line_item_id": "300000500018488",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "de.wetteronline.wetapp_std.sub.premium.one_month",
    "transaction_id": "300001117684330",
    "original_transaction_id": "300001117684330",
    "purchase_date": "2022-05-16 23:54:24 Etc/GMT",
    "purchase_date_ms": "1652745264000",
    "purchase_date_pst": "2022-05-16 16:54:24 America/Los_Angeles",
    "original_purchase_date": "2022-05-16 23:54:25 Etc/GMT",
    "original_purchase_date_ms": "1652745265000",
    "original_purchase_date_pst": "2022-05-16 16:54:25 America/Los_Angeles",
    "expires_date": "2099-05-30 23:54:24 Etc/GMT",
    "expires_date_ms": "4083868011000",
    "expires_date_pst": "2099-05-30 16:54:24 America/Los_Angeles",
    "web_order_line_item_id": "300000500018488",
    "is_trial_period": "false",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20419890"
  }],
  "latest_receipt": "MIIUbQYJKoZIhvcNAQcCoIIUXjCCFFoCAQExCzAJBgUrDgMCGgUAMIIEDgYJKoZIhvcNAQcBoIID/wSCA/sxggP3MAoCARQCAQEEAgwAMAsCARkCAQEEAwIBAzAMAgEKAgEBBAQWAjQrMAwCAQ4CAQEEBAICAOcwDQIBCwIBAQQFAgMHEScwDQIBDQIBAQQFAgMCcWQwDgIBAQIBAQQGAgQgizIsMA4CAQkCAQEEBgIEUDI1NjAOAgEQAgEBBAYCBDLHZiMwEAIBAwIBAQQIDAYyMDgyMjgwEAIBEwIBAQQIDAYxNzYyMjkwEgIBDwIBAQQKAggG9VqFtG5UgjAUAgEAAgEBBAwMClByb2R1Y3Rpb24wGAIBBAIBAgQQ9CAxo+6xPMMEiE8E6CDQ8jAcAgEFAgEBBBTX2PUCb5dBEGZUlWH4EjFshTVQkDAeAgEIAgEBBBYWFDIwMjItMDktMTRUMjM6Mzk6NDRaMB4CAQwCAQEEFhYUMjAyMi0wOS0xNFQyMzo0MDoyM1owHgIBEgIBAQQWFhQyMDIyLTA1LTE2VDIzOjQ1OjM1WjAjAgECAgEBBBsMGWRlLndldHRlcm9ubGluZS5XZXR0ZXJBcHAwUgIBBwIBAQRK/81uoQB1ybPH/1efgCXIkl08Z14YgGsIKIIyp6yZWHW7TdOm1HwVzJoBFEgW/KPQCV+Gb4+wucYRDrTv6dYooMV9R5j3DVk0dUYwYwIBBgIBAQRb+nNEbCyYyqAZSJUeMqsEH2tq0aF0zj0Pk8OWfzcAiYoN2FlsQD8HiSWbd6e0qBtJ24z5fXfHn6xXxlju4K0Av4QRS/O2E49Y5yqTsvL7/TDbMEZ/2cYc6ZP9pzCCAawCARECAQEEggGiMYIBnjALAgIGrQIBAQQCDAAwCwICBr +EBBAIWADALAgIGsgIBAQQCDAAwCwICBrMCAQEEAgwAMAsCAga0AgEBBAIMADALAgIGtQIBAQQCDAAwCwICBrYCAQEEAgwAMAwCAgalAgEBBAMCAQEwDAICBqsCAQEEAwIBAzAMAgIGsQIBAQQDAgEBMAwCAga3AgEBBAMCAQAwDAICBroCAQEEAwIBADAPAgIGrgIBAQQGAgRN+s2qMBICAgavAgEBBAkCBwEQ2U88bTgwGgICBqcCAQEEEQwPMzAwMDAxMTE3Njg0MzMwMBoCAgapAgEBBBEMDzMwMDAwMTExNzY4NDMzMDAfAgIGqAIBAQQWFhQyMDIyLTA1LTE2VDIzOjU0OjI0WjAfAgIGqgIBAQQWFhQyMDIyLTA1LTE2VDIzOjU0OjI1WjAfAgIGrAIBAQQWFhQyMDIyLTA1LTMwVDIzOjU0OjI0WjA7AgIGpgIBAQQyDDBkZS53ZXR0ZXJvbmxpbmUud2V0YXBwX3N0ZC5zdWIucHJlbWl1bS5vbmVfbW9udGiggg5lMIIFfDCCBGSg-0+IBAgIIDutXh+eeCY0wDQYJKoZIhvcNAQEFBQAwgZYxCzAJBgNVBAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMSwwKgYDVQQLDCNBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkwHhcNMTUxMTEzMDIxNTA5WhcNMjMwMjA3MjE0ODQ3WjCBiTE3MDUGA1UEAwwuTWFjIEFwcCBTdG9yZSBhbmQgaVR1bmVzIFN0b3JlIFJlY2VpcHQgU2lnbmluZzEsMCoGA1UECwwjQXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMxEzARBgNVBAoMCkFwcGxlIEluYy4xCzAJBgNVBAYTAlVTMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApc+B/SWigVvWh+0j2jMcjuIjwKXEJss9xp/sSg1Vhv+kAteXyjlUbX1/slQYncQsUnGOZHuCzom6SdYI5bSIcc8/W0YuxsQduAOpWKIEPiF41du30I4SjYNMWypoN5PC8r0exNKhDEpYUqsS4+3dH5gVkDUtwswSyo1IgfdYeFRr6IwxNh9KBgxHVPM3kLiykol9X6SFSuHAnOC6pLuCl2P0K5PB/T5vysH1PKmPUhrAJQp2Dt7+mf7/wmv1W16sc1FJCFaJzEOQzI6BAtCgl7ZcsaFpaYeQEGgmJjm4HRBzsApdxXPQ33Y72C3ZiB7j7AfP4o7Q0/omVYHv4gNJIwIDAQABo4IB1zCCAdMwPwYIKwYBBQUHAQEEMzAxMC8GCCsGAQUFBzABhiNodHRwOi8vb2NzcC5hcHBsZS5jb20vb2NzcDAzLXd3ZHIwNDAdBgNVHQ4EFgQUkaSc/MR2t5+givRN9Y82Xe0rBIUwDAYDVR0TAQH/BAIwADAfBgNVHSMEGDAWgBSIJxcJqbYYYIvs67r2R1nFUlSjtzCCAR4GA1UdI-H+IBFTCCAREwggENBgoqhkiG92NkBQYBMIH+MIHDBggrBgEFBQcCAjCBtgyBs1JlbGlhbmNlIG9uIHRoaXMgY2VydGlmaWNhdGUgYnkgYW55IHBhcnR5IGFzc3VtZXMgYWNjZXB0YW5jZSBvZiB0aGUgdGhlbiBhcHBsaWNhYmxlIHN0YW5kYXJkIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHVzZSwgY2VydGlmaWNhdGUgcG9saWN5IGFuZCBjZXJ0aWZpY2F0aW9uIHByYWN0aWNlIHN0YXRlbWVudHMuMDYGCCsGAQUFBwIBFipodHRwOi8vd3d3LmFwcGxlLmNvbS9jZXJ0aWZpY2F0ZWF1dGhvcml0eS8wDgYDVR0PAQH/BAQDAgeAMBAGCiqGSIb3Y2QGCwEEAgUAMA0GCSqGSIb3DQEBBQUA-8+IBAQANphvTLj3jWysHbkKWbNPojEMwgl/gXNGNvr0PvRr8JZLbjIXDgFnf4+LXLgUUrA3btrj+/DUufMutF2uOfx/kd7mxZ5W0E16mGYZ2+FogledjjA9z/Ojtxh+umfhlSFyg4Cg6wBA3LbmgBDkfc7nIBf3y3n8aKipuKwH8oCBc2et9J6Yz+PWY4L5E27FMZ/xuCk/J4gao0pfzp45rUaJahHVl0RYEYuPBX/UIqc9o2ZIAycGMs/iNAGS6WGDAfK+PdcppuVsq1h1obphC9UynNxmbzDscehlD86Ntv0hg`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-H+IBCDCCAQQwggEA`+kqhkiG92NkBQEwgfIwKgYIKwYBBQUHAgEWHmh0dHBzOi8vd3d3LmFwcGxlLmNvbS9hcHBsZWNhLzCBwwYIKwYBBQUHAgIwgbYagbNSZWxpYW5jZSBvbiB0aGlzIGNlcnRpZmljYXRlIGJ5IGFueSBwYXJ0eSBhc3N1bWVzIGFjY2VwdGFuY2Ugb2YgdGhlIHRoZW4gYXBwbGljYWJsZSBzdGFuZGFyZCB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB1c2UsIGNlcnRpZmljYXRlIHBvbGljeSBhbmQgY2VydGlmaWNhdGlvbiBwcmFjdGljZSBzdGF0ZW1lbnRzLjANBgkqhkiG9w0BAQUFAAOCAQEAXDaZTC14t+2Mm9zzd5vydtJ3ME/BH4WDhRuZPUc38qmbQI4s1LGQEti+9HOb7tJkD8t5TzTYoj75eP9ryAfsfTmDi1Mg0zjEsb+aTwpr/yv8WacFCXwXQFYRHnTTt4sjO0ej1W8k4uvRt3DfD0XhJ8rxbXjt57UXF6jcfiI1yiXV2Q/Wa9SiJCMR96Gsj3OBYMYbWwkvkrL4REjwYDieFfU9JmcgijNq9w2Cz97roy/5U2pbZMBjM3f3OgcsVuvaDyEO2rpzGU+12TZ/wYdV2aeZuTJC+9jVcZ5+oVK3G72TQiQSKscPHbZNnF5jyEuAF1CqitXa5PzQCQc3sHV1ITGCAcswggHHAgEBMIGjMIGWMQswCQYDVQQGEwJVUzETMBEGA1UECgwKQXBwbGUgSW5jLjEsMCoGA1UECwwjQXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMxRDBCBgNVBAMMO0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zIENlcnRpZmljYXRpb24gQXV0aG9yaXR5AggO61eH554JjTAJBgUrDgMCGgUAMA0GCSqGSIb3DQEBAQUABIIBAEf0m5DL/JOH9ZTQzMpa5hBsDCh4nJrElr9NBIvcH2TTKiP01U4OqY2yCewrkYbq2qipyKhDhiONeN9pxzhdJgYdV7MnxF7wed9C2tvySULVGvZ0B2TWCS6va3IvwPrudh0IydhkO7H0+zpKhOrydnjncp58PZKXwB6OvgnBMUkJjzhJV6OjFtMbYmxwLKevCwbHLBBedD1eHP0xm/kzvsYDBS+pQiCice8eN9QcaoIa4oNoagiD0vlhID+2ufI9a9G9CSML83X93y15heEBrcYjOvLixjMcozfIcbftAhbUjIrBNYhBBeUlHNSLMw5ODEakWmuEjfK+9i+dE1n6T8gA==",
  "pending_renewal_info": [{
    "expiration_intent": "1",
    "auto_renew_product_id": "de.wetteronline.wetapp_std.sub.premium.one_month",
    "is_in_billing_retry_period": "0",
    "product_id": "de.wetteronline.wetapp_std.sub.premium.one_month",
    "original_transaction_id": "300001117684330",
    "auto_renew_status": "1"
  }],
  "status": 0
}
$done({body: JSON.stringify(obj)});