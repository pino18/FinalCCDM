// reducers.js
const initialState = {
  user: {"email": "pino@gmail.com", "id": "2", "password": "12345", "username": "jpinor"},
};

const loginReducer = (state = initialState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
  
  export default loginReducer;
  