import React, { Component } from "react";
export default class CartItem extends Component {
  render() {
    const {cartid,item,image, price, total, count } = this.props.item;
    const { increment, decrement, removeItem } = this.props.value;

    return (
      <div className="row my-1 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={image}
            style={{ width: "5rem", heigth: "5rem" }}
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <span className="d-lg-none">product :</span> {item}
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <strong>
          price :<span className="fa fa-inr fa-lg">{price}</span>
          </strong>
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
          <div className="d-flex justify-content-center">
            <div>
              <span
                className="btn btn-black mx-1"
                onClick={() => {
                  return decrement(cartid);
                }}
              >
                -
              </span>
              <span className="btn btn-black mx-1">{count}</span>
              <span
                className="btn btn-black mx-1"
                onClick={() => {
                  return increment(cartid);
                }}
              >
                +
              </span>
            </div>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <div className=" cart-icon" onClick={() => removeItem(cartid)}>
            <i className="fa  fa-trash fa-lg fa-warning" />
          </div>
        </div>

        <div className="col-10 mx-auto col-lg-2 ">
          <strong>item total : <span className="fa fa-inr fa-lg">{total}</span></strong>
        </div>
      </div>
    );
  }
}