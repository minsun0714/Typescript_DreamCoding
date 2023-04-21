/**
 * Type Inference : 프로젝트에서는 웬만하면 타입 추론에 의존하지 말고 타입을 명시하는 습관을 들여라. 팀원들과 소통하여 언제 타입을 명시하고 언제 명시하지 않을지 결정하기도 함.
 */
let text = "hello";
text = "hi";
function print(message = "helllo") {
  console.log(message);
}
print("hello");

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);
