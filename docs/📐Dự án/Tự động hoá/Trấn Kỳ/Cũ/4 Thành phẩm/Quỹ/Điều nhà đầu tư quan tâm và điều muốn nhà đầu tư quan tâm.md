---
share: true
created: 2023-09-05T16:17
updated: 2024-11-18T13:20
---
# Điều nhà đầu tư quan tâm
## Trấn Kỳ là gì
Trấn Kỳ là một chương trình tự động phân loại, gắn nhãn thông tin theo thói quen và cách sắp xếp của riêng bạn bằng tiếng Việt tự nhiên, và có thể tích hợp được vào hệ thống vận hành hiện tại của bạn như báo cáo ngân hàng, Google Keep, Google Sheet, Notion, Obsidian, Fibery, Odoo, v.v.

Ví dụ, với câu nhập đầu vào là:

```
thăn bò 30k lườn gà 20k (giảm giá) cho Parid ở coopmart vợ trả
```

Kết quả đầu ra sẽ là:

| Tên                         | Giá trị          |
| --------------------------- | ---------------- |
| Món đồ                      | thăn bò, lườn gà |
| Loại món đồ                 | Lương thực       |
| Phương thức thanh toán      | vợ trả           |
| Loại phương thức thanh toán | Tiền mặt         |
| Nơi mua                     | CoopMart         |
| Loại nơi mua                | Siêu thị         |
| Người thụ hưởng             | Parid            |
| Loại người thụ hưởng        | Gia đình         |
| Số tiền                     | 50000            |
| Ghi chú                     | giảm giá         |

Ngoài ra bạn còn có thể dùng nó để phân loại nhiều thứ khác. Ví dụ:
- **Ý tưởng**: `Kĩ thuật viết văn %topic_Writing @tác_giả_a`
- **Mối quan hệ**: `Gặp @ông_A bàn về việc X, có đi ăn ở !nhà_hàng_Y 200k ck vcb`
- **Công việc**: `Công việc A cần giao cho @bạn_B liên hệ với @@đối_tác_C tại !quán_D với chi phí dự kiến 300k ck vcb và nhận output &&item_X`
- **Cảm xúc**: `xem phim:Inception thấy chấn động`
- **Sức khoẻ:** `chạy bộ 100m, hít đất 30 cái`

## Tiềm năng thị trường
Theo nhóm tìm hiểu thì Trấn Kỳ là chương trình duy nhất hiện nay ở Việt Nam giúp phân loại dữ liệu một cách tự động mà dễ tiếp cận với mọi người. ChatGPT thì thực ra cũng có thể làm được, nhưng Trấn Kỳ có những ưu điểm mà ChatGPT không thể sánh được: đảm bảo chính xác 100% theo phân loại người dùng, không cần kết nối mạng khi chạy, không cần gửi dữ liệu ra bên ngoài, chạy số lượng lớn nhanh và rẻ.

Trong lĩnh vực tài chính cá nhân, với những app hiện có, ví dụ như MoneyLover, thì sau 5 năm hoạt động vẫn chỉ có 50k download, chứng tỏ nó vẫn còn quá bé, vẫn chưa chiếm lĩnh được thị trường. Ngoài ra, việc phân loại chi tiêu cũng là bước đầu tiên để một người gia nhập thị trường tài chính. Nó có thể giúp các ngân hàng tiếp cận những người không dùng tài khoản ngân hàng (nhóm unbanked). Nhất là với nhóm đối tượng học sinh, khi họ chưa đủ 18 tuổi để mở tài khoản ngân hàng. Đây là một mỏ dữ liệu cho các nhà đầu tư.

### df
Bọn mình đã lọt được vào sự chú ý của [J.D.Everest](https://www.jdeverest.com/), một công ty tư vấn chiến lược cho các công ty quản lý tài sản gia đình (family office) và quỹ đầu tư tư nhân (private equity investment) ở Việt Nam. Theo [LinkedIn của người sáng lập](https://www.linkedin.com/in/swimano/) thì anh này trước khi sáng lập J.D.Everest thì từng là:
- Thạc sĩ hệ thống thông tin,
- Giám đốc điều hành số của [Early Risers Media Group](https://tuoitre.vn/early-risers-ke-hoach-dua-phim-viet-ra-the-gioi-20220424113728409.htm "Early Risers và kế hoạch đưa phim Việt ra thế giới - Tuổi Trẻ Online"), quản lý cho phim *Để Mai Tính*, *Long Ruồi*
    - [Người sáng lập công ty này](https://tuoitre.vn/vy-vincent-ngo---nguoi-tram-lang-271245.htm) viết kịch bản cho phim *Hancook* và sửa chữa kịch bản cho *Dòng máu anh hùng* và *Lửa Phật*
- Đồng sáng lập *Quỹ Đầu tư Khởi nghiệp Quốc gia (Vietnam Startup Investment Fund – VNSIF)*

Bạn có thể xem [các ghi chép của bọn mình khi ngồi nói chuyện với họ](./Nh%C3%A0%20%C4%91%E1%BA%A7u%20t%C6%B0/J.D.%20Everest.md).

Bên này nói rằng nếu làm app thu chi cá nhân và đánh thị trường Hàn Quốc trước thì khả năng ăn là 70%, vì bọn này mới thắng crypto. Tuy nhiên, một chị khác cũng từng làm fintech cho Hàn Quốc cho rằng fintech HQ đã phát triển trước mình 10 năm rồi, bây giờ tham gia vào thì không dễ ăn.

## Lịch sử phát triển
```mermaid
gantt
dateFormat  D/M/YY
axisFormat  %d/%m
title       Lịch sử phát triển Trấn Kỳ

section Làm MVP
Tạo phần lõi                 : crit, 5/7/23, 13/8/23
Tạo plugin cho Google Keep và Fibery: 23/8/23, 13/10/23

section Xây dựng sản phẩm
Viết hướng dẫn sử dụng: 4/9/23, 10/10/23
Sửa web: 28/10/23
Lên kế hoạch: 11/11/23
Phỏng vấn (5 buổi): 11/11/23, 23/11/23
Gặp đối tác (4 buổi): 18/11/23, 24/11/23

section Dựng web cho Trấn Kỳ
Dựng web cho Trấn Kỳ: 5/1/24, 7/2/24
```

## Khám phá sâu về người dùng
Có những người sử dụng chương trình này không chỉ để phân loại thu chi, mà còn để phân loại các loại dữ liệu khác, cũng như kết hợp vào hệ thống hoạch định tài nguyên doanh nghiệp của họ.

Bài chi tiết: [Lý do viết Trấn Kỳ](../../9%20Blog/L%C3%BD%20do%20vi%E1%BA%BFt%20Tr%E1%BA%A5n%20K%E1%BB%B3.md){ .md-button .md-button--primary }

## Mô hình kinh doanh
Dự kiến những người có nhu cầu phân loại dữ liệu lớn nhất là:
- Những doanh nghiệp vừa và nhỏ
- Những nhà nghiên cứu hoặc làm dự án xã hội mới được cấp quỹ làm dự án

Đặc điểm chung của nhóm này là:
1. dữ liệu của họ đủ lớn và quy trình đủ phức tạp để họ phải có một hệ thống xử lý dữ liệu mà các sản phẩm no-code không đáp ứng được, nhưng 
2. nguồn lực cũng đủ nhỏ để không đủ tiền thuê lập trình viên cho mình và không đủ thời gian để tự học lập trình

Thế nên hiện tại nhóm đang mở các buổi hỗ trợ các đối tượng này giải quyết nhu cầu công việc thông qua việc hướng dẫn lập trình để thu hút họ. Trong tương lai khi có thêm nhân lực thì có thể suy nghĩ thêm những cách làm sau:
- SaaS: tính theo số lượng truy vấn hoặc plugin
- Bán dữ liệu
- Gia công cho các công ty
- Quảng cáo

Bài chi tiết: [Mô hình kinh doanh Trấn Kỳ](../../9%20Blog/M%C3%B4%20h%C3%ACnh%20kinh%20doanh%20Tr%E1%BA%A5n%20K%E1%BB%B3.md){ .md-button .md-button--primary }

## Đội ngũ
Hiện tại nhóm có 1 người làm toàn thời gian ở tất cả các vấn đề (nghiên cứu, lập trình, truyền thông, phỏng vấn, v.v.) và 1 người làm quản lý kiêm nhân sự. Ngoài ra còn có 2 người khác cũng quan tâm và thường xuyên cho đóng góp. Tất cả đều đã làm việc với nhau hơn 2 năm cùng Quả Cầu.

# Điều muốn nhà đầu tư quan tâm
## Trấn Kỳ được sinh ra là để giúp Kendy
Giúp đỡ Kendy là điều kiện tiên quyết để nhóm xem xét đề nghị đầu tư của bạn. Bạn không cần phải quan tâm đến Kendy, chỉ cần nhóm thấy được đề nghị đầu tư của bạn có lợi nhất cho Kendy thì nhóm sẽ đồng ý.
[Lý do viết Trấn Kỳ](../../9%20Blog/L%C3%BD%20do%20vi%E1%BA%BFt%20Tr%E1%BA%A5n%20K%E1%BB%B3.md), [Kế hoạch giúp đỡ người đang kiệt quệ vì nợ](K%E1%BA%BF%20ho%E1%BA%A1ch%20gi%C3%BAp%20%C4%91%E1%BB%A1%20ng%C6%B0%E1%BB%9Di%20%C4%91ang%20ki%E1%BB%87t%20qu%E1%BB%87%20v%C3%AC%20n%E1%BB%A3.md)

## [Người dùng hài lòng với chất lượng sản phẩm, không phải tốc độ làm ra nó](Ng%C6%B0%E1%BB%9Di%20d%C3%B9ng%20h%C3%A0i%20l%C3%B2ng%20v%E1%BB%9Bi%20ch%E1%BA%A5t%20l%C6%B0%E1%BB%A3ng%20s%E1%BA%A3n%20ph%E1%BA%A9m,%20kh%C3%B4ng%20ph%E1%BA%A3i%20t%E1%BB%91c%20%C4%91%E1%BB%99%20l%C3%A0m%20ra%20n%C3%B3.md) 
- [Đa số startup không chết vì cạnh tranh với đối thủ, mà vì không có người dùng sản phẩm của mình](%C4%90a%20s%E1%BB%91%20startup%20kh%C3%B4ng%20ch%E1%BA%BFt%20v%C3%AC%20c%E1%BA%A1nh%20tranh%20v%E1%BB%9Bi%20%C4%91%E1%BB%91i%20th%E1%BB%A7,%20m%C3%A0%20v%C3%AC%20kh%C3%B4ng%20c%C3%B3%20ng%C6%B0%E1%BB%9Di%20d%C3%B9ng%20s%E1%BA%A3n%20ph%E1%BA%A9m%20c%E1%BB%A7a%20m%C3%ACnh.md)
- [Dựa vào KPI thì bộ phận kinh doanh sẽ có tiếng nói lớn nhất, còn đội phát triển sản phẩm rất ít có tiếng nói](D%E1%BB%B1a%20v%C3%A0o%20KPI%20th%C3%AC%20b%E1%BB%99%20ph%E1%BA%ADn%20kinh%20doanh%20s%E1%BA%BD%20c%C3%B3%20ti%E1%BA%BFng%20n%C3%B3i%20l%E1%BB%9Bn%20nh%E1%BA%A5t,%20c%C3%B2n%20%C4%91%E1%BB%99i%20ph%C3%A1t%20tri%E1%BB%83n%20s%E1%BA%A3n%20ph%E1%BA%A9m%20r%E1%BA%A5t%20%C3%ADt%20c%C3%B3%20ti%E1%BA%BFng%20n%C3%B3i.md)
- [Thứ quyết định hiệu quả của việc kinh doanh là văn hoá doanh nghiệp và phản ứng của thị trường về mình](Th%E1%BB%A9%20quy%E1%BA%BFt%20%C4%91%E1%BB%8Bnh%20hi%E1%BB%87u%20qu%E1%BA%A3%20c%E1%BB%A7a%20vi%E1%BB%87c%20kinh%20doanh%20l%C3%A0%20v%C4%83n%20ho%C3%A1%20doanh%20nghi%E1%BB%87p%20v%C3%A0%20ph%E1%BA%A3n%20%E1%BB%A9ng%20c%E1%BB%A7a%20th%E1%BB%8B%20tr%C6%B0%E1%BB%9Dng%20v%E1%BB%81%20m%C3%ACnh.md)
- [Việc ưu tiên ra quyết định nhanh làm ta thấy thảo luận và dành thời gian xây dựng kế hoạch và nghiên cứu là phí thời gian](Vi%E1%BB%87c%20%C6%B0u%20ti%C3%AAn%20ra%20quy%E1%BA%BFt%20%C4%91%E1%BB%8Bnh%20nhanh%20l%C3%A0m%20ta%20th%E1%BA%A5y%20th%E1%BA%A3o%20lu%E1%BA%ADn%20v%C3%A0%20d%C3%A0nh%20th%E1%BB%9Di%20gian%20x%C3%A2y%20d%E1%BB%B1ng%20k%E1%BA%BF%20ho%E1%BA%A1ch%20v%C3%A0%20nghi%C3%AAn%20c%E1%BB%A9u%20l%C3%A0%20ph%C3%AD%20th%E1%BB%9Di%20gian.md)
<<<<<<<< HEAD:docs/📐 Dự án/Trấn Kỳ/Cũ/4 Thành phẩm/Quỹ/Điều nhà đầu tư quan tâm và điều muốn nhà đầu tư quan tâm.md
- [Áp lực giết chết sự sáng tạo](%C3%81p%20l%E1%BB%B1c%20gi%E1%BA%BFt%20ch%E1%BA%BFt%20s%E1%BB%B1%20s%C3%A1ng%20t%E1%BA%A1o.md)
- [When someone's taking time to do something right in the present, they're a perfectionist with no ability to prioritize, whereas when someone took time to do something right in the past, they're a master artisan of great foresight](When%20someone's%20taking%20time%20to%20do%20something%20right%20in%20the%20present,%20they're%20a%20perfectionist%20with%20no%20ability%20to%20prioritize,%20whereas%20when%20someone%20took%20time%20to%20do%20something%20right%20in%20the%20past,%20they're%20a%20master%20artisan%20of%20great%20foresight.md)
- [Nếu bạn nghĩ rằng bạn có thể hoàn thành đúng kế hoạch, có thể bạn đang ngộ nhận](N%E1%BA%BFu%20b%E1%BA%A1n%20ngh%C4%A9%20r%E1%BA%B1ng%20b%E1%BA%A1n%20c%C3%B3%20th%E1%BB%83%20ho%C3%A0n%20th%C3%A0nh%20%C4%91%C3%BAng%20k%E1%BA%BF%20ho%E1%BA%A1ch,%20c%C3%B3%20th%E1%BB%83%20b%E1%BA%A1n%20%C4%91ang%20ng%E1%BB%99%20nh%E1%BA%ADn.md)
- [Việc mất tiền làm tâm lý con người bị đau dù có thể nó vô lý](../../../../../%E2%9A%A1Hi%E1%BB%83u%20bi%E1%BA%BFt%20s%C3%A2u/Kinh%20t%E1%BA%BF.%20T%C3%A2m%20l%C3%BD%20h%E1%BB%8Dc%20qu%E1%BA%A3n%20l%C3%BD%20v%C3%A0%20lao%20%C4%91%E1%BB%99ng/Kinh%20t%E1%BA%BF/Kinh%20t%E1%BA%BF%20h%E1%BB%8Dc%20t%C3%A2m%20l%C3%BD/Vi%E1%BB%87c%20m%E1%BA%A5t%20ti%E1%BB%81n%20l%C3%A0m%20t%C3%A2m%20l%C3%BD%20con%20ng%C6%B0%E1%BB%9Di%20b%E1%BB%8B%20%C4%91au%20d%C3%B9%20c%C3%B3%20th%E1%BB%83%20n%C3%B3%20v%C3%B4%20l%C3%BD.md)
- [Nỗi ám ảnh với sự hiệu quả có thể đến từ nỗi sợ chết](../../../../../%E2%9A%A1Hi%E1%BB%83u%20bi%E1%BA%BFt%20s%C3%A2u/Kinh%20t%E1%BA%BF.%20T%C3%A2m%20l%C3%BD%20h%E1%BB%8Dc%20qu%E1%BA%A3n%20l%C3%BD%20v%C3%A0%20lao%20%C4%91%E1%BB%99ng/T%C3%A2m%20l%C3%BD%20h%E1%BB%8Dc%20qu%E1%BA%A3n%20l%C3%BD%20v%C3%A0%20lao%20%C4%91%E1%BB%99ng/T%E1%BB%91i%20%C6%B0u%20ho%C3%A1/N%E1%BB%97i%20%C3%A1m%20%E1%BA%A3nh%20v%E1%BB%9Bi%20s%E1%BB%B1%20hi%E1%BB%87u%20qu%E1%BA%A3%20c%C3%B3%20th%E1%BB%83%20%C4%91%E1%BA%BFn%20t%E1%BB%AB%20n%E1%BB%97i%20s%E1%BB%A3%20ch%E1%BA%BFt.md)
========
- [Áp lực giết chết sự sáng tạo](../../../../../../%E2%9A%A1Hi%E1%BB%83u%20bi%E1%BA%BFt%20s%C3%A2u/T%C3%A2m%20l%C3%BD%20h%E1%BB%8Dc%20qu%E1%BA%A3n%20l%C3%BD%20v%C3%A0%20lao%20%C4%91%E1%BB%99ng/%C3%81p%20l%E1%BB%B1c%20gi%E1%BA%BFt%20ch%E1%BA%BFt%20s%E1%BB%B1%20s%C3%A1ng%20t%E1%BA%A1o.md)
- [When someone's taking time to do something right in the present, they're a perfectionist with no ability to prioritize, whereas when someone took time to do something right in the past, they're a master artisan of great foresight](../../../../../../%E2%9A%A1Hi%E1%BB%83u%20bi%E1%BA%BFt%20s%C3%A2u/T%C3%A2m%20l%C3%BD%20h%E1%BB%8Dc%20qu%E1%BA%A3n%20l%C3%BD%20v%C3%A0%20lao%20%C4%91%E1%BB%99ng/S%E1%BA%AFp%20x%E1%BA%BFp%20%C4%91%E1%BB%99%20%C6%B0u%20ti%C3%AAn/When%20someone's%20taking%20time%20to%20do%20something%20right%20in%20the%20present,%20they're%20a%20perfectionist%20with%20no%20ability%20to%20prioritize,%20whereas%20when%20someone%20took%20time%20to%20do%20something%20right%20in%20the%20past,%20they're%20a%20master%20artisan%20of%20great%20foresight.md)
- [Nếu bạn nghĩ rằng bạn có thể hoàn thành đúng kế hoạch, có thể bạn đang ngộ nhận](N%E1%BA%BFu%20b%E1%BA%A1n%20ngh%C4%A9%20r%E1%BA%B1ng%20b%E1%BA%A1n%20c%C3%B3%20th%E1%BB%83%20ho%C3%A0n%20th%C3%A0nh%20%C4%91%C3%BAng%20k%E1%BA%BF%20ho%E1%BA%A1ch,%20c%C3%B3%20th%E1%BB%83%20b%E1%BA%A1n%20%C4%91ang%20ng%E1%BB%99%20nh%E1%BA%ADn.md)
- [Việc mất tiền làm tâm lý con người bị đau dù có thể nó vô lý](../../../../../../%E2%9A%A1Hi%E1%BB%83u%20bi%E1%BA%BFt%20s%C3%A2u/Kinh%20t%E1%BA%BF/Kinh%20t%E1%BA%BF%20h%E1%BB%8Dc%20t%C3%A2m%20l%C3%BD/Vi%E1%BB%87c%20m%E1%BA%A5t%20ti%E1%BB%81n%20l%C3%A0m%20t%C3%A2m%20l%C3%BD%20con%20ng%C6%B0%E1%BB%9Di%20b%E1%BB%8B%20%C4%91au%20d%C3%B9%20c%C3%B3%20th%E1%BB%83%20n%C3%B3%20v%C3%B4%20l%C3%BD.md)
- [Nỗi ám ảnh với sự hiệu quả có thể đến từ nỗi sợ chết](../../../../../../%E2%9A%A1Hi%E1%BB%83u%20bi%E1%BA%BFt%20s%C3%A2u/T%C3%A2m%20l%C3%BD%20h%E1%BB%8Dc%20qu%E1%BA%A3n%20l%C3%BD%20v%C3%A0%20lao%20%C4%91%E1%BB%99ng/T%E1%BB%91i%20%C6%B0u%20ho%C3%A1/N%E1%BB%97i%20%C3%A1m%20%E1%BA%A3nh%20v%E1%BB%9Bi%20s%E1%BB%B1%20hi%E1%BB%87u%20qu%E1%BA%A3%20c%C3%B3%20th%E1%BB%83%20%C4%91%E1%BA%BFn%20t%E1%BB%AB%20n%E1%BB%97i%20s%E1%BB%A3%20ch%E1%BA%BFt.md)
>>>>>>>> c0d3b70881cf4ed62e5e2181c3211df89b86a3ac:docs/📐Dự án/Tự động hoá/Trấn Kỳ/Cũ/4 Thành phẩm/Quỹ/Điều nhà đầu tư quan tâm và điều muốn nhà đầu tư quan tâm.md
- [Việc thuê ngoài chỉ giải quyết được một lần, trong khi phải thử rất nhiều lần](Vi%E1%BB%87c%20thu%C3%AA%20ngo%C3%A0i%20ch%E1%BB%89%20gi%E1%BA%A3i%20quy%E1%BA%BFt%20%C4%91%C6%B0%E1%BB%A3c%20m%E1%BB%99t%20l%E1%BA%A7n,%20trong%20khi%20ph%E1%BA%A3i%20th%E1%BB%AD%20r%E1%BA%A5t%20nhi%E1%BB%81u%20l%E1%BA%A7n.md)
## Sức khoẻ cũng là một loại tài nguyên cần được tối ưu hoá
- [Phân tích quyết định đa tiêu chí (MCDA) là phương pháp để tìm điểm đánh đổi tối ưu nhất](Ph%C3%A2n%20t%C3%ADch%20quy%E1%BA%BFt%20%C4%91%E1%BB%8Bnh%20%C4%91a%20ti%C3%AAu%20ch%C3%AD%20(MCDA)%20l%C3%A0%20ph%C6%B0%C6%A1ng%20ph%C3%A1p%20%C4%91%E1%BB%83%20t%C3%ACm%20%C4%91i%E1%BB%83m%20%C4%91%C3%A1nh%20%C4%91%E1%BB%95i%20t%E1%BB%91i%20%C6%B0u%20nh%E1%BA%A5t.md) 

## Động lực nội sinh và sự tin tưởng tạo ra tổ chức đáng làm
- [Nhìn thấy được người kia đang làm gì làm tăng sự tin tưởng đối với họ](Nh%C3%ACn%20th%E1%BA%A5y%20%C4%91%C6%B0%E1%BB%A3c%20ng%C6%B0%E1%BB%9Di%20kia%20%C4%91ang%20l%C3%A0m%20g%C3%AC%20l%C3%A0m%20t%C4%83ng%20s%E1%BB%B1%20tin%20t%C6%B0%E1%BB%9Fng%20%C4%91%E1%BB%91i%20v%E1%BB%9Bi%20h%E1%BB%8D.md)
<<<<<<<< HEAD:docs/📐 Dự án/Trấn Kỳ/Cũ/4 Thành phẩm/Quỹ/Điều nhà đầu tư quan tâm và điều muốn nhà đầu tư quan tâm.md
- [Một tổ chức đáng làm tạo ra được động lực nội sinh ở nhân viên](../../../../../%E2%9A%A1Hi%E1%BB%83u%20bi%E1%BA%BFt%20s%C3%A2u/Kinh%20t%E1%BA%BF.%20T%C3%A2m%20l%C3%BD%20h%E1%BB%8Dc%20qu%E1%BA%A3n%20l%C3%BD%20v%C3%A0%20lao%20%C4%91%E1%BB%99ng/T%C3%A2m%20l%C3%BD%20h%E1%BB%8Dc%20qu%E1%BA%A3n%20l%C3%BD%20v%C3%A0%20lao%20%C4%91%E1%BB%99ng/K%E1%BB%B9%20n%C4%83ng,%20%C4%91%E1%BB%99ng%20l%E1%BB%B1c/M%E1%BB%99t%20t%E1%BB%95%20ch%E1%BB%A9c%20%C4%91%C3%A1ng%20l%C3%A0m%20t%E1%BA%A1o%20ra%20%C4%91%C6%B0%E1%BB%A3c%20%C4%91%E1%BB%99ng%20l%E1%BB%B1c%20n%E1%BB%99i%20sinh%20%E1%BB%9F%20nh%C3%A2n%20vi%C3%AAn.md)
========
- [Một tổ chức đáng làm tạo ra được động lực nội sinh ở nhân viên](../../../../../../%E2%9A%A1Hi%E1%BB%83u%20bi%E1%BA%BFt%20s%C3%A2u/T%C3%A2m%20l%C3%BD%20h%E1%BB%8Dc%20qu%E1%BA%A3n%20l%C3%BD%20v%C3%A0%20lao%20%C4%91%E1%BB%99ng/K%E1%BB%B9%20n%C4%83ng,%20%C4%91%E1%BB%99ng%20l%E1%BB%B1c/M%E1%BB%99t%20t%E1%BB%95%20ch%E1%BB%A9c%20%C4%91%C3%A1ng%20l%C3%A0m%20t%E1%BA%A1o%20ra%20%C4%91%C6%B0%E1%BB%A3c%20%C4%91%E1%BB%99ng%20l%E1%BB%B1c%20n%E1%BB%99i%20sinh%20%E1%BB%9F%20nh%C3%A2n%20vi%C3%AAn.md)
>>>>>>>> c0d3b70881cf4ed62e5e2181c3211df89b86a3ac:docs/📐Dự án/Tự động hoá/Trấn Kỳ/Cũ/4 Thành phẩm/Quỹ/Điều nhà đầu tư quan tâm và điều muốn nhà đầu tư quan tâm.md

## Quả Cầu là một vùng đất, một sân chơi, một cộng đồng, một mạng lưới, một nền tảng, một hệ sinh thái
Nó là một khái niệm lơ lửng, một vật thể trong suốt. Quả Cầu hướng đến việc trở thành một tổ chức không có sự phân cấp và người tham gia không làm vì trách nhiệm, lấy nhu cầu của thành viên (vốn nhiều vô kể và thay đổi liên tục) làm mục tiêu của tổ chức, để họ trở thành những người có kỹ năng đa dạng, tư duy liên ngành, và sự khoẻ mạnh và hạnh phúc toàn diện, dựa trên triết học của Deleuze và Guattari, khoa học phức hợp, game phiêu lưu nhập vai, nền kinh tế không dùng tiền, và các công cụ lưu dữ liệu tại máy người dùng.
