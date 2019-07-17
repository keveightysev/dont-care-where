import moment from 'moment';

export const initialState = {
  user: {},
  preferences: {
    maxTemp: 85,
    minTemp: 50,
    humidity: 50,
    pop: [],
  },
  date: moment().format('YYYY-MM-DD'),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_DATE':
      return { ...state, date: action.payload };
    case 'CHANGE_PREFERENCES':
      return {
        ...state,
        preferences: { ...state.preferences, ...action.payload },
      };
    case 'UPDATE_POP':
      return {
        ...state,
        preferences: { ...state.preferences, pop: action.payload },
      };
    default:
      return state;
  }
};
