---
share: true
created: 2023-09-05T16:17
updated: 2025-06-02T13:21
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
