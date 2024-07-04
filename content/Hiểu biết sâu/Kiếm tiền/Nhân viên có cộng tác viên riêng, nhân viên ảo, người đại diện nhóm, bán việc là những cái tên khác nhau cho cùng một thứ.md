---
share: true
created: 2023-09-05T16:17
updated: 2024-07-05T01:45
---
Gọi A là người nộp đơn xin việc vào một công ty và đậu phỏng vấn, và B là người không làm điều đó. Điều này khiến cho A là nhân viên của công ty còn B thì không.

Đầu tiên ta xét hai trường hợp sau:

| Trường hợp       | Người được công ty biết đến | Người làm phần việc quan trọng | Người làm phần việc phụ | A được gọi là...                 |
| ---------------- | --------------------------- | ------------------------------ | ----------------------- | -------------------------------- |
| A trả công cho B | A                           | A                              | B                       | Nhân viên có cộng tác viên riêng |
| B trả công cho A | A                           | B                              | B                       | Nhân viên ảo                     |

Như vậy, sự khác biệt giữa nhân viên có cộng tác viên riêng và nhân viên ảo chỉ là ai là người làm phần việc quan trọng mà thôi. Mà nếu trong khối công việc không có phần việc nào đặc biệt quan trọng hơn các việc khác (khối lượng các tác vụ xêm xêm nhau), thì ranh giới này bị xoá mờ. Ta có:

```
nhân viên có cộng tác viên riêng ≈ nhân viên ảo 
```

Tiếp theo ta chỉ xét trường hợp A trả công cho B:

| Trường hợp       | Người được công ty biết đến | Người làm phần việc quan trọng | Người làm phần việc phụ | A được gọi là...                 |
| ---------------- | --------------------------- | ------------------------------ | ----------------------- | -------------------------------- |
| A trả công cho B | A                           | A                              | B                       | Nhân viên có cộng tác viên riêng |
| A trả công cho B | A                           | B                              | B                       | Bán việc                         |

Ta có:
```
nhân viên có cộng tác viên riêng ≈ bán việc
```

Cuối cùng, nếu không xem ai trả công cho ai, mà là cả hai đều cùng làm việc với nhau rồi lấy tiền về ăn chia, thì đây không còn là hệ 3 thực thể gồm công ty, A và B nữa, mà là hệ 2 thực thể gồm công ty và nhóm A+B. Lúc này A sẽ được gọi là người đại diện nhóm làm việc với công ty. Ta có:

| Trường hợp         | Người được công ty biết đến | Người làm phần việc quan trọng | Người làm phần việc phụ | A được gọi là...                 |
| ------------------ | --------------------------- | ------------------------------ | ----------------------- | -------------------------------- |
| A trả công cho B   | A                           | A                              | B                       | Nhân viên có cộng tác viên riêng |
| A, B tự thoả thuận | A                           | A, B tự thoả thuận             | A, B tự thoả thuận      | Người đại diện nhóm              |
Tức là:
```
nhân viên có cộng tác viên riêng ≈ người đại diện nhóm
```

Nếu tất cả những gì công ty cần là A làm xong việc, và nếu có vấn đề gì thì công ty lôi đầu A ra để xử lý chứ không phải là B, thì công ty không có lý do gì để xem một hình thức nào là gian lận cả.

Có thể tìm hiểu thêm về khái niệm *nét họ hàng giống nhau (family resemblance)* của Wittgenstein để hiểu được việc ranh giới giữa các khái niệm có thể bị lu mờ thế nào.