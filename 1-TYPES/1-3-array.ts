{
  //Array
  const fruits: string[] = ["🍎", "🍌"];
  const scroes2: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {
    // 주어진 데이터 함수 내부에서 변경 불가
    // fruits.push('🍑');
  }

  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123

  const [name, age] = student;
}
