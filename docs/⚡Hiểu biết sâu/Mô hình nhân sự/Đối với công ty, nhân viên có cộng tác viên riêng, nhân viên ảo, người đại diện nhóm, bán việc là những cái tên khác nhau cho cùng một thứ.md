---
share: true
created: 2023-09-05T16:17
updated: 2024-09-22T00:55
---
Gọi A là người nộp đơn xin việc vào một công ty và đậu phỏng vấn, và B là người không làm điều đó. Điều này khiến cho A là nhân viên của công ty còn B thì không.

Đầu tiên ta xét hai trường hợp sau:

| Trường hợp       | Người được công ty biết đến | Người làm phần việc quan trọng | Người làm phần việc phụ | A được gọi là…                 |
| ---------------- | --------------------------- | ------------------------------ | ----------------------- | -------------------------------- |
| A trả công cho B | A                           | A                              | B                       | Nhân viên có cộng tác viên riêng |
| B trả công cho A | A                           | B                              | B                       | Nhân viên ảo                     |

Như vậy, sự khác biệt giữa nhân viên có cộng tác viên riêng và nhân viên ảo chỉ là ai là người làm phần việc quan trọng mà thôi. Mà nếu trong khối công việc không có phần việc nào đặc biệt quan trọng hơn các việc khác (khối lượng các tác vụ xêm xêm nhau), thì ranh giới này bị xoá mờ. Ta có:

```
nhân viên có cộng tác viên riêng ≈ nhân viên ảo 
```

Tiếp theo ta chỉ xét trường hợp A trả công cho B:

| Trường hợp       | Người được công ty biết đến | Người làm phần việc quan trọng | Người làm phần việc phụ | A được gọi là…                 |
| ---------------- | --------------------------- | ------------------------------ | ----------------------- | -------------------------------- |
| A trả công cho B | A                           | A                              | B                       | Nhân viên có cộng tác viên riêng |
| A trả công cho B | A                           | B                              | B                       | Bán việc                         |

Ta có:
```
nhân viên có cộng tác viên riêng ≈ bán việc
```

Cuối cùng, nếu không xem ai trả công cho ai, mà là cả hai đều cùng làm việc với nhau rồi lấy tiền về ăn chia, thì đây không còn là hệ 3 thực thể gồm công ty, A và B nữa, mà là hệ 2 thực thể gồm công ty và nhóm A+B. Lúc này A sẽ được gọi là người đại diện nhóm làm việc với công ty. Ta có:

| Trường hợp         | Người được công ty biết đến | Người làm phần việc quan trọng | Người làm phần việc phụ | A được gọi là…                 |
| ------------------ | --------------------------- | ------------------------------ | ----------------------- | -------------------------------- |
| A trả công cho B   | A                           | A                              | B                       | Nhân viên có cộng tác viên riêng |
| A, B tự thoả thuận | A                           | A, B tự thoả thuận             | A, B tự thoả thuận      | Người đại diện nhóm              |
Tức là:
```
nhân viên có cộng tác viên riêng ≈ người đại diện nhóm
```

Từ tất cả những điều trên, nếu tất cả những gì công ty cần là A làm xong việc, và nếu có vấn đề gì thì người bị công ty lôi đầu ra để xử lý là A chứ không phải là B, thì đối với công ty hình thức nào cũng như nhau cả. Công ty không có lý do gì để xem một hình thức nào là gian lận còn những hình thức khác là hợp lệ.

Có thể tìm hiểu thêm về khái niệm *nét họ hàng giống nhau (family resemblance)* của Wittgenstein để hiểu được việc ranh giới giữa các khái niệm có thể bị lu mờ thế nào.

Xem thêm:: [Khác biệt giữa nhân viên, đại lý, cộng tác viên](./Kh%C3%A1c%20bi%E1%BB%87t%20gi%E1%BB%AFa%20nh%C3%A2n%20vi%C3%AAn,%20%C4%91%E1%BA%A1i%20l%C3%BD,%20c%E1%BB%99ng%20t%C3%A1c%20vi%C3%AAn.md)
[Đối với nhân viên, người làm cộng tác viên cho mình, dịch vụ thuê ngoài, trợ lý riêng là những cái tên khác nhau cho cùng một thứ](./%C4%90%E1%BB%91i%20v%E1%BB%9Bi%20nh%C3%A2n%20vi%C3%AAn,%20ng%C6%B0%E1%BB%9Di%20l%C3%A0m%20c%E1%BB%99ng%20t%C3%A1c%20vi%C3%AAn%20cho%20m%C3%ACnh,%20d%E1%BB%8Bch%20v%E1%BB%A5%20thu%C3%AA%20ngo%C3%A0i,%20tr%E1%BB%A3%20l%C3%BD%20ri%C3%AAng%20l%C3%A0%20nh%E1%BB%AFng%20c%C3%A1i%20t%C3%AAn%20kh%C3%A1c%20nhau%20cho%20c%C3%B9ng%20m%E1%BB%99t%20th%E1%BB%A9.md)