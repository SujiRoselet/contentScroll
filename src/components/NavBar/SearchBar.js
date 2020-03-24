import React from "react";
import back from "../../Slices/Back.png";
import search from "../../Slices/search.png";

import { connect } from "react-redux";
import { FITER_CARDS, GET_CARDS } from "../../redux/constants";

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  filterCards(e) {
    this.setState({ search: e.target.value });
    if (!e.target.value) {
      this.props.resetFilter();
    } else {
      this.props.filterCards(e.target.value);
    }
  }

  render() {
    return (
      <div className="bg-black">
        <header className="flex items-center justify-between px-4 py-3">
          <div>
            <img className="h-8" src={back} alt="Back" />
          </div>
          <input
            type="search"
            value={this.state.search}
            onChange={event => this.filterCards(event)}
            className=" w-2/3 bg-black text-white appearance-none border border-black"
            placeholder="Romantic Comedy"
          ></input>
          <div>
            <img className="h-8" src={search} alt="Search" />
          </div>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    filterCards: filterBy => {
      dispatch({ type: FITER_CARDS, filterBy });
    },
    resetFilter: () => {
      dispatch({ type: GET_CARDS });
    }
  };
};

export default connect(null, mapDispatchToProps)(Bar);
