import React, { Component } from "react";
import { compose } from "../../utils";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions";
import { withService } from "../hoc";

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { data } = this.props;
    return (
      <div className="sidebar rounded_wrapper">
        <ul>
          {data.map(product => {
            return (
              <li key={product.id}>
                <a href="/"> {product.title} </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = ({ data }) => {
  return {
    data
  };
};
const mapDispatchToProps = (dispatch, { bookStoreService }) => {
  return {
    fetchProducts: fetchProducts(dispatch, bookStoreService)
  };
};
export default compose(
  withService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ItemList);
