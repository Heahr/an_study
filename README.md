# 19/4/4

라우터 구성하기.

app.module에서 3개의 라우터를 따로 두어 구성하는 형식으로 진행했으며,
```
app.module <- app-routing.module
           <- customer.module     <- customer-routing.module
           <- user.module         <- customer-routing.module
```
로 구성하여 각각의 모듈에 맞는 범위를 지정하고 routing함으로써 가독성향상.
해당파트나 메뉴별로 나눌때 사용할것.
