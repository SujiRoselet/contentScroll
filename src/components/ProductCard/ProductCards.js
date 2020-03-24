import React from "react";
import { connect } from "react-redux";
import { GET_MORE, INCREMENT_PAGE_SIZE } from "../../redux/constants";

class Cards extends React.Component {
  componentWillMount() {
    this.scrollListener = window.addEventListener("scroll", e => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 1
      ) {
        this.props.incrementPage();
        this.props.nextData();
      }
    });
  }

  loadImage(product) {
    try {
      require("../../Slices/" + product["poster-image"]);
    } catch (error) {
      return require("../../Slices/placeholder_for_missing_posters.png");
    }
    return require("../../Slices/" + product["poster-image"]);
  }

  render() {
    const productList = this.props.productList;
    const ProductCard = productList.map((product, index) => (
      <div className="w-1/3 px-2 pb-8" key={index}>
        <div className="bg-black">
          <img
            src={this.loadImage(product)}
            alt={require("../../Slices/placeholder_for_missing_posters.png")}
          />
        </div>
        <h3 className="text-white">{product["name"]}</h3>       
      </div>
    ));
    return (
      <div>
        {productList && productList.length > 0 ? (
          <div className="bg-black">
            <div className="px-4">
              <div className="flex  flex-wrap -mx-2">{ProductCard}</div>{" "}
            </div>
          </div>
        ) : (
          <div className="text-center pt-20 ">
            <h1>No Results Found !</h1>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    productList: state.productList
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    incrementPage: () => {
      dispatch({ type: INCREMENT_PAGE_SIZE });
    },
    nextData: () => {
      dispatch({ type: GET_MORE });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
