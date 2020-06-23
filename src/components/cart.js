import React, { Component } from "react";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import { ProductConsumer } from "./context";
import CartTotals from './CartTotals';
import EmptyCart from "./EmptyCart";
export default class Store extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <CartColumns />
                  <CartList value={value} />
                <CartTotals value={value}/>
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}