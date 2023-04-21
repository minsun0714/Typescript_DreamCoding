{
  /**
   * Javascript
   * Primitive: number, string, boolean, bigInt, symbol, null, undefined
   * Object: function, array...
   */

  // number
  const num: number = 2423;

  // string
  const str: string = "hello";

  // boolean
  const bool: boolean = false;

  // undefined : 값이 있는지 없는지도 명확하게 결정되지 않음
  let name: undefined; // 💩 단독적으로 undefined 타입을 줄 일은 없음
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    // 무슨 타입의 데이터를 리턴할 것이냐
    return undefined;
  }
  // null : 비어 있다.
  let person: null; // 💩 단독적으로 null 타입을 줄 일은 없음
  let person2: string | null;

  // unknown 💩
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // 💩

  // never
  function throwError(message: string): never {
    // message => server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  // object
  let obj: object; //💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "Ellie" });
  acceptSomeObject({ animal: "dog" });
}
