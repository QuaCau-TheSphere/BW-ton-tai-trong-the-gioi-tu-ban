---
share: true
created: 2024-11-21T17:51
updated: 2025-04-28T21:49
---
Hiện tại mình đang xây dựng một chương trình giúp người dùng xây dựng thương hiệu cá nhân trên mạng xã hội. Chương trình viết xong sẽ là phần mềm tự do và mã nguồn mở, dùng giấy phép AGPL. Mình muốn được học thêm kinh nghiệm của mọi người. 

## Yêu cầu chức năng
Sẽ có 3 bước chính:
1. Cào sự kiện trên mạng
2. Đẩy sự kiện lên Google Calendar
3. Tự động đăng bài viết

### B1: Cào sự kiện trên mạng
Mỗi tuần cập nhật sự kiện mới từ các nguồn như:
- Các website: Liquipedia, lịch tôn giáo, lịch chiếu phim, các ngày lễ hoặc ngày nhận thức ở Việt Nam và quốc tế, v.v.
- Hội nhóm: các bài đăng trong các nhóm Facebook chuyên môn, các trang Facebook cụ thể
- Các trang tổng hợp sự kiện: Meetup, Ticketbox, Facebook Event, các trang báo, v.v.

Với những sự kiện có thể lấy được dữ liệu có cấu trúc thì dễ. Với các bài đăng chưa có cấu trúc thì chắc dùng một dịch vụ LLM nào đó để gán nhãn.

Các trang tổng hợp sự kiện thì sẽ không cho API, cần phải cào bằng trình duyệt, và phải cẩn thận để không bị ban. Vấn đề là 

Các thư viện cần sử dụng:
- Trình duyệt: Puppeteer

### B2: Đẩy sự kiện lên Google Calendar
Cần đảm bảo sự kiện đã được đăng trước đó không bị đăng trùng. Ví dụ tuần này mình có được thông tin 2 tuần sau có 3 sự kiện vào t2, t4, t6, thì ghi vào lịch 3 sự kiện đó. Sang tuần sau mình cào thì có thông tin tuần tiếp theo có 5 sự kiện vào t2, t3, t4, t5, t6. Thì mình chỉ thêm 2 sự kiện t3, t5 vào thôi.

Sự kiện trên Google Calendar sẽ được hiển thị trong hệ thống thông tin của người dùng. VD: Fibery, Obsidian, v.v.

Các thư viện cần sử dụng:

## Yêu cầu phi chức năng
- Không bị ban acc vì chạy bot. Do không làm số lượng lớn, ngày chỉ đăng 2 bài là cùng thôi nên có lẽ điều này là khả thi?
- Người dùng có từng sử dụng VS Code, biết dùng terminal, Git và có thể cấu hình bằng YAML ở mức độ cơ bản. Có gì không biết dev sẽ hướng dẫn
- Có thể đặt hẹn giờ chạy tự động trên máy người dùng, nhưng tiện nhất chắc vẫn là dùng GitHub Action. Cái chính là không biết nó có chạy trình duyệt được không. Nếu không thì chắc phải dùng một dịch vụ trình duyệt
- Tránh dùng Docker vì kinh nghiệm của mình cho thấy Docker hay bị lỗi trên Windớ

Mình mong được học thêm kinh nghiệm của mọi người, như về kỹ thuật lập trình, các chương trình hoặc cộng đồng có liên quan. Mình dùng TypeScript nhé. Cảm ơn mọi người đã dành thời gian quan tâm.

cách xây dựng mô hình vật thể (object model)



Tại sao fb ko chuyên nghiệp và chỉnh chu?
Tại sao lúc đó lại muốn cào meetup mà ko phải là những cái ở những người mình có thể tiếp cận?
Các sự kiện trên fb event nó ko thuần tuý là 1 events như dạng ticketbox mà nó giống quảng bá hơn

Cần ticketbox hơn vì nó là dạng bán vé ở cấp độ chuyên nghiệp hơn, nội dung và giá trị đc chỉnh chu hơn. VD, em ko fai fan hài kịch, nhưng e biết đc có các loại hình hài kịch: standup comedy, hài bài banrm, sân khấu kịch, các vở kịch về các câu chuyện sắp tới, khiến e có thể cân nhắc tham gia để hiểu biết hơn. Hoặc nếu e thấy toàn workshop về bánh và mùa thu → e có thể cân nhắc viết content hay các bài viết về topic này. vậy rộng hơn đây, e thấy có water show: ah e có thể cân nhắc dẫn con em đi xem, hoặc workshop yêu hoà bình, e sẽ xem có gì relevant ko mà lại làm topic này tại thời điểm này, nghĩa là nội title của có thể hint cho em nhiều thứ

[Tự động đăng bài trên MXH](./T%E1%BB%B1%20%C4%91%E1%BB%99ng%20%C4%91%C4%83ng%20b%C3%A0i%20tr%C3%AAn%20MXH.md)