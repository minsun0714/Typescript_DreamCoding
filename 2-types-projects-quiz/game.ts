/**
 * Let's make a game 🕹
 */
let position = { x: 0, y: 0 };
type Direction = "up" | "down" | "left" | "right";
interface IPosition {
  x: number;
  y: number;
}
function move(direction: Direction): IPosition {
  switch (direction) {
    case "up":
      position.y++;
      return position;
    case "down":
      position.y--;
      return position;
    case "left":
      position.x--;
      return position;
    case "right":
      position.x++;
      return position;
    default:
      throw new Error("사용할 수 없는 방향입니다.");
  }
}

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
