import { BUY_CAKE, RESTOCK_CAKES, WRITE_REQUEST } from "./../constants/CakeConstants";

export const buyCake = (numOfCakes) => {
  return {
    type: BUY_CAKE,
    payload: numOfCakes,
  };
};

export const restockCakes = () => {
  return {
    type: RESTOCK_CAKES,
    payload: 10,
  };
};

export const setRequest = (reqest) => {
  return {
    type: WRITE_REQUEST,
    payload: reqest,
  };
};
