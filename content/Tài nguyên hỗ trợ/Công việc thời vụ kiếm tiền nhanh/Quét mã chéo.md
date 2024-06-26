---
share: true
created: 2024-06-25T13:20
updated: 2024-06-26T17:14
---
# Mỗi mã QR cần được quét 13 lần
- Mỗi giao dịch phải ít nhất 20k. Mỗi cửa hàng cần tối thiểu 13 giao dịch để được công nhận là đang hoạt động
- Mỗi cửa hàng có một mã QR. Mỗi giao dịch là một lần quét mã QR đó
- Nghĩa là với mỗi mã QR cần được quét 13 lần, mỗi lần 20-25k. Tổng cộng mỗi mã tốn tầm 300k. 10 mã là 130 lần quét với số tiền là 3tr
# Mỗi tài khoản ngân hàng chỉ được quét 1 lần/1 buổi/1 mã/1 nhân viên công ty
- Một ngày chia làm 3 buổi sáng, trưa, chiều. Chỉ có 3 khung giờ này vì các cửa hàng đều là ăn uống. Không quét đêm được vì các cửa hàng đều đã đóng cửa
- Chỉ được phép có tối đa 2 tài khoản ngân hàng (tk) trùng tên
- Mỗi nhân viên công ty sẽ có 10 mã QR
- Mỗi tk chỉ được quét 1 lần/1 buổi/1 mã/1 nv. Các buổi khác nhau có thể dùng lại tk đó để quét lại mã đó

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
## Hiện tại: Lộc còn 16 mã, Nhật còn 15 mã 
Tách ra 2 lô: 
- Lô 1: 15 mã của Nhật và 15 mã của Lộc (450 lần quét) 
- Lô 2: 1 mã của Lộc (13 lần quét) 

Lô 1:
- 10 tk sẽ quét được 20 lần/buổi, 60 lần/ngày. Tổng cộng 8 ngày
- 15 tk sẽ quét được 30 lần/buổi, 90 lần/ngày. Tổng cộng 5 ngày
- 20 tk sẽ quét được 40 lần/buổi, 120 lần/ngày. Tổng cộng 4 ngày
- 25 tk sẽ quét được 50 lần/buổi, 150 lần/ngày. Tổng cộng 3 ngày

Lô 2 (làm sau lô 1): 
- 5 tk sẽ quét được 15 lần/ngày. Tổng cộng 1 ngày

Để kịp hạn chót là 30/6 thì cần nhóm huy động 25 tk. Nếu mỗi người chỉ muốn làm một buổi rồi xong thì mỗi ngày cần 3 người làm, 4 ngày cần 12 người làm.

Số tiền để quét: 463 lần quét × 20k đ/lần quét = 9.260k. Đưa 9tr3 để bù vào những lần quét hơn 20k
Tiền công: 930.000 đ