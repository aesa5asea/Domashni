import { BUY_CAKE, RESTOCK_CAKES, WRITE_REQUEST } from "../constants/CakeConstants";

const initialState = {
  cakes: 10,
  request: undefined,
  //message:undefined ->
  //da se dodade varijabla koja koga ke se lklikne povekje torti nego sto
  //ima da prikazhe poraka za greska
  //pr, klik na buy 3 cakes a ima samo 2 message: not enough cakes. only 2 cakes left
  //da se trgne disable za so if else ako odime
};

const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        cakes: state.cakes - action.payload,
      };
    case RESTOCK_CAKES:
      return {
        ...state,
        cakes: state.cakes + action.payload,
      };
    case WRITE_REQUEST:
      return {
        ...state,
        request: action.payload,
      };
    default:
      return state;
  }
};

export default CakeReducer;
