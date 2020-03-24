import {
  GET_CARDS,
  FITER_CARDS,
  GET_MORE,
  INCREMENT_PAGE_SIZE
} from "../redux/constants";
import products1 from "../API/CONTENTLISTINGPAGE-PAGE1.json";
import products2 from "../API/CONTENTLISTINGPAGE-PAGE2.json";
import products3 from "../API/CONTENTLISTINGPAGE-PAGE3.json";

const defaultState = {
  productList: products1.page["content-items"].content,
  page: 1
};
const AppReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT_PAGE_SIZE:
      return {
        ...state,
        page: state.page + 1
      };
    case GET_CARDS: {
      return {
        ...state,
        productList: defaultState.productList
      };
    }
    case GET_MORE: {
      let page = state.page;
      let file = {};
      if (page === 2) {
        file = products2;
      } else if (page === 3) {
        file = products3;
      }
      if (file && Object.keys(file).length === 0) {
        return {
          ...state,
          productList: state.productList
        };
      } else {
        let data = state.productList.concat(file.page["content-items"].content);
        return {
          ...state,
          productList: data
        };
      }
    }
    case FITER_CARDS: {
      const filteredResults = state.productList.filter(Pcard => {
        return (
          Pcard.name.toLowerCase().startsWith(action.filterBy.toLowerCase()) ===
          true
        );
      });

      return {
        ...state,
        productList: filteredResults
      };
    }
    default: {
      return state;
    }
  }
};
export default AppReducer;
