---
share: true
created: 2023-10-30T14:29
updated: 2025-07-08T15:35
---
# Có thể làm eKYC ảo được không?
eKYC phát hiện bằng việc phát hiện được các chuyển động nhỏ của cơ mặt hoặc quét chuyển động của mắt, nên nếu là quét người chết nó cũng phát hiện ra được. Nếu app đòi hỏi phải có quay mặt thì phải khớp chính xác với yêu cầu của app, nếu chỉ là video có sẵn thì không biết được. Giờ AI deepfake cũng nhiều, không chắc có thể bị nhờ AI tạo ra cái video như vậy không. Như Google Veo giới hạn có 7s mỗi video, và không chắc nó làm được vụ này không. Dù không đòi hỏi quay mặt nhưng chỉ chụp mỗi khuôn mặt thì cũng không chắc. Nếu app chỉ cần chụp ảnh giấy tờ thì đơn giản hơn. Ví dụ như để GitHub for Student Pack vì nó chỉ cần giơ thẻ sv trước camera là được nên có thể làm giả.

Với các app có chức năng chống root, nếu app dễ thì xài Magisk Hide là được. Cái chính là các app lớn thì dev của họ được trả tiền để viết mã chống gian lận, còn Magisk là dự án cộng đồng nên chậm hơn nhiều. Nếu không được thì phải dịch ngược app để xem nó chống root kiểu gì.

Mình có thể giả lập điện thoại trên máy được, nhưng nó tuỳ vào việc giả lập đó có cho phép lấy luồng video streaming từ file hay từ camera của máy tính hay không. Mình nhớ có một lab cho thuê máy android vật lý, cho phép chèn ảnh vào luồng camera, nhưng không chắc là họ đã làm cách nào, vì video driver trên android khá phụ thuộc vào thiết bị/hãng sản xuất, driver cùa chúng độc quyền chứ không chung chung như Win hay Linux nên chèn vào rất phức tạp. Nếu làm trên trình duyệt thì mình nghĩ có cách để làm giả camera stream được, nhưng vẫn rất phụ thuộc vào yêu cầu của cái eKYC đó. Nếu khó thì hên xui lúc được lúc không và mất thời gian lắm.

Thường các app ngân hàng ép người dùng xài app để làm eKYC vì nó bảo mật, khó hack hơn (nhưng không phải là không thể, như mấy vụ kiểm soát điện thoại, lừa người ta làm theo các thao tác, nên ngân hàng giờ làm chặt hơn rất nhiều). Các app này thường yêu cầu quay các góc khác nhau của khuôn mặt, nhìn thẳng vào cam. 