import { useReducer, useCallback } from "react";
import { UserContext } from ".";

const INITIAL_STATE = {
    userName: undefined,
    isAuthorized: false
};

function reducer (state, {type, payload}) {
    switch (type) {
        case 'login':
            return {
                userName: payload,
                isAuthorized: true
            }
        case 'logout':
            return INITIAL_STATE;
        default: return state;
    }
}

export const UserContextProvider = ({ children }) => {
  const [{userName, isAuthorized}, dispatch] = useReducer(reducer, INITIAL_STATE);

  const login = useCallback((userName) => {
    dispatch({type: 'login', payload: userName})
  }, []);

  const logout = useCallback(() => dispatch({ type: 'logout' }), []);

  const value = {
    userName,
    isAuthorized,
    login,
    logout
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};