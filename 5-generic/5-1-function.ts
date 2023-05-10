{
  // null인지 체크하려고 만든 함수인데 number type, string type 등등 type 별로 다 nullCheck을 하는 함수를 만들기에는 번거롭다.
  //   function checkNotNull(arg: number | null): number {
  //     if (arg == null) {
  //       throw new Error("not valid number");
  //     }
  //     return arg;
  //   }
  // any는 사용하지 않는 것이 좋음.
  function checkNotNullAny(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number");
    }
    return arg;
  }

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number");
    }
    return arg;
  }

  const number = checkNotNull(123);
  const bool: boolean = checkNotNull(true);

  console.log(number);
  console.log(bool);
}
