export const increment = () => {
  return {
    type: "INCREMENT",
    payload: "Number increased by one.",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
    payload: "Number decreased by one.",
  };
};
