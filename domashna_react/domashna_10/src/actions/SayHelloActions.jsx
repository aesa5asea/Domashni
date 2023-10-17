export const sayHello = () => {
  // <- Action creator
  return {
    type: "SAY_HELLO",

    payload: "Hi and welcome to my First Redux App", // <- Action
  };
};

export const generalKenobi = () => {
  return {
    type: "GENERAL_KENOBI",

    payload: "GK: Hello there. GG:General Kenobi. You are a bold one.",
  };
};
