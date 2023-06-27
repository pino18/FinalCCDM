export const login = (username, password) => {
    return {
      type: 'LOGIN',
      payload: { username, password }
    };
  };

  export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user,
  });