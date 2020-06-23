import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class CartTotals extends Component {
  render() {
    const {CartSubTotal,CartTax,CartTotal,cart, clearCart} = this.props.value;
     return (
      <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to="/home"><button className="btn btn-danger text-uppercase mb-3 px-5"type="button"onClick={() =>{clearCart(); }}>
                    clear cart
                  </button>
                </Link>
                <h5>
                  <span className="text-title"> subtotal :</span>{" "}
                  <strong><span className="fa fa-inr fa-lg">{CartSubTotal}</span>  </strong>
                </h5>
                <h5>
                  <span className="text-title"> tax :</span>{" "}
                  <strong><span className="fa fa-inr fa-lg"> {CartTax}</span> </strong>
                </h5>
                <h5>
                  <span className="text-title"> total :</span>{" "}
                  <strong><span className="fa fa-inr fa-lg"> {CartTotal}</span></strong>
                </h5>
              </div>
            </div>
          </div>
      </React.Fragment>
    );
 }
}