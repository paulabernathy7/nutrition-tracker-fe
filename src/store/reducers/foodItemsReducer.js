import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCH_GET_ONE_START,
  FETCH_GET_ONE_FAILURE,
  FETCH_GET_ONE_SUCCESS,
  POST_FOOD_FAILURE,
  POST_FOOD_SUCCESS
} from "../actions/foodItemAction";

const initialState = {
  getting: false,
  got: false,
  error: "",
  items: [],
  item: []
};

export const foodItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        getting: false,
        got: false
      };
    case FETCH_START:
      return {
        ...state,
        error: "",
        getting: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        error: "",
        getting: false,
        got: true,
        items: action.payload
      };
    case FETCH_GET_ONE_SUCCESS:
      return {
        ...state,
        error: "",
        getting: false,
        got: true,
        item: action.payload
      };
    case FETCH_GET_ONE_START:
      return {
        ...state,
        error: "",
        getting: true,
        got: false
      };
    case FETCH_GET_ONE_FAILURE:
      return {
        ...state,
        error: "Error",
        getting: false,
        got: false
      };
    case POST_FOOD_SUCCESS:
      return {
        ...state,
        error: "",
        getting: false,
        got: true,
        food_log: action.payload
      };
    case POST_FOOD_FAILURE:
      return {
        ...state,
        error: action.payload,
        getting: false,
        got: false
      };
    default:
      return state;
  }
};
