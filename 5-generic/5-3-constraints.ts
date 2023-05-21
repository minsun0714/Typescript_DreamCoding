{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log("full time!!");
    }

    workFullTime() {}
  }
  class PartTimeEmployee implements Employee {
    pay() {
      console.log("part time!!");
    }

    workPartTime() {}
  }

  // 💩 세부적인 type을 인자로 받아서 추상적인 타입으로 다시 return하는 함수는 💩💩💩
  // function pay(employee: Employee): Employee {
  //   employee.pay();
  //   return employee;
  // }

  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const ellie = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  ellie.workFullTime();
  bob.workPartTime();

  // pay 함수가 Employee type을 return 하기 때문에 세부 클래스의 정보를 잃어버림.
  // 더 이상 workFullTime, workPartTime 메서드는 사용 불가.
  const ellieAfterPay = pay(ellie);
  const bobAfterPay = pay(bob);
  // Property 'workPartTime' does not exist on type 'Employee'.
  // bobAfterPay.workPartTime()

  bobAfterPay.workPartTime();
}
