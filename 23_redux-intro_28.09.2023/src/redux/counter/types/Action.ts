export type Action =
    | {
          type: "counter/minus";
          payload: number;
      }
    | {
          type: "counter/plus";
          payload: number;
      };
