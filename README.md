# DUY COIN

# 2022-07-09

## login admin
## **<font color="blue">Thinking</font>**

# <font color="RED"> Run Migrate</font>

- <p><a href="http://knexjs.org/guide/migrations.html" title="Title"> See More</a></p>

## create migrate

- knex migrate:make migration_create_coin

## run migrate

- npx knex migrate:latest
- npx knex migrate:up 20220630074246_create_coin.js
- npx knex migrate:latest

## run seed

- npx knex seed:run

## columns

- orders_id: là id của giao dịch mua bán .

## Order

- buy, sell: trừ phí bằng coin
1. Mua  (Post : /api/orders/buy)
2. Bán  (Post : api/orders/sell)
- mỗi đồng coin mua bán sẽ có nhiều network 
- mỗi network sẽ có 1 fee khác nhau

## Coin

- Tạo coin (Post : /api/coin/create)
 1. Thêm name , code , avatar , giá mua và giá bán của đồng coin
 2. Giá coin thị trường sẽ được lấy từ các sàn về
- Cập nhật coin (Put : /api/coin/update/{id})
1. params id là id của coin
2. Cập nhật giá mua , bán , avatar của coin
 
##  Card
- Là danh thiếp của nhân viên
- Tạo danh thiếp (Post : /api/card/create)
1. Thêm tên , số điện thoại , nghề nghiệp của nhân viên
- Cập nhật danh thiếp (Put : /api/card/update/{id})
1. params id là id của card
2. Cập nhật tên và thông tin của danh thiếp

