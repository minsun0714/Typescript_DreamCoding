{
  // // Javascript 💩
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // Typescript ✨
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // Javascript 💩
  // function jsFetchNum(id) {
  //   // code...
  //   // code...
  //   // code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }
  // // Typescript ✨
  // function fetchNum(id: string): Promise<number> {
  //   // code...
  //   // code...
  //   // code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // Javascript => Typescript
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "Jobs");
  printName("Ellie");
  printName("Anna");

  // Default parameter
  function printMessage(message: string = "default Message") {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...nums: number[]): number {
    return nums.reduce((s, v) => s + v, 0);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
