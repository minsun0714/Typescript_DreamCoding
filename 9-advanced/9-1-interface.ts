{
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // class ⭐️
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
  }

  // Extends
  interface ZpositionInterface extends PositionInterface {
    z: number;
  }
  type ZPosition = PositionType & { z: number };

  // Only interfaces can be merged.
  interface PositionInterface {
    z: number;
  }
  // ❌
  //   type ZPositionType = {
  //     z: number;
  //   }

  // Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };

  type Name = Person["name"]; //string
  type NumberType = number;
  type Direction = "left" | "right";
}
