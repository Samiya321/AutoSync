var obj = JSON.parse($response.body);

obj = 
{
  "code" : "0",
  "data" : {
    "filter_center" : {
      "update" : "9bac745b9fe4ef3147f4bb87cdcd612e",
      "list" : [

      ]
    },
    "top_banner" : {
      "subscribe_list" : [

      ],
      "update" : "228b214d00d58c0ed8808fae222a2b2b",
      "list" : [

      ]
    },
    "whats_new" : {
      "update" : "19182a0cbba1ae1a4821ba4d1b64a032",
      "list" : {

      }
    },
    "launch" : {
      "update" : "9bac745b9fe4ef3147f4bb87cdcd612e",
      "list" : [

      ]
    }
  },
  "request_id" : "663351aa8342f95b6897815651489344",
  "msg" : "success"
}
$done({body: JSON.stringify(obj)});