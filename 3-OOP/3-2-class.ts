type CoffeeCup = {
  shots: number;
  hasMilk: false;
};

class CoffeeMaker {
  static BEANS_GRAM_PER_SHOT = 7; // class level
  coffeeBeans: number = 0;

  constructor(coffeeBeans: number) {
    this.coffeeBeans = coffeeBeans;
  }

  // class level
  static makeMachine(coffeeBeans: number): CoffeeMaker {
    return new CoffeeMaker(coffeeBeans);
  }

  makeCoffee(shots: number): CoffeeCup {
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

const coffeeMachine1 = new CoffeeMaker(40); // instance인 커피 머신
console.log(coffeeMachine1);
console.log(coffeeMachine1.makeCoffee(3));
const coffeeMachine2 = CoffeeMaker.makeMachine(50); // class level에서의 커피 머신
console.log(coffeeMachine2);
