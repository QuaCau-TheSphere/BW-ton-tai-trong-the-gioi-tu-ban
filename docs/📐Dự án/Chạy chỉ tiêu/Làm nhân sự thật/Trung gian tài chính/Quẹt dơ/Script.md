---
share: true
created: 2023-09-05T16:17
<<<<<<<< HEAD:docs/📐 Dự án/Chạy chỉ tiêu cho nhân viên các công ty/Tài liệu/Script.md
updated: 2024-08-14T21:26
---
## Thêm số thứ tự vào các hình hàng loạt
Hữu ích cho việc phân biệt mã nào mình đã làm rồi, mã nào chưa
```PowerShell
$i=1; Get-ChildItem -file | ForEach-Object {
  $filename=$_.name
  $basename = $_.basename
  $output = "$basename$i.jpg"
  $output; 
  magick convert -pointsize 300 -fill red -draw "text 60,600 `"$i`"" "$filename" $output
  $i++
} 
```

![200](../../../assets/attachments/a.jpg) → ![200](../../../assets/attachments/a1.jpg)
========
updated: 2025-03-23T17:44
---
## Thêm số thứ tự vào các hình hàng loạt
Hữu ích cho việc phân biệt mã nào mình đã làm rồi, mã nào chưa
```PowerShell
$i=1; Get-ChildItem -file | ForEach-Object {
  $filename=$_.name
  $basename = $_.basename
  $output = "$basename$i.jpg"
  $output; 
  magick convert -pointsize 300 -fill red -draw "text 60,600 `"$i`"" "$filename" $output
  $i++
} 
```

![200](../../../../../assets/attachments/a.jpg) → ![200](../../../../../assets/attachments/a1.jpg)
>>>>>>>> c0d3b70881cf4ed62e5e2181c3211df89b86a3ac:docs/📐Dự án/Chạy chỉ tiêu/Làm nhân sự thật/Trung gian tài chính/Quẹt dơ/Script.md
