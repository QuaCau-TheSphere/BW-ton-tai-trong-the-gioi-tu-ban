---
share: true
created: 2025-03-27T17:13
updated: 2025-11-03T17:06
---
[Danh mục tài khoản và ý nghĩa bảng cân đối của quỹ](../../../%F0%9F%93%90D%E1%BB%B1%20%C3%A1n/Gi%C3%BAp%20nhau%20tho%C3%A1t%20n%E1%BB%A3/Qu%E1%BB%B9/Danh%20m%E1%BB%A5c%20t%C3%A0i%20kho%E1%BA%A3n%20v%C3%A0%20%C3%BD%20ngh%C4%A9a%20b%E1%BA%A3ng%20c%C3%A2n%20%C4%91%E1%BB%91i%20c%E1%BB%A7a%20qu%E1%BB%B9.md)

| Trường được dùng | Thông tin                       | Cách phân loại            |
| ---------------- | ------------------------------- | ------------------------- |
| Mô tả            | Tên cửa hàng \| Tên món hàng    |                           |
| Tài khoản        | Nơi lưu trữ tiền, Loại sản phẩm | Theo ngành nghề, sản phẩm |
| Tag              | Tên sự kiện                     | Theo nhu cầu              |
| Chú thích        |                                 |                           |

Giao dịch, sự kiện, thanh toán

- Một sự kiện có thể có nhiều giao dịch một món đồ, có thể trải dài nhiều ngày, nhiều tài khoản
- Một mục đích có thể có nhiều
- Giao dịch có thể có nhiều món hàng (đi chợ)

Transaction thì liệt kê từng món đồ cũng tiện. Nhưng vì posting là sự biến đổi của tài khoản, nên cũng không nên làm vậy 

LSP:
- Đổi alias ở tất cả mọi nơi 
- Đổi tên account ở tất cả mọi nơi 
- Khai báo account và alias mới ngay trong posting

Dùng alias trong posting thì sau này đổi danh mục cũng tiện, nhưng phải khai báo 2 lần ở account và alias. Lúc dùng app thì dễ dùng dạng đầy đủ hơn, đặc biệt là khi nó là mới

|                              | Dạng đầy đủ    | Alias        |
| ---------------------------- | -------------- | ------------ |
| CLI                          | ❌             | ✔            |
| Dùng trên app                | ✔              | ✔            |
| Dùng nhiều danh mục cùng lúc | ❌             | ✔            |
| Khai báo một lần             | ✔              | ❌           |
|                              | Nói nhóm chung | Nói món hàng |


include thì dùng app không gợi ý?

[Tài khoản có thể được phân loại theo người sở hữu, nơi lưu tiền, mục đích sử dụng](../../../%E2%9A%A1Hi%E1%BB%83u%20bi%E1%BA%BFt%20s%C3%A2u/Ng%C3%A0nh%20ngh%E1%BB%81%20c%E1%BB%A5%20th%E1%BB%83/K%E1%BA%BF%20to%C3%A1n/B%E1%BA%A3n%20ch%E1%BA%A5t%20to%C3%A1n%20h%E1%BB%8Dc,%20h%E1%BB%87%20th%E1%BB%91ng%20th%C3%B4ng%20tin/T%C3%A0i%20kho%E1%BA%A3n%20c%C3%B3%20th%E1%BB%83%20%C4%91%C6%B0%E1%BB%A3c%20ph%C3%A2n%20lo%E1%BA%A1i%20theo%20ng%C6%B0%E1%BB%9Di%20s%E1%BB%9F%20h%E1%BB%AFu,%20n%C6%A1i%20l%C6%B0u%20ti%E1%BB%81n,%20m%E1%BB%A5c%20%C4%91%C3%ADch%20s%E1%BB%AD%20d%E1%BB%A5ng.md). Chỉ có thể assertion ở nơi lưu tiền

Thu nhập là số âm. Nếu xem tài khoản đó là thứ mình quan tâm thì chỉ là sự chuyển đổi giữa các tài khoản. Nên không để kiểu là R được. Nhưng để như vậy thì có mấy lệnh sẽ tiện

## Xem số tiền chuyển vào
```
hledger reg --related "" 
```

```
2025-09-24
  expenses:primary:category  1    ; secondary:foo:bar, tertiary:baz:qux
  assets

$ hledger bal -N -t --no-elide expenses
                   1  expenses
                   1    primary
                   1      category
$ hledger bal -N -t --no-elide expenses --pivot secondary
                   1  foo
                   1    bar
$ hledger bal -N -t --no-elide expenses --pivot tertiary
                   1  baz
                   1    qux

```

## Thêm
```
hledger accounts --directive --undeclared >> $env:LEDGER_FILE
```
https://joyful.com/hledger+workflow+2025