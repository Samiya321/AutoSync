var obj = JSON.parse($response.body);

obj = 

{
  "optimize_pdf_ops": {
    "remaining": -1
  },
  "combine_pdf_conversions": {
    "remaining": -1
  },
  "export_pdf_max_file_size": {
    "limit": 102400
  },
  "optimize_pdf_max_file_size": {
    "limit": 2097152
  },
  "organize_pdf_conversions": {
    "remaining": -1
  },
  "create_pdf_max_file_size": {
    "limit": 102400
  },
  "combine_pdf_documents": {
    "limit": 100
  },
  "split_pdf_max_split_points": {
    "limit": 20
  },
  "create_pdf_conversions": {
    "remaining": -1
  },
  "ocr_pdf_max_file_size": {
    "limit": 102400
  },
  "export_pdf_conversions": {
    "remaining": -1
  },
  "organize_pdf_max_file_size": {
    "limit": 102400
  },
  "edit_pdf_ops": {
    "remaining": -1
  },
  "combine_pdf_max_file_size": {
    "limit": 102400
  },
  "organize_pdf_documents": {
    "limit": 100
  },
  "ipp_create_pdf_conversions": {
    "remaining": 0
  },
  "ocr_pdf_conversions": {
    "remaining": -1
  },
  "split_pdf_conversions": {
    "remaining": -1
  },
  "password_encrypt_ops": {
    "remaining": -1
  },
  "password_encrypt_max_file_size": {
    "limit": 102400
  },
  "edit_pdf_max_file_size": {
    "limit": 102400
  },
  "split_pdf_max_file_size": {
    "limit": 1048576
  }
}
$done({body: JSON.stringify(obj)});