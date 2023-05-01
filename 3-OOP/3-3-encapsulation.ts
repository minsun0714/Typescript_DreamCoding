{
  type CoffeeCup = {
    shots: number;
    hasMilk: false;
  };
  /**
   * 접근 제한자
   * public
   * private
   * protected : 클래스를 상속한 자식 클래스에서만 접근이 가능하도록 함. private과 마찬가지로 외부에서는 접근 불가능.
   */

  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT = 7; // class level
    private coffeeBeans: number = 0;

    // 생성자를 private으로 만들어서 static level에서만 객체를 만들도록 권장할 수도 있음.
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // class level
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      // 이 메서드로만 객체의 커피빈을 변경 가능, public은 굳이 명시 안해도 괜찮다.
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    public makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("커피콩이 부족합니다.");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      console.log("남은 coffeeBean: ", this.coffeeBeans);
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const coffeeMachine1 = CoffeeMaker.makeMachine(40);
  // coffeeMachine1.coffeeBeans = -100 // object 상태에 임의로 접근해서 변경할 위험이 있음.
  console.log(coffeeMachine1);
  coffeeMachine1.fillCoffeeBeans(80);
  console.log(coffeeMachine1);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("입력한 나이가 유효하지 않습니다.");
      }
      this.internalAge = num;
    }
    constructor(public firstName: string, private lastName: string) {}
  }
  const user = new User("Steve", "Jobs");
  user.firstName = "Ellie";
  console.log(user);
  console.log(user.fullName);
  user.age = 100;
  console.log(user.age);
}
