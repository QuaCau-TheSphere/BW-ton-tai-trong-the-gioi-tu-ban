---
share: true
created: 2024-06-25T13:20
updated: 2024-06-27T22:24
---
Tiền công: 10% số tiền quét

# Mỗi mã QR cần được quét 13 lần
- Mỗi giao dịch phải ít nhất 20k. Mỗi cửa hàng cần tối thiểu 13 giao dịch để được công nhận là đang hoạt động
- Mỗi cửa hàng có một mã QR. Mỗi giao dịch là một lần quét mã QR đó
- Nghĩa là với mỗi mã QR cần được quét 13 lần, mỗi lần 20-25k. Tổng cộng mỗi mã tốn tầm 300k. 10 mã là 130 lần quét với số tiền là 3tr
# Mỗi tài khoản ngân hàng chỉ được quét 1 lần/1 buổi/1 mã/1 nhân viên công ty
- Một ngày chia làm 3 buổi sáng, trưa, chiều. Chỉ có 3 khung giờ này vì các cửa hàng đều là ăn uống. Không quét đêm được vì các cửa hàng đều đã đóng cửa
- Chỉ được phép có tối đa 2 tài khoản ngân hàng (tk) trùng tên
- Mỗi nhân viên công ty (nv) sẽ có 10 mã QR
- Mỗi tk chỉ được quét 1 lần/1 buổi/1 mã/1 nv. Mục đích là để hệ thống không thắc mắc vì sao chỉ có đúng một tk cho các cửa hàng mở bởi một nv. Các buổi khác nhau có thể dùng lại tk đó để quét lại mã đó

Một người có thể dùng nhiều tk để quét trong một buổi để tiết kiệm thời gian nếu mượn được tk của người khác 
# Tính toán
## Nếu có 10 mã của 1 nv (130 lần quét) 
- 1 tk chỉ quét được 1 lần/buổi, 3 lần/ngày. Tổng cộng 43 ngày
- 5 tk sẽ quét được 15 lần/ngày. Tổng cộng 14 ngày
- 10 tk sẽ quét được 30 lần/ngày. Tổng cộng 5 ngày
- 15 tk sẽ quét được 45 lần/ngày. Tổng cộng 3 ngày
## Nếu có 20 mã của 2 nv (260 lần quét) 
- 1 tk chỉ quét được 2 lần/buổi, 6 lần/ngày. Tổng cộng 43 ngày
- 5 tk sẽ quét được 10 lần/buổi, 30 lần/ngày. Tổng cộng 9 ngày
- 10 tk sẽ quét được 20 lần/buổi, 60 lần/ngày. Tổng cộng 5 ngày
- 15 tk sẽ quét được 30 lần/buổi, 90 lần/ngày. Tổng cộng 3 ngày

> [!NOTE] Giả sử 10 giây quét xong một lần, thì quét 30 lần tốn 300 giây, tức 5 phút

## Hiện tại: Lộc còn 16 mã, Nhật còn 15 mã 
Tách ra 3 lô: 
- Lô 1: 7 mã của Nhật và 7 mã của Lộc (182 lần quét) 
- Lô 2: 8 mã của Nhật và 8 mã của Lộc (208 lần quét) 
- Lô 3: 1 mã của Lộc (13 lần quét) 

Lô 1:
- 10 tk sẽ quét được 20 lần/buổi, 60 lần/ngày. Tổng cộng 3 ngày
- 15 tk sẽ quét được 30 lần/buổi, 90 lần/ngày. Tổng cộng 2 ngày


Buổi 1: đăng nhập vào các tk


Để kịp hạn chót là 30/6 thì cần huy động được 15 tk. Nếu mỗi người chỉ muốn làm một buổi rồi xong thì mỗi ngày cần 3 người làm, 4 ngày cần 12 người làm.

- **Số tiền để quét:** 8.100.00 đ
  (403 lần quét × 20k đ/lần quét = 8.060k. Đưa 8tr1 để bù vào những lần quét hơn 20k.)
- **Tiền công:** 810.000 đ

![Pasted image 20240627153206.png](Pasted%20image%2020240627153206.png)
![](https://i.imgur.com/Q7KcLn6.png)
[Ghi chú về các ngân hàng](../../Hi%E1%BB%83u%20bi%E1%BA%BFt%20s%C3%A2u/Vay%20ti%E1%BB%81n/Ng%C3%A2n%20h%C3%A0ng,%20%C4%91i%E1%BB%83m%20t%C3%ADn%20d%E1%BB%A5ng/Ghi%20ch%C3%BA%20v%E1%BB%81%20c%C3%A1c%20ng%C3%A2n%20h%C3%A0ng.md)
Không quét mặt được: AB, Bắc Á, Bảo Việt

Kiên Long, OCB, saigonbank


| Ngân hàng | Tên đăng nhập | Mật khẩu      | Tên trên căn cước | Số căn cước  | Ghi chú                                      |
| --------- | ------------- | ------------- | ----------------- | ------------ | -------------------------------------------- |
| SHB       | 0903850094    | LOCratro12!@  | Nguyễn Văn Tận    | 096094002666 | Tạo mã QR bị lỗi (nhưng vẫn dùng OK)         |
| Ocean     | 084089001378  | LOCratro12!@  | Lê Văn Cường      | 084089001378 |                                              |
| Shinhan   | 0903850094N   | 63563620      | Nguyễn Thị Liễu   | 093177005446 |                                              |
| Vietin    | 0979437321    | NHATratro12!@ | Lý Minh Nhật      | 079092007133 |                                              |
| VP        | 0979437321    | LOCratro12!@  | Lý Minh Nhật      | 079092007133 |                                              |
|           |               |               |                   |              |                                              |
| Kiên Long | 0903850094    | Nhuy@2004     | Nguyễn Thị Như Ý  | 052304014268 | Đang đợi xác minh nên bị khoá chuyển tiền đi |
| MSB       | 0903850094    | Anhvinh19@    | Lò Văn Phúc       | 011203008787 | Không chuyển cho VNPAY được                  |


# Bị phát hiện 
Nếu mình dùng tk của mình, thì vì [Giao dịch khi quẹt qua trung gian thanh toán sẽ trở thành một giao dịch mua hàng vô cùng sạch](../../Hi%E1%BB%83u%20bi%E1%BA%BFt%20s%C3%A2u/Trung%20gian%20thanh%20to%C3%A1n/Giao%20d%E1%BB%8Bch%20khi%20qu%E1%BA%B9t%20qua%20trung%20gian%20thanh%20to%C3%A1n%20s%E1%BA%BD%20tr%E1%BB%9F%20th%C3%A0nh%20m%E1%BB%99t%20giao%20d%E1%BB%8Bch%20mua%20h%C3%A0ng%20v%C3%B4%20c%C3%B9ng%20s%E1%BA%A1ch.md), nên mình không phải lo điểm tín dụng của mình bị hạ.

Với nv, phạt thì phạt trong nội bộ VNPAY, quẹt dơ cao nhất của nó là không tính kpi của nv đó, còn tạo cửa hàng ảo thì là đuổi luôn.