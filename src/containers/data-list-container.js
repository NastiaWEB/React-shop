import React, { Component } from "react";
import { connect } from "react-redux";
import { withService } from "../components/hoc";
import { fetchProducts } from "../actions";
import { compose } from "../utils";
import Loader from "../components/loader";
import ErrorIndicator from "../components/error-indicator";
import ProductsList from "../components/products-list";

class DataListContainer extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { Wrapped, data, loading, error } = this.props;
    if (loading) {
      return <Loader />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    return <Wrapped data={data} />;
  }
}
const mapStateToProps = ({ data, loading, error }) => {
  return { data, loading, error };
};
const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchProducts: fetchProducts(dispatch, bookstoreService)
  };
};
const onWrapper = Wrapped => Comp => <Comp Wrapped={Wrapped} />;
export default compose(
  onWrapper(),
  withService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(DataListContainer);
