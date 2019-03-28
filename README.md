# 19/03/27

@Output

자식에서 일어난 이벤트를 감지해 부모로 전달해줌.

주된 역활은 @Output() remove = new EventEmitter<User>();에서 발생한다.
각 행마다 존제하는 remove.emit($emit() - 특정 범위를 이벤트로 부모에게 전달)을 이용하여 이벤트와 함께 해당 행의 user를 전달.
부모 컴포넌트는 user를 받아 filter를 이용해 해당 id를 찾아 삭제한다.
  
