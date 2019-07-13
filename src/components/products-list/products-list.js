import React, { Component } from "react";
import ProductItem from "../product-item";
import { connect } from "react-redux";
import { withService } from "../hoc";
import { fetchProducts, onAddedToCart } from "../../actions";
import { compose } from "../../utils";
import Loader from "../loader";
import ErrorIndicator from "../error-indicator";

class DataListContainer extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { data, loading, error, onAddedToCart } = this.props;
    if (loading) {
      return <Loader />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    return (
      <div className="products_list tac flex wrap">
        {data.map(product => {
          return (
            <ProductItem
              key={product.id}
              product={product}
              onAddedToCart={() => onAddedToCart(product.id)}
            />
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = ({ dataList: { data, loading, error } }) => {
  return { data, loading, error };
};
const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchProducts: fetchProducts(dispatch, bookstoreService),
    onAddedToCart: id => dispatch(onAddedToCart(id))
  };
};
export default compose(
  withService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(DataListContainer);
