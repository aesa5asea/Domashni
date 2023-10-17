const initialState = {
  greeting: "Hi!",
  starwars: "GK: Hello there. GG:General Kenobi. You are a bold one.",
};

const SayHelloReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAY_HELLO":
      return {
        ...state,
        greeting: action.payload,
      };
    case "GENERAL_KENOBI":
      return {
        ...state,
        starwars: action.payload,
      };
    default:
      return state;
  }
};

export default SayHelloReducer;
