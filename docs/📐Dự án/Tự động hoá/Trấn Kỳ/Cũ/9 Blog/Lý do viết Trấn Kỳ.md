---
share: true
created: 2023-09-12T16:39
updated: 2025-07-09T17:32
description: Tại sao các phần mềm nocode hay ChatGPT vẫn không đủ để thay thế lập trình trong việc quản trị?
alias:
  - Tại sao các phần mềm nocode hay ChatGPT vẫn không đủ để thay thế lập trình trong việc quản trị?
tags:
  - file_thành-phẩm_bài-viết
---
%%
#file/thành-phẩm/bài-viết 
# Tại sao không sử dụng cơ sở dữ liệu (Excel, SQL) 
Ban đầu, nó vốn là vì khi viết bài này thì sẽ có nhiều liên kết ở trong vault này, còn viết hướng dẫn sử dụng thì lại có nhiều liên kết ở vault kia,
Việc để các bài viết rải ra ở các website khác nhau cũng là vì mỗi bài sẽ có nhiều nội dung liên quan trực tiếp tới website đó. Hiện tại bọn mình chưa có thời gian để đảm bảo liên kết trỏ đúng

Nhưng bởi vì buộc phải chấp nhận lý do đó, bọn mình bắt đầu khám phá ra được lý do sâu hơn

Trấn Kỳ là một sản phẩm. [Sản phẩm là vật thể](S%E1%BA%A3n%20ph%E1%BA%A9m%20l%C3%A0%20v%E1%BA%ADt%20th%E1%BB%83.md). [Sản phẩm là sự bồi tụ của các dòng hải lưu nhu cầu và kết tinh của kiến thức](S%E1%BA%A3n%20ph%E1%BA%A9m%20l%C3%A0%20s%E1%BB%B1%20b%E1%BB%93i%20t%E1%BB%A5%20c%E1%BB%A7a%20c%C3%A1c%20d%C3%B2ng%20h%E1%BA%A3i%20l%C6%B0u%20nhu%20c%E1%BA%A7u%20v%C3%A0%20k%E1%BA%BFt%20tinh%20c%E1%BB%A7a%20ki%E1%BA%BFn%20th%E1%BB%A9c.md). Để nó được đón nhận, người ta phải nhận được nhiều hơn những thứ nó có thể cho đi. Nhìn nó bằng nhiều lăng kính khác nhau.
Đỉnh cao là mỗi người đều thấy khác nhau
Để mọi người đều cùng có thể nhìn thấy nó, để nó có thể chạm đến bất cứ đâu, trước hết cần phân rã nó, làm cho nó hoà tan
Thả bạn vào một nơi bất kỳ trên thành phố. Như bạn thấy, nơi này còn nhiều chỗ chưa được xây dựng, giống như một thành phố còn nhiều bãi đất hoang
%%

## Tại sao lại viết chương trình này?
Đây là nhu cầu của Kendy, và bọn mình giúp được gì thì giúp. Gần như tất cả những phần dưới đều để giải thích kỹ hơn nhu cầu này. Bạn có thể xem thêm bài [Từ việc hỗ trợ Kendy đến Patreon và tâm lý của con người về tiền](%F0%9F%93%90D%E1%BB%B1%20%C3%A1n/Gi%C3%BAp%20nhau%20tho%C3%A1t%20n%E1%BB%A3/Kh%C3%A1ch%20h%C3%A0ng/Kendy/T%E1%BB%AB%20vi%E1%BB%87c%20h%E1%BB%97%20tr%E1%BB%A3%20Kendy%20%C4%91%E1%BA%BFn%20Patreon%20v%C3%A0%20t%C3%A2m%20l%C3%BD%20c%E1%BB%A7a%20con%20ng%C6%B0%E1%BB%9Di%20v%E1%BB%81%20ti%E1%BB%81n.md). 

Nhưng sau đó, nó còn phục vụ một mong muốn khác của bọn mình là nâng cao năng lực thông thạo máy tính (computer literacy) cho mọi người. Sẽ có rất nhiều người đến với chương trình này không phải là lập trình viên, nhưng họ sẽ phải cần phải tự biết cách chỉnh sửa. Họ biết rằng việc biết lập trình là quan trọng, họ đã luôn có ý định để học nó, nhưng mãi mà họ vẫn không thể biến nó trở thành ưu tiên cao nhất.

Trong cái thời đại của 4.0 này, [Lập trình là một cái gì đó thâm nhập vào đời sống của chúng ta, nhưng lại gần như vô hình](L%E1%BA%ADp%20tr%C3%ACnh%20l%C3%A0%20m%E1%BB%99t%20c%C3%A1i%20g%C3%AC%20%C4%91%C3%B3%20th%C3%A2m%20nh%E1%BA%ADp%20v%C3%A0o%20%C4%91%E1%BB%9Di%20s%E1%BB%91ng%20c%E1%BB%A7a%20ch%C3%BAng%20ta,%20nh%C6%B0ng%20l%E1%BA%A1i%20g%E1%BA%A7n%20nh%C6%B0%20v%C3%B4%20h%C3%ACnh.md). Thật là một nghịch lý khi một mặt [Lập trình viên biết lập trình chủ yếu là nhờ biết google](L%E1%BA%ADp%20tr%C3%ACnh%20vi%C3%AAn%20bi%E1%BA%BFt%20l%E1%BA%ADp%20tr%C3%ACnh%20ch%E1%BB%A7%20y%E1%BA%BFu%20l%C3%A0%20nh%E1%BB%9D%20bi%E1%BA%BFt%20google.md), nhưng mặt khác [Người không học về lập trình thấy việc lập trình như làm phép thuật](Ng%C6%B0%E1%BB%9Di%20kh%C3%B4ng%20h%E1%BB%8Dc%20v%E1%BB%81%20l%E1%BA%ADp%20tr%C3%ACnh%20th%E1%BA%A5y%20vi%E1%BB%87c%20l%E1%BA%ADp%20tr%C3%ACnh%20nh%C6%B0%20l%C3%A0m%20ph%C3%A9p%20thu%E1%BA%ADt.md). Tại sao các ngành khác không có được sự vị trí đó, khi mà điều kiện để một người có thể thông thạo trong ngành lập trình là cũng đủ để họ có thể thông thạo những ngành khác? Khi một người cảm thấy mình mù công nghệ, và chấp nhận rằng mình sẽ chẳng hiểu gì về công nghệ cả, thì họ đang có một sự bất lực học được.

Bằng việc [đáp ứng nhu cầu học cách sử dụng công cụ và tư duy lập trình cho nhu cầu cá nhân hoặc nghiên cứu](C%C3%A1c%20bu%E1%BB%95i%20%C4%91%C3%A1p%20%E1%BB%A9ng%20nhu%20c%E1%BA%A7u%20h%E1%BB%8Dc%20c%C3%A1ch%20s%E1%BB%AD%20d%E1%BB%A5ng%20c%C3%B4ng%20c%E1%BB%A5%20v%C3%A0%20t%C6%B0%20duy%20l%E1%BA%ADp%20tr%C3%ACnh%20cho%20nhu%20c%E1%BA%A7u%20c%C3%B4ng%20vi%E1%BB%87c.md), bọn mình hy vọng rằng bạn thấy rằng việc lập trình không chỉ là code sao cho máy chạy đúng ý mình mà còn là [cách ta dự phần vào việc hiểu và kiến trúc lên thế giới này](L%E1%BA%ADp%20tr%C3%ACnh%20th%E1%BB%B1c%20ra%20l%C3%A0%20d%C3%B9ng%20%E1%BA%A9n%20d%E1%BB%A5.md). Bọn mình hy vọng rằng việc bạn thấy mình tự tin hơn về lập trình cũng sẽ góp phần giúp Kendy.

## Nếu cần phân loại thu chi thì tại sao không sử dụng các phần mềm quản lý tài chính cá nhân?
Các phần mềm quản lý tài chính cá nhân như Misa hay Money Lover có giao diện thân thiện hơn chương trình này nhiều. Momo hay ZaloPay còn có chức năng thu chi cho nhóm.

Vấn đề là chúng đều yêu cầu bạn **phải phân loại ngay lúc nhập dữ liệu**, trong khi điều này lấy thời gian của bạn. Lúc bạn đi chợ mua đồ mà lại bắt bạn phân loại từng cái thì không biết tới bao giờ. Vào lúc nhập liệu bạn chỉ muốn viết ra thật nhanh, và não bạn nghĩ ra từ nào thì phải cho bạn viết đúng từ đó.

Ngoài ra, **dữ liệu được lưu trong những phần mềm đó bị cô lập**. Sẽ có những người cần tạo lập nhiều cơ sở dữ liệu để quản lý, và cần dữ liệu ở tất cả các nguồn được đổ về một nơi. [Việc lưu dữ liệu ở các công cụ khác nhau tạo thành các đảo thông tin](Vi%E1%BB%87c%20l%C6%B0u%20d%E1%BB%AF%20li%E1%BB%87u%20%E1%BB%9F%20c%C3%A1c%20c%C3%B4ng%20c%E1%BB%A5%20kh%C3%A1c%20nhau%20t%E1%BA%A1o%20th%C3%A0nh%20c%C3%A1c%20%C4%91%E1%BA%A3o%20th%C3%B4ng%20tin.md).

Điều này cũng có nghĩa là, nếu bạn không thấy mình có những vấn đề này thì bạn không cần phải dùng chương trình này.

## Liệu các phần mềm hoạch định tài nguyên doanh nghiệp (ERP) có giải quyết được vấn đề đảo thông tin này không?
Các phần mềm hoạch định tài nguyên doanh nghiệp ([enterprise resource planning](https://en.wikipedia.org/wiki/Enterprise_resource_planning "Enterprise resource planning - Wikipedia"), ERP) sẽ có những mô đun chuyên về quản lý tài chính. Tuy nhiên, với Kendy điều đó là không đủ. Đây là những yêu cầu cho một phần mềm quản trị mà Kendy cần. Thiếu một trong 3 đều không được:
- [ ] Có khả năng tuỳ chỉnh theo đúng luồng làm việc, suy nghĩ của mình
- [ ] Không phải dành quá nhiều thời gian để xây dựng hệ thống đó
- [ ] Chi phí thấp

### Các ERP được dựng sẵn không đủ khả năng đáp ứng những luồng làm việc và suy nghĩ đặc thù
![Dùng ERP dựng sẵn.png](D%C3%B9ng%20ERP%20d%E1%BB%B1ng%20s%E1%BA%B5n.png)

Có hai loại công việc: [Công việc khai phá và công việc khai thác](C%C3%B4ng%20vi%E1%BB%87c%20khai%20ph%C3%A1%20v%C3%A0%20c%C3%B4ng%20vi%E1%BB%87c%20khai%20th%C3%A1c.md). Công việc khai phá (exploration) là những công việc mà nếu ta chưa làm xong thì cũng không chắc lắm kết quả trông như thế nào, còn công việc khai thác (exploitation) là những công việc chưa làm cũng biết chính xác kết quả trông như thế nào. Công việc khai phá sử dụng dạng tư duy phi tuyến, và hợp với kiểu dữ liệu phi cấu trúc. Còn công việc khai thác sử dụng dạng tư duy tuyến tính, và hợp với kiểu dữ liệu có cấu trúc.

Bởi vì [Công việc khai phá chính là quản lý kiến thức](C%C3%B4ng%20vi%E1%BB%87c%20khai%20ph%C3%A1%20ch%C3%ADnh%20l%C3%A0%20qu%E1%BA%A3n%20l%C3%BD%20ki%E1%BA%BFn%20th%E1%BB%A9c.md), cho nên [Quản lý công việc và quản lý kiến thức không thể tách rời nhau](Qu%E1%BA%A3n%20l%C3%BD%20c%C3%B4ng%20vi%E1%BB%87c%20v%C3%A0%20qu%E1%BA%A3n%20l%C3%BD%20ki%E1%BA%BFn%20th%E1%BB%A9c%20kh%C3%B4ng%20th%E1%BB%83%20t%C3%A1ch%20r%E1%BB%9Di%20nhau.md). Đây là thứ mà các ERP dựng sẵn này không đáp ứng được. Những người viết ra chúng tất nhiên cũng đã có những nghiên cứu khách hàng và cũng thiết kế nhiều lựa chọn để người dùng có thể tuỳ chỉnh ở một mức độ nào đó. Nếu không đáp ứng được nhu cầu đa số thì không thể nào giảm được chi phí sản phẩm cả. Tuy nhiên, sự dự đoán của các tác giả ấy về quy trình nghiệp vụ của một số khách hàng doanh nghiệp điển hình mà họ có thể nghĩ ra được cũng không thể nào bắt kịp được luồng làm việc và suy nghĩ thực tế của các cá nhân cụ thể. Mỗi người có một cách phân loại thông tin, yêu cầu về sự ngăn nắp thông tin, khối lượng thông tin và loại thông tin phải thường xuyên xử lý cũng khác nhau. Mỗi một luồng tư duy khác nhau có thể sẽ đòi hỏi những cách quản lý thông tin rất khác nhau. Và với một số người, cái mô đun quản lý kiến thức của chúng không gì chỉ làm cho có. Thà không dùng nó chứ dùng thì càng bực hơn. Các ERP này không đáp ứng nổi vai trò trở thành một [một giàn giáo nhận thức](Gi%C3%A0n%20gi%C3%A1o%20nh%E1%BA%ADn%20th%E1%BB%A9c%20c%E1%BA%A7n%20ph%E1%BA%A3i%20tu%E1%BB%B3%20bi%E1%BA%BFn%20v%E1%BB%9Bi%20qu%C3%A1%20tr%C3%ACnh%20hi%E1%BB%83u%20bi%E1%BA%BFt%20c%E1%BB%A7a%20ng%C6%B0%E1%BB%9Di%20d%C3%B9ng.md) của họ. 

Hơn nữa, ngay cả khi chỉ xét đến mô đun về quản lý giao dịch của các ERP dựng sẵn, thì cũng giống như các phần mềm quản lý tài chính cá nhân được nói ở trên, dữ liệu được lưu trong đây vẫn bị cô lập trong ERP đó. 

Chưa kể, cái gọi là chi phí thấp ở đây chỉ là miễn phí trong một số ngày, một số tính năng hoặc đầu người. Nhưng thường thì có trả tiền để dùng thì những tính năng đó cũng không hướng đến việc trở thành một nơi để quản lý tất cả mọi thứ.

### Tự xây dựng ERP tốn rất nhiều thời gian
![Tự xây dựng ERP.png](T%E1%BB%B1%20x%C3%A2y%20d%E1%BB%B1ng%20ERP.png)
Có các phần mềm ERP mã nguồn mở như Odoo, và bạn có thể tự mình bổ sung thêm các tính năng để đảm bảo là nó sẽ theo đúng luồng làm việc, suy nghĩ của bạn, nhưng điều đó đòi hỏi bạn phải có kiến thức cũng như thời gian để lập trình. Điều này sẽ rất khó với người chưa từng lập trình bao giờ mà còn rất nhiều thứ khác phải làm. Nếu không ai code giùm cho thì Kendy thà chịu đau khổ chứ không thể nào tự học được, bởi vì [Chi phí chuyển đổi giữa lập trình và nghiên cứu là lớn](Chi%20ph%C3%AD%20chuy%E1%BB%83n%20%C4%91%E1%BB%95i%20gi%E1%BB%AFa%20l%E1%BA%ADp%20tr%C3%ACnh%20v%C3%A0%20nghi%C3%AAn%20c%E1%BB%A9u%20l%C3%A0%20l%E1%BB%9Bn.md). Chưa kể, theo định luật Hofstadter: [Mọi thứ sẽ luôn tốn thời gian hơn bạn nghĩ, kể cả khi bạn đã tính đến định luật Hofstadter](M%E1%BB%8Di%20th%E1%BB%A9%20s%E1%BA%BD%20lu%C3%B4n%20t%E1%BB%91n%20th%E1%BB%9Di%20gian%20h%C6%A1n%20b%E1%BA%A1n%20ngh%C4%A9.md).

Cũng không phải là Kendy không muốn học để tự xây dựng hệ thống cho mình, mà là kiếm lòi mắt cũng không thấy được người thực sự muốn chia sẻ. Theo trải nghiệm của Kendy khi hỏi trên các diễn đàn của Odoo, thì người trả lời thực ra chỉ muốn báo giá chứ không thực sự muốn chỉ. Vì dù là mã nguồn mở thì họ cũng xác định tập khách hàng của mình là doanh nghiệp.

### Chi phí thuê lập trình viên để tự xây dựng ERP là quá cao
![Thuê lập trình viên.png](Thu%C3%AA%20l%E1%BA%ADp%20tr%C3%ACnh%20vi%C3%AAn.png)
Nếu thuê lập trình viên thì thực sự không có tiền để thuê, và nếu có tiền thì cũng rất lệ thuộc vào họ. Việc xây dựng hệ thống là việc sửa mỗi lần một chút. Kendy không có đủ tiền cho quá nhiều lần điều chỉnh lắt nhắt như vậy.

## Hiện nay đã có nhiều phần mềm ERP low code. Liệu có giải quyết được vấn đề này?
Khái niệm low code được sinh ra dành cho những phần mềm không phải code nhiều nhưng người dùng vẫn có thể tạo ra được sản phẩm của mình. Airtable, Google Sheet, Excel là những ví dụ của low code.

Fibery cũng là một sản phẩm low code. Nó *hứa hẹn* giải quyết được 2 vấn đề sau:
- Một nơi vừa để quản lý công việc vừa quản lý kiến thức
- Có thể xây dựng hệ thống quản lý cho mình ngay mà không cần dùng tới code trong thời gian đầu

Đây là lý do Kendy đã chọn Fibery, vì những cái rất cần trước mắt thì nó có thể đáp ứng. 

Đối với những người làm lập trình, cái gọi là low code chỉ là bình mới rượu cũ mà thôi. Nó từng có những cái tên như WYSIWYG, UI, rồi giờ thì nó được gọi là low code. Nó không được lòng người làm kỹ thuật cho lắm.

[Một người bình luận](https://discord.com/channels/686053708261228577/700466324840775831/1072284305893638214):
> Chúng được sinh ra chỉ để cho mục đích tiếp thị và khiến những người quản lý không có hiểu biết về kỹ thuật ra những quyết định tồi. 

[Một người khác](https://softwareengineering.stackexchange.com/questions/320227/what-is-low-code/320228#comment679977_320228):
> Theo kinh nghiệm của tôi, những công cụ này được mấy người dùng doanh nghiệp dùng cho đến khi họ tự dồn mình vào chân tường. Rồi sau đó lập trình viên được gọi đến để gỡ một mớ rác lỗi hỗn độn khổng lồ đầy những phức tạp không cần thiết.

Thật ra, việc đánh đổi giữa sự đơn giản (simplicity) và khả năng xử lý những yêu cầu phức tạp (complexity) là một trong [Những đánh đổi phổ biến trong việc phát triển phần mềm](Nh%E1%BB%AFng%20%C4%91%C3%A1nh%20%C4%91%E1%BB%95i%20ph%E1%BB%95%20bi%E1%BA%BFn%20trong%20vi%E1%BB%87c%20ph%C3%A1t%20tri%E1%BB%83n%20ph%E1%BA%A7n%20m%E1%BB%81m.md). Nhưng thứ [Lập trình viên khó chịu với hệ thống low code không phải vì nó ưu tiên sự tiện lợi và chi phí thấp cho người dùng, mà vì nó được tiếp thị như là một giải pháp hoàn hảo có thể giải quyết được mọi nhu cầu thực tế](L%E1%BA%ADp%20tr%C3%ACnh%20vi%C3%AAn%20kh%C3%B3%20ch%E1%BB%8Bu%20v%E1%BB%9Bi%20h%E1%BB%87%20th%E1%BB%91ng%20low%20code%20v%C3%AC%20n%C3%B3%20%C4%91%C6%B0%E1%BB%A3c%20ti%E1%BA%BFp%20th%E1%BB%8B%20nh%C6%B0%20l%C3%A0%20m%E1%BB%99t%20gi%E1%BA%A3i%20ph%C3%A1p%20ho%C3%A0n%20h%E1%BA%A3o%20c%C3%B3%20th%E1%BB%83%20gi%E1%BA%A3i%20quy%E1%BA%BFt%20%C4%91%C6%B0%E1%BB%A3c%20m%E1%BB%8Di%20nhu%20c%E1%BA%A7u%20th%E1%BB%B1c%20t%E1%BA%BF.md). Mà [Chấp nhận giải pháp mì ăn liền là đang mang nợ vào người](Ch%E1%BA%A5p%20nh%E1%BA%ADn%20gi%E1%BA%A3i%20ph%C3%A1p%20m%C3%AC%20%C4%83n%20li%E1%BB%81n%20l%C3%A0%20%C4%91ang%20mang%20n%E1%BB%A3%20v%C3%A0o%20ng%C6%B0%E1%BB%9Di.md).

Phải nói là điểm bán hàng độc nhất (unique selling point) của Fibery là sự đặt trọng tâm vào ý tưởng [Quản lý công việc và quản lý kiến thức không thể tách rời nhau](Qu%E1%BA%A3n%20l%C3%BD%20c%C3%B4ng%20vi%E1%BB%87c%20v%C3%A0%20qu%E1%BA%A3n%20l%C3%BD%20ki%E1%BA%BFn%20th%E1%BB%A9c%20kh%C3%B4ng%20th%E1%BB%83%20t%C3%A1ch%20r%E1%BB%9Di%20nhau.md) mà những ERP khác không làm được. Ngay tại trang chủ, Fibery đã tự giới thiệu bản thân là:
> If you've outgrown Jira, Notion, Airtable, and ClickUp — and are ready to replace them

Tức là nó hiểu rất rõ nhược điểm của đối thủ. Nhưng rốt cuộc thì **nó vẫn là một sản phẩm dựng sẵn** không khác gì các đối thủ của nó. Việc Kendy sử dụng nó là vì từ đầu Kendy đã ở trong tình trạng phải xây dựng hệ thống quản lý càng sớm càng tốt, và không có ai có thể hỗ trợ giải đáp các vấn đề về lập trình. Không thể nói nó là giải pháp tạm đủ, mà nó là sự thoả hiệp đỡ tệ hại nhất trong hoàn cảnh hiện tại. Con đường này là con đường bất đắc dĩ lắm mới phải đi. 

Xem thêm:: [Nhược điểm của Obsidian và Fibery](Nh%C6%B0%E1%BB%A3c%20%C4%91i%E1%BB%83m%20c%E1%BB%A7a%20Obsidian%20v%C3%A0%20Fibery.md)

## Nếu đã chấp nhận hỗ trợ Kendy miễn phí rồi, thì sao không dùng một ERP đàng hoàng luôn?
Do Kendy đã có nhiều thiết lập rất nhiều thứ trên Fibery rồi, nên giờ mà phải đập đi xây lại thì sợ tốn nhiều thời gian hơn là ráng xài giải pháp chắp vá này tiếp. Kendy cảm thấy vẫn cần ưu tiên nhiều thứ khác hơn là giải quyết sự khó chịu vô cùng này của mình.

## Chương trình đã xử lý ngôn ngữ tự nhiên (natural language processing — NLP) như thế nào?
- Dạng bài toán: **nhận dạng tên thực thể (named entity recognition)**, là bài toán con của bài toán **rút trích thông tin (information extraction)** 
- Hướng tiếp cận: **từ điển (dictionary)**, là hướng nhỏ hơn của tiếp cận **dựa trên quy tắc (rule-based)**
- Kỹ thuật tách từ: hoàn toàn dựa trên khai báo của người dùng

Từ khối dữ liệu đầu vào, chương trình xử lý để ra khối dữ liệu đầu ra. Xem thêm [Mô hình xử lý dữ liệu](https://lậptrình.quảcầu.cc/%F0%9F%91%8FTr%E1%BA%A5n%20K%E1%BB%B3/H%C6%B0%E1%BB%9Bng%20d%E1%BA%ABn%20s%E1%BB%AD%20d%E1%BB%A5ng%20Tr%E1%BA%A5n%20K%E1%BB%B3/3.%20Hi%E1%BB%83u%20code%20n%C3%B3i%20g%C3%AC/3.1%20M%C3%B4%20h%C3%ACnh%20x%E1%BB%AD%20l%C3%BD%20d%E1%BB%AF%20li%E1%BB%87u/?utm_source=CW+Obsidian%2C+qu%E1%BA%A3n+l%C3%BD+d%E1%BB%B1+%C3%A1n+v%C3%A0+c%C3%B4ng+c%E1%BB%A5+ngh%C4%A9+%C2%BB+L%C3%BD+do+vi%E1%BA%BFt+Tr%E1%BA%A5n+K%E1%BB%B3&utm_medium=vault&utm_campaign=Tr%E1%BA%A5n+K%E1%BB%B3&utm_content=th%C3%A0nh+ph%E1%BA%A9m).

## Tại sao không dùng các mô hình ngôn ngữ lớn (như ChatGPT) để phân loại thông tin? 
Lý do quan trọng nhất là **kết quả không đáng tin cậy**:
- Nếu nhu cầu của bạn là để **quản lý tài chính**, các mô hình ngôn ngữ lớn dựa trên thống kê như ChatGPT sẽ không cho ra tổng số tiền chính xác, trong khi đây là điều kiện quan trọng trong việc tiền bạc
- Nếu nhu cầu của bạn là để **tạo dữ liệu có cấu trúc từ dữ liệu phi cấu trúc**, thì các mô hình ngôn ngữ lớn không nhất thiết có cùng hệ thống phân loại (ontology) mà người dùng muốn xác lập. Nếu muốn đảm bảo nó ra kết quả đúng thì cũng phải nói cho nó hệ thống phân loại mà mình muốn, mà như vậy thì thì không cần phải dùng đến nó nữa

Tiếp cận dựa trên quy luật sẽ có hiệu quả nếu có ít các từ đồng âm hoặc đồng nghĩa, và cũng không có nhiều nhãn phân loại cho mỗi từ. Tức là ngữ cảnh (context) của câu nhập (prompt) thấp. Các mô hình ngôn ngữ lớn không phải là không đạt được kết quả tương đương khi có câu nhập không đòi hỏi phải có nhiều ngữ cảnh để hiểu, nhưng nếu so sánh với các yếu tố khác như đòi hỏi nhiều ngữ liệu và tài nguyên máy để huấn luyện, và không biết được kết quả đã được tạo sinh ra thế nào, thì tiếp cận dựa trên quy luật sẽ có lợi thế lớn.

Xem thêm:: [AI là định dạng ảnh mờ của web](AI%20l%C3%A0%20%C4%91%E1%BB%8Bnh%20d%E1%BA%A1ng%20%E1%BA%A3nh%20m%E1%BB%9D%20c%E1%BB%A7a%20web.md)

Nếu sử dụng ChatGPT thì còn có thêm những nhược điểm khác:
- Chậm
- Cần có mạng
- Phải gửi thông tin ra ngoài
- Chạy số lượng lớn thì phải tốn tiền

## Tại sao không gom tất cả các bài viết liên quan đến Trấn Kỳ vào cùng một tên miền riêng mà lại để chúng rải rác ở các tên miền khác nhau?
Lý do thành thực nhất là vì các tên miền khác nhau được tối ưu cho mục tiêu khác nhau. Đặc biệt là như ở bài viết này và ở phần hướng dẫn sử dụng cho Trấn Kỳ CLI, khi mà chúng có nhiều liên kết với các ghi chú khác. Muốn gom các bài viết lại một chỗ thì phải dành thêm thời gian code để đảm bảo liên kết không bị hỏng. Bọn mình thấy rằng còn nhiều thứ khác cần làm hơn. 

Nói thêm về phần hướng dẫn sử dụng cho Trấn Kỳ CLI. Nó nằm trong trang https://lậptrình.quảcầu.cc. Mục tiêu của nó là tạo ra [một giàn giáo nhận thức](Gi%C3%A0n%20gi%C3%A1o%20nh%E1%BA%ADn%20th%E1%BB%A9c%20c%E1%BA%A7n%20ph%E1%BA%A3i%20tu%E1%BB%B3%20bi%E1%BA%BFn%20v%E1%BB%9Bi%20qu%C3%A1%20tr%C3%ACnh%20hi%E1%BB%83u%20bi%E1%BA%BFt%20c%E1%BB%A7a%20ng%C6%B0%E1%BB%9Di%20d%C3%B9ng.md) cho những người cần phải tự học lập trình. Thường các phần mềm đều có landing page riêng, nhưng bọn mình chưa thấy một trang nào hướng dẫn người chưa biết gì từ những bước rất nhỏ nhặt cả. Tất cả đều mặc định người đọc đã có một kiến thức nhất định về lập trình. Bọn mình muốn làm nhiều hơn thế.

| Nội dung                                                                                                                                                                                                                                                                                                                                                                                                          | Đối tượng chính                                                                                                               | Tên miền                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| [Trang chủ Trấn Kỳ](https://tranky.deno.dev)                                                                                                                                                                                                                                                                                                                                                                      | Người bận rộn không có thời gian phân loại dữ liệu nhưng cần có báo cáo chi tiết                                              | https://tranky.deno.dev    |
| [Giới thiệu về Trấn Kỳ](https://tranky.deno.dev/lagi)                                                                                                                                                                                                                                                                                                                                                             | Người chưa biết gì về Trấn Kỳ                                                                                                 | https://tranky.deno.dev    |
| [Giới thiệu về Trấn Kỳ CLI. Phiếu đăng ký](https://quảcầu.cc/tich-hop-tran-ky-vao-he-thong-cua-ban/)                                                                                                                                                                                                                                                                                                              | Người cần tổ chức dữ liệu, xây dựng PKM, ERP, giàn giáo nhận thức cho mình. Người cần học lập trình                           | https://quảcầu.cc          |
| [Hướng dẫn sử dụng Trấn Kỳ CLI](https://lậptrình.quảcầu.cc/%F0%9F%91%8FTr%E1%BA%A5n%20K%E1%BB%B3/H%C6%B0%E1%BB%9Bng%20d%E1%BA%ABn%20s%E1%BB%AD%20d%E1%BB%A5ng%20Tr%E1%BA%A5n%20K%E1%BB%B3/?utm_source=CW+Obsidian%2C+qu%E1%BA%A3n+l%C3%BD+d%E1%BB%B1+%C3%A1n+v%C3%A0+c%C3%B4ng+c%E1%BB%A5+ngh%C4%A9+%C2%BB+L%C3%BD+do+vi%E1%BA%BFt+Tr%E1%BA%A5n+K%E1%BB%B3&utm_medium=vault&utm_campaign=Tr%E1%BA%A5n+K%E1%BB%B3) | Người cần tổ chức dữ liệu, xây dựng PKM, ERP, giàn giáo nhận thức cho mình. Người cần học lập trình                           | https://lậptrình.quảcầu.cc |
| [Lý do viết Trấn Kỳ](L%C3%BD%20do%20vi%E1%BA%BFt%20Tr%E1%BA%A5n%20K%E1%BB%B3.md)                                                                                                                                                                                                                                                                                                                                                                                            | Người cần tổ chức dữ liệu, xây dựng PKM, ERP, giàn giáo nhận thức cho mình. Người làm phát triển sản phẩm, khởi nghiệp, dự án | https://obsidian.quảcầu.cc |
| [Kế hoạch phát triển Trấn Kỳ](%F0%9F%93%90%20D%E1%BB%B1%20%C3%A1n/Tr%E1%BA%A5n%20K%E1%BB%B3/4%20Th%C3%A0nh%20ph%E1%BA%A9m/Chi%E1%BA%BFn%20l%C6%B0%E1%BB%A3c/K%E1%BA%BF%20ho%E1%BA%A1ch%20ph%C3%A1t%20tri%E1%BB%83n%20Tr%E1%BA%A5n%20K%E1%BB%B3.md)                                                                                                                                                                                                                                                                                                                                                                                   | Người cần tổ chức dữ liệu, xây dựng PKM, ERP, giàn giáo nhận thức cho mình. Người làm phát triển sản phẩm, khởi nghiệp, dự án | https://obsidian.quảcầu.cc |
| [Mô hình kinh doanh Trấn Kỳ](./M%C3%B4%20h%C3%ACnh%20kinh%20doanh%20Tr%E1%BA%A5n%20K%E1%BB%B3.md)                                                                                                                                                                                                                                                                                                                                                                                   | Người cần tổ chức dữ liệu, xây dựng PKM, ERP, giàn giáo nhận thức cho mình. Người làm phát triển sản phẩm, khởi nghiệp, dự án | https://obsidian.quảcầu.cc |

[Sản phẩm là sự bồi tụ của các dòng hải lưu nhu cầu và kết tinh của kiến thức](S%E1%BA%A3n%20ph%E1%BA%A9m%20l%C3%A0%20s%E1%BB%B1%20b%E1%BB%93i%20t%E1%BB%A5%20c%E1%BB%A7a%20c%C3%A1c%20d%C3%B2ng%20h%E1%BA%A3i%20l%C6%B0u%20nhu%20c%E1%BA%A7u%20v%C3%A0%20k%E1%BA%BFt%20tinh%20c%E1%BB%A7a%20ki%E1%BA%BFn%20th%E1%BB%A9c.md)
Xem thêm:: [Người dùng bấm bao nhiêu lần cũng được, miễn là tự tin mình đang đi đúng hướng](Ng%C6%B0%E1%BB%9Di%20d%C3%B9ng%20b%E1%BA%A5m%20bao%20nhi%C3%AAu%20l%E1%BA%A7n%20c%C5%A9ng%20%C4%91%C6%B0%E1%BB%A3c,%20mi%E1%BB%85n%20l%C3%A0%20t%E1%BB%B1%20tin%20m%C3%ACnh%20%C4%91ang%20%C4%91i%20%C4%91%C3%BAng%20h%C6%B0%E1%BB%9Bng.md)

## Một số link hữu ích
- [Obsidian to Fibery - Questions - n8n](https://community.n8n.io/t/obsidian-to-fibery/29084 "Obsidian to Fibery - Questions - n8n")
- [icoxfog417/awesome-financial-nlp: Researches for Natural Language Processing for Financial Domain](https://github.com/icoxfog417/awesome-financial-nlp "icoxfog417/awesome-financial-nlp: Researches for Natural Language Processing for Financial Domain")
