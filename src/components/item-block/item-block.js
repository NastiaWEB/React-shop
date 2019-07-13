import React, { Fragment } from "react";
const ItemBlock = ({ product }) => {
  const { title } = product;
  return (
    <Fragment>
      <a href="/"> {title} </a>
    </Fragment>
  );
};
export default ItemBlock;
