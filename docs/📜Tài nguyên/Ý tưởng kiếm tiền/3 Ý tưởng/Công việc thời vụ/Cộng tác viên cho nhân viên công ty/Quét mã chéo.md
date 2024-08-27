---
share: true
created: 2024-06-25T13:20
updated: 2024-08-27T14:10
---
Yêu cầu đầu vào:: [Có nhiều tài khoản hoặc thẻ ngân hàng](../../../1%20Y%C3%AAu%20c%E1%BA%A7u%20%C4%91%E1%BA%A7u%20v%C3%A0o/Theo%20nguy%C3%AAn%20li%E1%BB%87u,%20ngu%E1%BB%93n%20th%C3%B4ng%20tin/C%C3%B3%20nhi%E1%BB%81u%20t%C3%A0i%20kho%E1%BA%A3n%20ho%E1%BA%B7c%20th%E1%BA%BB%20ng%C3%A2n%20h%C3%A0ng.md)

## Mỗi mã QR cần được quét 13 lần
- Mỗi giao dịch phải ít nhất 20k. Mỗi cửa hàng cần tối thiểu 13 giao dịch để được công nhận là đang hoạt động
- Mỗi cửa hàng có một mã QR. Mỗi giao dịch là một lần quét mã QR đó
- Nghĩa là với mỗi mã QR cần được quét 13 lần, mỗi lần 20-25k. Tổng cộng mỗi mã tốn tầm 300k. 10 mã là 130 lần quét với số tiền là 3tr
## Mỗi tài khoản ngân hàng chỉ được quét 1 lần/1 buổi/1 mã/1 nhân viên công ty
- Một ngày chia làm 3 buổi sáng, trưa, chiều. Chỉ có 3 khung giờ này vì các cửa hàng đều là ăn uống. Không quét đêm được vì các cửa hàng đều đã đóng cửa
- Chỉ được phép có tối đa 2 tài khoản ngân hàng (TK) trùng tên
- Mỗi nhân viên công ty (NV) sẽ có 10 mã QR
- Mỗi TK chỉ được quét 1 lần/1 buổi/1 mã/1 NV. Mục đích là để hệ thống không thắc mắc vì sao chỉ có đúng một TK cho các cửa hàng mở bởi một NV. Các buổi khác nhau có thể dùng lại TK đó để quét lại mã đó

Một người có thể dùng nhiều TK để quét trong một buổi để tiết kiệm thời gian nếu mượn được TK của người khác 
## Tính toán
### Nếu có 10 mã của 1 NV (130 lần quét) 
- 1 TK chỉ quét được 1 lần/buổi, 3 lần/ngày. Tổng cộng 43 ngày
- 5 TK sẽ quét được 15 lần/ngày. Tổng cộng 14 ngày
- 10 TK sẽ quét được 30 lần/ngày. Tổng cộng 5 ngày
- 15 TK sẽ quét được 45 lần/ngày. Tổng cộng 3 ngày
### Nếu có 20 mã của 2 NV (260 lần quét) 
- 1 TK chỉ quét được 2 lần/buổi, 6 lần/ngày. Tổng cộng 43 ngày
- 5 TK sẽ quét được 10 lần/buổi, 30 lần/ngày. Tổng cộng 9 ngày
- 10 TK sẽ quét được 20 lần/buổi, 60 lần/ngày. Tổng cộng 5 ngày
- 15 TK sẽ quét được 30 lần/buổi, 90 lần/ngày. Tổng cộng 3 ngày
## Quy trình làm việc
Mọi thứ sẽ nhanh hơn nếu:
- Để nhiều mã cùng hiện ra trên màn hình lap, 
- Cài đặt vân tay,
- Xếp các app theo thứ tự trên một màn hình chủ

Tốn thời gian nhất là phải chuyển app. Chứ quẹt xong mã này nó có ngay nút khác để quẹt sang mã khác. Nên cái này có lẽ càng có nhiều NV ảo càng có nhiều mã để quẹt cùng lúc, thì hiệu quả quẹt sẽ càng tăng

> [!NOTE] Thời gian quét
>  Giả sử 10 giây quét xong một lần, thì quét 30 lần tốn 300 giây, tức 5 phút. Đó là lý thuyết. Thử nghiệm lần đầu cho thấy tốn 13 lần quẹt trong 15 phút.

> [!attention] Các ngân hàng không làm tốt với VNPAY
> - **Shinhan**, **TP**, **VP** không ghi rõ tên giao dịch với cửa hàng nào khi quẹt VNPAY, dù vẫn chuyển được
> - **Kiên Long** không quẹt được VNPAY, dù quẹt TK ngân hàng bình thường khác vẫn được. MSB có thể được, cần kiểm tra lại
> 
> Xem thêm:: [Ghi chú về các app ngân hàng](../../../../../%F0%9F%93%90%20D%E1%BB%B1%20%C3%A1n/Ch%E1%BA%A1y%20ch%E1%BB%89%20ti%C3%AAu%20cho%20nh%C3%A2n%20vi%C3%AAn%20c%C3%A1c%20c%C3%B4ng%20ty/T%C3%A0i%20li%E1%BB%87u/Ghi%20ch%C3%BA%20v%E1%BB%81%20c%C3%A1c%20app%20ng%C3%A2n%20h%C3%A0ng.md)

![](https://i.imgur.com/Q7KcLn6.png)

