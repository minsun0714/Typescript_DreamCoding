{
  /**
   * Enum
   */
  //JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript (Enum도 가능한 한 쓰지 마라. 타입이 정확하게 지정되지 않음. 다른 타입의 값으로 재할당도 가능)
  //   enum DAYS {
  //     Monday = "monday",
  //     Tuesday = "tuesday",
  //     Wednesday = "wednesday",
  //     Thursday = "thursday",
  //     Friday = "friday",
  //     Saturday = "saturday",
  //     Sunday = "sundays",
  //   }
  enum DAYS {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(DAYS.Monday);
  let day = DAYS.Friday;
  day = DAYS.Tuesday;
  day = 111111;
  console.log(day); // 값을 정하지 않으면 숫자가 출력됨

  // Enum 대신 union을 쓰자.
  type DaysOfWeek =
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";

  let dayOfWeek: DaysOfWeek = "Saturday";
  //   dayOfWeek = 111111; <- Enum과 달리 오류 발생

  // 웹 클라이언트에서 다른 모바일 클라이언트와 의사소통할 때에는 (모바일 클라이언트에서 사용하는 네이티브 프로그래밍 언어에서는 UNION 타입을 표현할 수 있는 방법이 없기 때문에) Enum 타입을 써야할 때도 있음
}
