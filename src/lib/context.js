import React, { createContext, useState } from 'react';

const Context = createContext();

function Provider({ children }) {
  const initialState = {
    userID: false,
    user: undefined,
    loading: true,
    authenticated: false,
  };
  const [state] = useState(initialState);
  return (
    <Context.Provider
      value={{
        state,
      }}
    >
      {children}
    </Context.Provider>
  );
}

const { Consumer } = Context;

export { Provider, Consumer, Context };
